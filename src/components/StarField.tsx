import React, { useEffect, useRef } from 'react';

const StarField = ({ speed = 0.5, backgroundColor = "black", starColor = "white" }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let w = canvas.width = window.innerWidth;
        let h = canvas.height = window.innerHeight;

        const stars: { x: number; y: number; z: number; o: number }[] = [];
        const count = 800;
        const focalLength = canvas.width / 2;

        for (let i = 0; i < count; i++) {
            stars.push({
                x: Math.random() * w - w / 2,
                y: Math.random() * h - h / 2,
                z: Math.random() * w,
                o: '0.' + Math.floor(Math.random() * 99) + 1,
            } as any);
        }

        let animationFrameId: number;

        const moveStars = () => {
            if (!ctx) return;
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

                // Draw star
                ctx.beginPath();
                ctx.fillStyle = starColor;
                ctx.arc(x, y, radius > 0 ? radius : 0, 0, Math.PI * 2);
                ctx.fill();
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
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                zIndex: 0,
                pointerEvents: 'none'
            }}
        />
    );
};

export default StarField;
