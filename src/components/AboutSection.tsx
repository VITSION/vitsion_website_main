import React, { useEffect, useRef } from "react";

// Pure CSS animation approach — zero Framer Motion, zero JS on scroll
// Intersection Observer fires ONCE and just toggles a CSS class
// The browser handles everything else on the compositor thread = no lag

const AboutSection = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const els = sectionRef.current?.querySelectorAll(".reveal-item");
        if (!els) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        (entry.target as HTMLElement).style.animationPlayState = "running";
                        observer.unobserve(entry.target); // fire only once
                    }
                });
            },
            { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
        );

        els.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <div ref={sectionRef} className="w-full bg-transparent py-16 md:py-24 relative">
            <style>{`
                @keyframes aboutFadeUp {
                    from { opacity: 0; transform: translateY(20px); }
                    to   { opacity: 1; transform: translateY(0);    }
                }
                .reveal-item {
                    opacity: 0;
                    animation: aboutFadeUp 0.55s ease-out forwards;
                    animation-play-state: paused;
                }
                .reveal-delay-1 { animation-delay: 0.05s; }
                .reveal-delay-2 { animation-delay: 0.12s; }
                .reveal-delay-3 { animation-delay: 0.20s; }
            `}</style>

            <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 gap-16 md:gap-24">

                {/* Main Heading */}
                <h1 className="reveal-item text-center text-5xl md:text-7xl font-black text-white tracking-widest">
                    ABOUT
                </h1>

                {/* ── VITSION ── */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">

                    {/* Left: Content */}
                    <div className="flex flex-col gap-6 order-2 md:order-1">
                        <h2 className="reveal-item reveal-delay-1 text-4xl md:text-6xl font-black text-[#AA8c2C] tracking-wider text-center">
                            VITSION
                        </h2>
                        <p className="reveal-item reveal-delay-2 text-gray-300 text-lg md:text-xl leading-relaxed font-light text-justify">
                            VITSION Movie Makers Club is the official filmmaking and visual storytelling community of VIT Chennai.
                            The club brings together passionate students interested in cinema, short films, screenwriting, direction,
                            cinematography, editing, and production. VITSION serves as a creative platform where ideas turn into
                            stories and stories into films through hands-on projects, workshops, collaborations, and screenings.
                            The club aims to nurture talent, encourage original storytelling, and build a strong filmmaking culture
                            on campus.
                        </p>
                    </div>

                    {/* Right: Logo — static, no animation */}
                    <div className="flex justify-center md:justify-end order-1 md:order-2">
                        <img
                            src="/vitsion white.webp"
                            alt="Vitsion Logo"
                            width={320}
                            height={320}
                            className="w-40 h-40 md:w-64 md:h-64 lg:w-80 lg:h-80 object-contain opacity-80"
                        />
                    </div>
                </div>

                {/* ── VIT CHENNAI ── */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">

                    {/* Left: Logo — static, eager, async decode */}
                    <div className="flex justify-center md:justify-start">
                        <img
                            src="/Home/VIT15 White Logo.webp"
                            alt="VIT Chennai Logo"
                            loading="eager"
                            decoding="async"
                            className="w-full max-w-sm object-contain opacity-80"
                        />
                    </div>

                    {/* Right: Content */}
                    <div className="flex flex-col gap-6">
                        <h2 className="reveal-item reveal-delay-1 text-4xl md:text-6xl font-black text-[#AA8c2C] tracking-wider text-center">
                            VIT CHENNAI
                        </h2>
                        <p className="reveal-item reveal-delay-2 text-gray-300 text-lg md:text-xl leading-relaxed font-light text-justify">
                            For over 15 years, VIT Chennai has built a strong record of academic excellence, offering students the
                            freedom to tailor their education through the Fully Flexible Credit System (FFCS). This system allows
                            learners to choose their courses, faculty, and schedules according to their interests and goals.
                            The campus encourages a globally competitive learning environment through project-based education,
                            along with ample opportunities for research and innovation. Supported by state-of-the-art infrastructure
                            and a vibrant student community, VIT Chennai continues to promote holistic development and high academic
                            standards.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AboutSection;
