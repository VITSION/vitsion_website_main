import React, { useState } from 'react';
import StaggeredMenu from "@/components/StaggeredMenu";
import StarField from "@/components/StarField";
import { motion } from "framer-motion";
import CurtainReveal from "@/components/CurtainReveal";

const Globus = () => {

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
        <section>
        <div className="relative min-h-screen w-full overflow-hidden bg-[#2a0845] text-white">
            <CurtainReveal />
            {/* Background stars in Gold, Purple background */}
            <StarField speed={1} backgroundColor="#080708ff" starColor="#d1ab2eff" />

            {/* Staggered Menu Overlay */}
            <div className="absolute inset-0 z-50 pointer-events-none  top-0 h-screen w-full">
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
                    animate={{ opacity: 1, scale: 1 }}
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
    </section>
    );
};

export default Globus;