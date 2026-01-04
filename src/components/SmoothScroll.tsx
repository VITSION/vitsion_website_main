import { useEffect } from 'react';
import Lenis from 'lenis';

const SmoothScroll = () => {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.5, // Smoother glide
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smooth: true,
            mouseMultiplier: 1,
            smoothTouch: false, // Keep false to let native touch momentum work slightly, or true? "smoothTouch" is deprecated in v1? No.
            // Actually, for "smooth and fast", often default settings are best.
            // Let's stick to a slightly higher duration for that "luxury" feel.
            touchMultiplier: 1.5,
        } as any);

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);

    return null;
};

export default SmoothScroll;
