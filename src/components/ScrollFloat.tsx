import React, { useEffect, useRef, ReactNode } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ScrollFloatProps {
    children: ReactNode;
    scrollContainerRef?: React.RefObject<HTMLElement>;
    textClassName?: string;
    animationDuration?: number;
    ease?: string;
    scrollStart?: string;
    scrollEnd?: string;
    stagger?: number;
}

const ScrollFloat: React.FC<ScrollFloatProps> = ({
    children,
    scrollContainerRef,
    textClassName = "",
    animationDuration = 1,
    ease = "back.inOut(2)",
    scrollStart = "center bottom+=50%",
    scrollEnd = "bottom bottom-=40%",
    stagger = 0.03,
}) => {
    const containerRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;

        const scroller =
            scrollContainerRef && scrollContainerRef.current
                ? scrollContainerRef.current
                : window;

        const charElements = el.querySelectorAll('.char');

        const ctx = gsap.context(() => {
            gsap.fromTo(
                charElements,
                {
                    willChange: 'transform, opacity',
                    transformOrigin: '50% 50%',
                    opacity: 0,
                    scale: 0.5,
                    z: -800,
                    rotationX: 90,
                },
                {
                    ease: ease,
                    duration: animationDuration,
                    opacity: 1,
                    scale: 1,
                    z: 0,
                    rotationX: 0,
                    stagger: stagger,
                    scrollTrigger: {
                        trigger: el,
                        scroller,
                        start: scrollStart,
                        end: scrollEnd,
                        scrub: true,
                    },
                }
            );
        }, containerRef);

        return () => ctx.revert();
    }, [scrollContainerRef, animationDuration, ease, scrollStart, scrollEnd, stagger]);

    const splitText = (text: ReactNode) => {
        if (typeof text !== 'string') return text;
        return text.split('').map((char, index) => (
            <span key={index} className="char inline-block">
                {char === ' ' ? '\u00A0' : char}
            </span>
        ));
    };

    return (
        <span ref={containerRef} className={`perspective-[500px] inline-block ${textClassName}`}>
            {splitText(children)}
        </span>
    );
};

export default ScrollFloat;
