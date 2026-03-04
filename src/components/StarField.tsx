import React, { useEffect, useRef } from 'react';

const StarField = ({
    speed = 0.5,
    backgroundColor = "black",
    starColor = "white",
    className = "",
    style = {}
}) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let w = canvas.width = window.innerWidth;
        let h = canvas.height = window.innerHeight;

        const stars: { x: number; y: number; z: number; o: number; twinkleSpeed: number; alpha: number; initialAlpha: number }[] = [];
        const count = 800;
        const focalLength = canvas.width / 2;

        for (let i = 0; i < count; i++) {
            const initialAlpha = Math.random() * 0.5 + 0.5; // 0.5 to 1.0
            stars.push({
                x: Math.random() * w - w / 2,
                y: Math.random() * h - h / 2,
                z: Math.random() * w,
                o: Math.random(), // Phase offset
                initialAlpha: initialAlpha,
                alpha: initialAlpha,
                twinkleSpeed: Math.random() * 0.05 + 0.02,
            } as any);
        }

        let animationFrameId: number;
        let time = 0;

        const moveStars = () => {
            if (!ctx) return;
            time += 1;

            ctx.fillStyle = backgroundColor;
            ctx.fillRect(0, 0, w, h);

            for (let i = 0; i < count; i++) {
                const star = stars[i];
                star.z -= speed * 10;

                if (star.z <= 0) {
                    star.x = Math.random() * w - w / 2;
                    star.y = Math.random() * h - h / 2;
                    star.z = w;
                }

                const x = (star.x * focalLength) / star.z + w / 2;
                const y = (star.y * focalLength) / star.z + h / 2;
                const radius = focalLength / star.z;

                // Simple Fade
                const currentAlpha = star.initialAlpha;

                // Draw star (Simple Circle)
                ctx.beginPath();
                ctx.fillStyle = starColor;
                ctx.globalAlpha = currentAlpha;
                ctx.arc(x, y, radius > 0 ? radius : 0, 0, Math.PI * 2);
                ctx.fill();

                ctx.globalAlpha = 1.0; // Reset
            }

            animationFrameId = requestAnimationFrame(moveStars);
        };

        const handleResize = () => {
            w = canvas.width = window.innerWidth;
            h = canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', handleResize);
        moveStars();

        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationFrameId);
        };
    }, [speed, backgroundColor, starColor]);

    return (
        <canvas
            ref={canvasRef}
            className={className}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                zIndex: 0,
                pointerEvents: 'none',
                ...style
            }}
        />
    );
};

export default StarField;
