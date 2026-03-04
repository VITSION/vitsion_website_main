import React, { useLayoutEffect, useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { Draggable } from "gsap/all";

gsap.registerPlugin(Draggable);

const CurtainReveal: React.FC = () => {
    const [complete, setComplete] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const curtainLeftRef = useRef<SVGGElement>(null);
    const curtainRightRef = useRef<SVGGElement>(null);
    const ropeRef = useRef<SVGGElement>(null);
    const timelineRef = useRef<gsap.core.Timeline | null>(null);

    useEffect(() => {
        // Reduced motion check removed for debugging

        // Lock body scroll
        const originalStyle = window.getComputedStyle(document.body).overflow;
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = originalStyle;
            if (timelineRef.current) timelineRef.current.kill();
        };
    }, []);

    useLayoutEffect(() => {
        if (complete) return;

        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                paused: true,
                onComplete: () => {
                    setComplete(true);
                    document.body.style.overflow = "";
                },
            });

            timelineRef.current = tl;

            // --- Animation Definition ---
            // Triggered sequentially AFTER the pull

            // 1. Curtains fold (scale) into the sides
            tl.to(curtainLeftRef.current, {
                scaleX: 0,
                transformOrigin: "0% 0%",
                ease: "power2.inOut",
                duration: 1.5,
            }, 0);

            tl.to(curtainRightRef.current, {
                scaleX: 0,
                transformOrigin: "100% 0%",
                ease: "power2.inOut",
                duration: 1.5,
            }, 0);

            // 2. Rope fades out / drops away
            tl.to(ropeRef.current, {
                y: 900, // Drop down further off screen
                opacity: 0,
                duration: 1.5,
                ease: "power1.in"
            }, 0);


            // --- Draggable Setup ---
            Draggable.create(ropeRef.current, {
                type: "y",
                trigger: ropeRef.current,
                bounds: { minY: 0, maxY: 300 },
                inertia: false,
                onDrag: function () {
                    // No scrubbing logic - just rope movement
                },
                onDragEnd: function () {
                    // Check physical pull distance (pixels)
                    if (this.y > 200) {
                        // SUCCESS: Trigger animation
                        this.disable();

                        // 1. Animate rope hitting the bottom of its travel quickly
                        gsap.to(this.target, { y: 250, duration: 0.2, ease: "power2.in" });

                        // 2. Start the Curtain Reveal
                        tl.play();
                    } else {
                        // SNAP BACK: Not pulled enough
                        gsap.to(this.target, { y: 0, duration: 0.5, ease: "bounce.out" });
                    }
                },
            });
        }, containerRef);

        return () => ctx.revert();
    }, [complete]);

    const handleMobileTap = () => {
        // Auto-play logic for mobile
        if (ropeRef.current && timelineRef.current) {
            gsap.to(ropeRef.current, { y: 300, duration: 1, ease: "power2.inOut" });
            timelineRef.current.play();
        }
    };

    if (complete) return null;

    return (
        <div
            ref={containerRef}
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                zIndex: 9999,
                backgroundColor: "transparent",
            }}
        >
            <svg
                width="100%"
                height="100%"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                style={{ display: "block" }}
            >
                <defs>
                    <linearGradient id="curtainGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#4a0404" />
                        <stop offset="20%" stopColor="#720e0e" />
                        <stop offset="40%" stopColor="#4a0404" />
                        <stop offset="60%" stopColor="#600808" />
                        <stop offset="80%" stopColor="#7a1010" />
                        <stop offset="100%" stopColor="#3d0303" />
                    </linearGradient>
                    <filter id="ropeShadow">
                        <feDropShadow dx="0" dy="2" stdDeviation="2" floodOpacity="0.5" />
                    </filter>
                </defs>

                {/* Left Curtain Group */}
                <g ref={curtainLeftRef}>
                    <rect x="0" y="0" width="50" height="100" fill="url(#curtainGradient)" stroke="none" />
                    <rect x="10" y="0" width="2" height="100" fill="#000" opacity="0.3" />
                    <rect x="25" y="0" width="3" height="100" fill="#000" opacity="0.2" />
                    <rect x="40" y="0" width="2" height="100" fill="#000" opacity="0.3" />
                    <rect x="48" y="0" width="2" height="100" fill="#220000" />
                </g>

                {/* Right Curtain Group */}
                <g ref={curtainRightRef}>
                    <rect x="50" y="0" width="50" height="100" fill="url(#curtainGradient)" stroke="none" />
                    <rect x="60" y="0" width="2" height="100" fill="#000" opacity="0.3" />
                    <rect x="75" y="0" width="3" height="100" fill="#000" opacity="0.2" />
                    <rect x="90" y="0" width="2" height="100" fill="#000" opacity="0.3" />
                    <rect x="50" y="0" width="2" height="100" fill="#220000" />
                </g>
            </svg>

            {/* Rope Overlay - Separate SVG for better interaction area and aspect ratio control on the knob */}
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: "95%",
                    transform: "translateX(-50%)",
                    width: "120px",
                    height: "100%",
                    pointerEvents: "none",
                }}
            >
                <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 120 600"
                    style={{ overflow: "visible" }}
                >
                    <g ref={ropeRef}
                        style={{ cursor: "grab", pointerEvents: "all" }}
                        onClick={handleMobileTap}
                        filter="url(#ropeShadow)"
                    >
                        {/* The Rope Line */}
                        <line x1="40" y1="-200" x2="60" y2="100" stroke="#C4A484" strokeWidth="4" />

                        {/* The Handle/Knob */}
                        <g transform="translate(59,  100)">
                            {/* Rope Knot */}
                            <circle cy="-15" r="6" fill="#C4A484" />

                            {/* Handle Body */}
                            <path d="M -20 0 Q 0 10 20 0 L 15 40 Q 0 50 -15 40 Z" fill="#D4AF37" stroke="#8B4513" strokeWidth="2" />

                            {/* Decorative Ring */}
                            <circle cy="35" r="5" fill="#8B4513" />

                            {/* Text */}
                            <text y="25" textAnchor="middle" fill="#3e1c00" fontSize="10" fontWeight="bold" letterSpacing="1" style={{ userSelect: "none" }}>
                                PULL
                            </text>
                        </g>
                    </g>
                </svg>
            </div>
        </div>
    );
};

export default CurtainReveal;