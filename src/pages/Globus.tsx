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
        { label: 'Linkedin', link: 'https://www.linkedin.com/company/vitsionmoviemakersclub/' },
        { label: 'LetterBox', link: 'https://letterboxd.com/vitsion/' },
        { label: 'YouTube', link: 'http://www.youtube.com/@VITSIONMovieMakers' }
    ];

    return (
        <div className="relative min-h-screen w-full overflow-hidden bg-[#2a0845] text-white">
            {/* Background stars in Gold, Purple background */}
            <StarField speed={1} backgroundColor="#2a0845" starColor="#D4AF37" />

            {/* Wrapping Paper Animation Overlay */}
            <AnimatePresence mode='wait'>
                {!isUnwrapped && (
                    <motion.div
                        className="absolute inset-0 z-[100] flex items-center justify-center perspective-[2500px] cursor-pointer"
                        onClick={() => setIsUnwrapped(true)}
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0, transition: { duration: 1, delay: 1 } }}
                    >
                        {/* Interactive Hint */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1, duration: 1, repeat: Infinity, repeatType: "reverse" }}
                            className="absolute bottom-20 z-[60] text-white/80 font-light tracking-[0.3em] text-sm uppercase"
                        >
                            Click to Open
                        </motion.div>

                        {/* Shadow/Depth behind the paper */}
                        <div className="absolute inset-0 bg-black/40 z-0" />

                        {/* Left Flap */}
                        <motion.div
                            initial={{ rotateY: 0 }}
                            exit={{
                                rotateY: -130,
                                transition: { duration: 1.5, ease: "easeInOut" }
                            }}
                            style={{ transformOrigin: "left center" }}
                            className="w-1/2 h-full absolute left-0 bg-[#1a0b2e] border-r border-[#2d1b4e] shadow-2xl z-10 flex flex-col items-end justify-center overflow-hidden preserve-3d"
                        >
                            {/* Royal Rich Texture */}
                            <div className="absolute inset-0 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] mix-blend-overlay" />
                            <div className="absolute inset-0 bg-gradient-to-br from-[#240046] to-[#10002b]" />

                            {/* Horizontal Ribbon (Left) */}
                            <div className="w-full h-16 bg-gradient-to-r from-[#D4AF37] via-[#F7E7CE] to-[#AA8c2C] shadow-lg relative flex items-center justify-center">
                                {/* Slight fabric texture overlay on ribbon */}
                                <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')]" />
                                <div className="absolute top-0 w-full h-[1px] bg-white/40" />
                                <div className="absolute bottom-0 w-full h-[1px] bg-black/20" />
                            </div>
                        </motion.div>

                        {/* Right Flap */}
                        <motion.div
                            initial={{ rotateY: 0 }}
                            exit={{
                                rotateY: 130,
                                transition: { duration: 1.5, ease: "easeInOut" }
                            }}
                            style={{ transformOrigin: "right center" }}
                            className="w-1/2 h-full absolute right-0 bg-[#1a0b2e] border-l border-[#2d1b4e] shadow-2xl z-10 flex flex-col items-start justify-center overflow-hidden preserve-3d"
                        >
                            {/* Royal Rich Texture */}
                            <div className="absolute inset-0 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] mix-blend-overlay" />
                            <div className="absolute inset-0 bg-gradient-to-bl from-[#240046] to-[#10002b]" />

                            {/* Horizontal Ribbon (Right) */}
                            <div className="w-full h-16 bg-gradient-to-l from-[#D4AF37] via-[#F7E7CE] to-[#AA8c2C] shadow-lg relative flex items-center justify-center">
                                {/* Slight fabric texture overlay on ribbon */}
                                <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')]" />
                                <div className="absolute top-0 w-full h-[1px] bg-white/40" />
                                <div className="absolute bottom-0 w-full h-[1px] bg-black/20" />
                            </div>
                        </motion.div>

                        {/* Vertical Ribbon (Center Overlap) */}
                        <motion.div
                            className="absolute h-full w-16 z-20"
                            exit={{ opacity: 0, scale: 1.1, transition: { duration: 0.5 } }}
                        >
                            <div className="w-full h-full bg-gradient-to-b from-[#D4AF37] via-[#F7E7CE] to-[#AA8c2C] shadow-2xl flex justify-center">
                                <div className="w-[1px] h-full bg-white/30" />
                            </div>
                        </motion.div>

                        {/* Realistic Wax Seal (Replaces the 'Kid Loop' Bow) */}
                        <motion.div
                            initial={{ scale: 1 }}
                            whileHover={{ scale: 1.05 }}
                            exit={{
                                scale: 2,
                                opacity: 0,
                                rotate: 180,
                                transition: { duration: 0.8, ease: "backIn" }
                            }}
                            className="absolute z-50 rounded-full flex items-center justify-center drop-shadow-2xl"
                        >
                            {/* The Wax Seal Body */}
                            <div className="relative w-32 h-32 rounded-full bg-gradient-to-br from-[#9d0208] to-[#370617] shadow-[0_10px_20px_rgba(0,0,0,0.5),inset_0_2px_10px_rgba(255,255,255,0.2)] border-4 border-[#6a040f] flex items-center justify-center">
                                {/* Inner indented ring */}
                                <div className="w-24 h-24 rounded-full border-2 border-[#9d0208]/50 flex items-center justify-center shadow-[inset_0_4px_8px_rgba(0,0,0,0.4)]">
                                    {/* Gold Emblem/Logo in Center */}
                                    <div className="text-[#D4AF37] font-serif text-4xl font-bold opacity-90 drop-shadow-md">
                                        V
                                    </div>
                                </div>
                                {/* Highlight Sheen */}
                                <div className="absolute top-4 left-4 w-8 h-4 bg-white/10 rounded-[50%] blur-sm rotate-[-45deg]" />
                            </div>
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
                    logoUrl="/vitsion white.png"
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
                    animate={{ opacity: isUnwrapped ? 1 : 0, scale: isUnwrapped ? 1 : 0.8 }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
                    className="text-center"
                >
                    <motion.h1
                        className="text-5xl md:text-9xl font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F7E7CE] to-[#AA8c2C] mb-8 drop-shadow-sm"
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
                        transition={{ delay: 2.3, duration: 1 }}
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
