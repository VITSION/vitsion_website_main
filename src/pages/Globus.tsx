import React, { useState } from 'react';
import StaggeredMenu from "@/components/StaggeredMenu";
import StarField from "@/components/StarField";
import { motion, AnimatePresence } from "framer-motion";

const Globus = () => {
    const [isUnwrapped, setIsUnwrapped] = useState(false);

    const menuItems = [
        { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
        { label: 'Globus', ariaLabel: 'Globus', link: '/globus' },
        { label: 'Events', ariaLabel: 'View our events', link: '/events' },
        { label: 'Films', ariaLabel: 'View our films', link: '/films' },
        { label: 'Gallery', ariaLabel: 'Browse gallery', link: '/gallery' },
        { label: 'Team', ariaLabel: 'Meet the team', link: '/team' },
        { label: 'Contact', ariaLabel: 'Get in touch', link: '/contact' }
    ];

    const socialItems = [
        { label: 'Instagram', link: 'https://www.instagram.com/vitsionmoviemakers' },
        { label: 'LetterBox', link: 'https://letterboxd.com/vitsion/' }
    ];

    return (
        <div className="relative min-h-screen w-full overflow-hidden bg-white text-black">
            {/* Background stars in Gold, White background */}
            <StarField speed={1} backgroundColor="#ffffff" starColor="#D4AF37" />

            {/* Wrapping Paper Animation Overlay */}
            <AnimatePresence>
                {!isUnwrapped && (
                    <motion.div
                        className="absolute inset-0 z-[100] flex pointer-events-none"
                        onAnimationComplete={() => setIsUnwrapped(true)}
                    >
                        {/* Left Half of Gift */}
                        <motion.div
                            initial={{ x: 0 }}
                            animate={{ x: "-100%" }}
                            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 1.2 }}
                            className="w-1/2 h-full bg-white relative border-r-2 border-[#D4AF37] overflow-hidden shadow-2xl z-10"
                        >
                            {/* Texture: Gold Dots on White */}
                            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_#D4AF37_1.5px,_transparent_1.5px)] bg-[length:30px_30px]" />

                            {/* Horizontal Ribbon (Left) */}
                            <div className="absolute top-1/2 left-0 w-full h-20 -translate-y-1/2 bg-gradient-to-b from-[#8E2DE2] to-[#4A00E0] shadow-xl flex items-center justify-center border-y-2 border-[#D4AF37]">
                                <div className="w-full h-[1px] bg-[#ffffff]/30"></div>
                            </div>

                            {/* Vertical Ribbon (Left Edge) */}
                            <div className="absolute top-0 right-0 w-10 h-full bg-gradient-to-r from-[#8E2DE2] to-[#4A00E0] shadow-xl border-l-[1px] border-[#D4AF37]"></div>
                        </motion.div>

                        {/* Right Half of Gift */}
                        <motion.div
                            initial={{ x: 0 }}
                            animate={{ x: "100%" }}
                            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 1.2 }}
                            className="w-1/2 h-full bg-white relative border-l-2 border-[#D4AF37] overflow-hidden shadow-2xl z-10"
                        >
                            {/* Texture */}
                            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_#D4AF37_1.5px,_transparent_1.5px)] bg-[length:30px_30px]" />

                            {/* Horizontal Ribbon (Right) */}
                            <div className="absolute top-1/2 left-0 w-full h-20 -translate-y-1/2 bg-gradient-to-b from-[#8E2DE2] to-[#4A00E0] shadow-xl flex items-center justify-center border-y-2 border-[#D4AF37]">
                                <div className="w-full h-[1px] bg-[#ffffff]/30"></div>
                            </div>

                            {/* Vertical Ribbon (Right Edge) */}
                            <div className="absolute top-0 left-0 w-10 h-full bg-gradient-to-l from-[#8E2DE2] to-[#4A00E0] shadow-xl border-r-[1px] border-[#D4AF37]"></div>
                        </motion.div>

                        {/* Central Bow / Knot - Animated */}
                        <motion.div
                            initial={{ scale: 1, opacity: 1, rotate: 0 }}
                            animate={{ scale: [1, 1.2, 0], opacity: [1, 1, 0], rotate: [0, 15, 0] }}
                            transition={{ duration: 0.8, delay: 0.4, ease: "easeInOut", times: [0, 0.4, 1] }}
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 flex flex-col items-center justify-center filter drop-shadow-2xl"
                        >
                            {/* The Bow Loops - Using SVG for smoother look */}
                            <svg width="200" height="200" viewBox="0 0 200 200" className="overflow-visible">
                                <defs>
                                    <linearGradient id="purpleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#9d4edd" />
                                        <stop offset="100%" stopColor="#3c096c" />
                                    </linearGradient>
                                    <filter id="glow">
                                        <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
                                        <feMerge>
                                            <feMergeNode in="coloredBlur" />
                                            <feMergeNode in="SourceGraphic" />
                                        </feMerge>
                                    </filter>
                                </defs>
                                {/* Left Loop */}
                                <motion.path
                                    d="M100 100 C 60 40, 0 60, 40 100 C 0 140, 60 160, 100 100"
                                    fill="url(#purpleGradient)"
                                    stroke="#D4AF37"
                                    strokeWidth="2"
                                    initial={{ pathLength: 0, opacity: 0 }}
                                    animate={{ pathLength: 1, opacity: 1 }}
                                    transition={{ duration: 0.5 }}
                                />
                                {/* Right Loop */}
                                <motion.path
                                    d="M100 100 C 140 40, 200 60, 160 100 C 200 140, 140 160, 100 100"
                                    fill="url(#purpleGradient)"
                                    stroke="#D4AF37"
                                    strokeWidth="2"
                                    initial={{ pathLength: 0, opacity: 0 }}
                                    animate={{ pathLength: 1, opacity: 1 }}
                                    transition={{ duration: 0.5 }}
                                />
                                {/* Center Knot */}
                                <circle cx="100" cy="100" r="15" fill="#D4AF37" stroke="#ffffff" strokeWidth="1" />
                            </svg>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Staggered Menu Overlay */}
            <div className="absolute inset-0 z-50 pointer-events-none sticky top-0 h-screen w-full">
                <StaggeredMenu
                    position="right"
                    items={menuItems}
                    socialItems={socialItems}
                    displaySocials={true}
                    displayItemNumbering={false}
                    menuButtonColor="#D4AF37"
                    openMenuButtonColor="#0f0e0eff"
                    changeMenuColorOnOpen={true}
                    colors={['#fff', '#f9f9f9', '#D4AF37']}
                    logoUrl="/vitsion_new_logo.png"
                    accentColor="#D4AF37"
                    isFixed={true}
                    className=""
                    onMenuOpen={() => { }}
                    onMenuClose={() => { }}
                />
            </div>

            <main className="relative z-10 flex flex-col items-center justify-center h-screen px-4">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: 1.5 }}
                    className="text-center"
                >
                    <motion.h1
                        className="text-6xl md:text-9xl font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F7E7CE] to-[#AA8c2C] mb-8 drop-shadow-sm"
                        animate={{
                            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                        }}
                        transition={{
                            duration: 5,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                        style={{ backgroundSize: "200% auto" }}
                    >
                        GLOBUS '26
                    </motion.h1>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 2, duration: 1 }}
                        className="flex items-center justify-center gap-4"
                    >
                        <div className="h-[2px] w-12 bg-[#D4AF37]"></div>
                        <p className="text-xl md:text-3xl font-light tracking-[0.5em] text-[#AA8c2C]">
                            COMING SOON
                        </p>
                        <div className="h-[2px] w-12 bg-[#D4AF37]"></div>
                    </motion.div>
                </motion.div>
            </main>
        </div>
    );
};

export default Globus;
