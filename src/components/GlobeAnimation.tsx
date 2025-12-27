import React, { useEffect, useRef } from 'react';

const GlobeAnimation = ({
    particleColor = "rgba(66, 153, 225, 0.8)",
    lineColor = "rgba(66, 153, 225, 0.15)",
    backgroundColor = "#000000"
}) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;

        // Configuration
        const globeRadius = Math.min(width, height) * 0.35;
        const particleCount = 450;
        const connectionDistance = globeRadius * 0.3;
        const rotationSpeed = 0.002;

        let particles: { x: number; y: number; z: number; theta: number; phi: number }[] = [];

        // Initialize particles on a sphere
        for (let i = 0; i < particleCount; i++) {
            const theta = Math.random() * 2 * Math.PI;
            const phi = Math.acos((Math.random() * 2) - 1);

            particles.push({
                x: 0,
                y: 0,
                z: 0,
                theta, // longitude
                phi    // latitude
            });
        }

        let rotationX = 0;
        let rotationY = 0;

        const animate = () => {
            if (!ctx) return;

            ctx.fillStyle = backgroundColor;
            ctx.fillRect(0, 0, width, height);

            // Update rotation
            rotationY += rotationSpeed;
            rotationX += rotationSpeed * 0.5;

            // Sort particles by Z depth for proper layering (though for dots it matters less, for lines it helps)
            // But for simple aesthetic, standard draw order is usually okay or we just draw all lines then all dots.

            const projectedPoints: { x: number; y: number; z: number; scale: number; alpha: number }[] = [];

            // 1. Calculate Positions
            particles.forEach(p => {
                // Sphere coordinates to Cartesian
                let x = globeRadius * Math.sin(p.phi) * Math.cos(p.theta);
                let y = globeRadius * Math.sin(p.phi) * Math.sin(p.theta);
                let z = globeRadius * Math.cos(p.phi);

                // Rotate around Y axis
                let tx = x * Math.cos(rotationY) - z * Math.sin(rotationY);
                let tz = x * Math.sin(rotationY) + z * Math.cos(rotationY);
                x = tx; z = tz;

                // Rotate around X axis (tilt)
                let ty = y * Math.cos(rotationX) - z * Math.sin(rotationX);
                tz = y * Math.sin(rotationX) + z * Math.cos(rotationX);
                y = ty; z = tz;

                // Project 3D to 2D
                // Perspective projection
                const scale = 250 / (250 + z); // Perspective scale
                const x2d = (x * scale) + width / 2;
                const y2d = (y * scale) + height / 2;
                const alpha = Math.max(0.1, (scale - 0.5) * 1.5); // Fade out back particles

                projectedPoints.push({ x: x2d, y: y2d, z, scale, alpha });
            });

            // 2. Draw Connections
            ctx.lineWidth = 1;
            ctx.lineCap = 'round';

            for (let i = 0; i < projectedPoints.length; i++) {
                const p1 = projectedPoints[i];
                if (p1.z > 0 || p1.alpha < 0.2) continue; // Optimization: don't draw connections for very far/hidden points

                for (let j = i + 1; j < projectedPoints.length; j++) {
                    const p2 = projectedPoints[j];
                    const dx = p1.x - p2.x;
                    const dy = p1.y - p2.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < connectionDistance) {
                        // Opacity based on distance and particle depth depth
                        const opacity = (1 - dist / connectionDistance) * Math.min(p1.alpha, p2.alpha) * 0.4;
                        if (opacity > 0) {
                            ctx.beginPath();
                            ctx.strokeStyle = lineColor.replace(')', `, ${opacity})`).replace('rgb', 'rgba');
                            ctx.moveTo(p1.x, p1.y);
                            ctx.lineTo(p2.x, p2.y);
                            ctx.stroke();
                        }
                    }
                }
            }

            // 3. Draw Particles
            projectedPoints.forEach(p => {
                ctx.beginPath();
                ctx.arc(p.x, p.y, 2 * p.scale, 0, Math.PI * 2);
                ctx.fillStyle = particleColor.replace(')', `, ${p.alpha})`).replace('rgb', 'rgba');
                ctx.fill();
            });

            requestAnimationFrame(animate);
        };

        const handleResize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', handleResize);
        const animId = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animId);
        };
    }, [particleColor, lineColor, backgroundColor]);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 w-full h-full pointer-events-none"
            style={{ zIndex: 0 }}
        />
    );
};

export default GlobeAnimation;
