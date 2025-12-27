"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ClapperBoard = () => {
    const clapperRef = useRef(null);
    const topStickRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.to(topStickRef.current, {
                rotation: 0,
                svgOrigin: "15 38", // Use svgOrigin for precise SVG coordinate rotation
                ease: "power2.out",
                scrollTrigger: {
                    trigger: document.body,
                    start: "top top",
                    end: "bottom bottom",
                    scrub: true
                }
            });
        }, clapperRef);

        return () => ctx.revert();
    }, []);

    return (
        <div
            ref={clapperRef}
            className="fixed left-4 top-32 md:left-28 md:top-1/2 md:-translate-y-1/2 z-30 pointer-events-none transition-all duration-300"
        >
            <div className="clapper-svg-container transform -rotate-[10deg] scale-[0.8] md:scale-[2.0] transition-transform duration-300">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 100 100"
                    fill="none"
                    width="120px"
                    height="120px"
                    style={{ overflow: 'visible' }}
                >
                    <defs>
                        <clipPath id="stickClip">
                            <rect width="70" height="12" rx="2" />
                        </clipPath>
                    </defs>

                    {/* Bottom Body */}
                    <rect x="15" y="50" width="70" height="35" rx="2" fill="#000000" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />

                    {/* Stationary Top Part (Hinge area/Lower lip of mechanism) */}
                    <g transform="translate(15, 38)">
                        <rect width="70" height="12" rx="2" fill="#000000" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                        <g clipPath="url(#stickClip)">
                            <path d="M12,-5 L24,-5 L12,17 L0,17 Z M36,-5 L48,-5 L36,17 L24,17 Z M60,-5 L72,-5 L60,17 L48,17 Z" fill="#ffffff" />
                        </g>
                        <circle cx="5" cy="6" r="1.5" fill="#ffffff" />
                    </g>

                    {/* Moving Clapstick */}
                    {/* The group is rotated -20 initially. We animate 'rotation' to 0. */}
                    <g
                        ref={topStickRef}
                        transform="rotate(-20, 15, 38)"
                    >
                        <g transform="translate(15, 38)">
                            <rect width="70" height="12" rx="2" fill="#000000" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                            <g clipPath="url(#stickClip)">
                                <path d="M12,-5 L24,-5 L12,17 L0,17 Z M36,-5 L48,-5 L36,17 L24,17 Z M60,-5 L72,-5 L60,17 L48,17 Z" fill="#ffffff" />
                            </g>
                            <circle cx="5" cy="6" r="1.5" fill="#ffffff" />
                        </g>
                    </g>
                </svg>
            </div>
        </div>
    );
};

export default ClapperBoard;
