import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import GlobusNavbar from '@/components/GlobusNavbar';
import GlobusFooter from '@/components/GlobusFooter';

const Globus = () => {
    const navigate = useNavigate();

    return (
        <section className="min-h-screen w-full bg-[#000000] text-[#FFFFFF] relative overflow-x-hidden flex flex-col font-['Inter',sans-serif]">
            <GlobusNavbar />

            {/* Internal Styles for Web Fonts */}
            <style>
                {`
                    @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@300;400;500;600;700&family=Rubik+Dirt&family=Rubik+Glitch&family=Oswald:wght@700;900&display=swap');
                    .font-glitch { font-family: 'Rubik Dirt', 'Rubik Glitch', 'Oswald', system-ui; }
                    .font-bebas { font-family: 'Bebas Neue', cursive; }
                    .noise-bg {
                        background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
                        opacity: 0.05;
                    }
                `}
            </style>

            {/* HERO SECTION - Using Provided Image */}
            <div className="relative w-full h-screen min-h-[800px] flex flex-col items-center justify-center overflow-hidden bg-black">

                {/* Background Image Container */}
                <div
                    className="absolute inset-0 w-full h-full z-0"
                    style={{
                        backgroundImage: "url('/Globus/hero_tv_man.jpg')",
                        backgroundSize: 'cover',
                        backgroundPosition: 'center 20%',
                        backgroundRepeat: 'no-repeat'
                    }}
                >
                    {/* Optional subtle gradient fading at bottom to blend into next section */}
                    <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black to-transparent"></div>
                </div>

                <div className="relative z-10 w-full max-w-7xl px-4 md:px-6 flex flex-col items-center h-full pt-32 pb-16 justify-between pointer-events-none">

                    {/* Top Text Labels Wrappers */}
                    <motion.div
                        initial={{ opacity: 0, y: -2}}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="w-full flex justify-between absolute top-24 md:top-30 left-0 px-6 md:px-16"
                    >
                        <span className="font-bebas text-white text-2xl md:text-3xl lg:text-4xl tracking-widest uppercase truncate max-w-[40%] text-left drop-shadow-md">VIT CHENNAI</span>
                        <span className="font-bebas text-white text-2xl md:text-3xl lg:text-4xl tracking-widest uppercase truncate max-w-[40%] text-right drop-shadow-md">MARCH 23 - 27</span>
                    </motion.div>

                    {/* Central Text Overlaid above image */}
                    <div className="relative flex flex-col justify-center items-center w-full flex-grow mt-12 md:mt-16">

                        {/* GLOBUS Text positioned behind TV man conceptually by design (z-index wise handled by image/text contrast) */}
                        <motion.h1
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="font-glitch text-[#A6FF00] text-[6rem] md:text-[14rem] lg:text-[17rem] leading-none opacity-95 tracking-tight md:tracking-widest drop-shadow-[0_0_25px_rgba(166,255,0,0.5)] select-none text-center flex flex-col md:flex-row absolute md:-top-16 lg:-top-24 gap-4 md:gap-0"
                        >
                            <span className="">GLOBUS</span>
                        </motion.h1>

                        {/* 2K 26 Text positioned below GLOBUS & TV Head */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.6 }}
                            className="w-[85%] md:w-[70%] lg:w-[60%] flex justify-between z-10 absolute bottom-[25%]"
                        >
                            <span className="font-glitch text-[#A6FF00] text-6xl md:text-8xl lg:text-[9rem] drop-shadow-[0_0_20px_rgba(166,255,0,0.6)]">2K</span>
                            <span className="font-glitch text-[#A6FF00] text-6xl md:text-8xl lg:text-[9rem] drop-shadow-[0_0_20px_rgba(166,255,0,0.6)]">26</span>
                        </motion.div>
                    </div>

                    {/* Down Indicator */}
                    <div className="absolute bottom-8 animate-bounce text-white/70 z-30">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                        </svg>
                    </div>
                </div>
            </div>

            {/* CARDS SECTION */}
            <div className="relative z-20 w-full min-h-screen py-24 flex items-center bg-black">
                {/* Marbled/Swirly Background Setup */}
                <div className="absolute inset-0 noise-bg z-0 mix-blend-overlay"></div>
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/5 via-black to-black opacity-80 pointer-events-none z-0"></div>

                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 w-full z-10">

                    {/* Workshop Card */}
                    <motion.div
                        whileHover={{ y: -10 }}
                        transition={{ duration: 0.3 }}
                        onClick={() => navigate('/workshop')}
                        className="cursor-pointer rounded-2xl overflow-hidden p-8 h-[24rem] flex flex-col justify-end bg-gradient-to-b from-[#111111]/80 to-[#1A1A1A] backdrop-blur-md border border-white/5 group relative shadow-[0_20px_50px_-20px_rgba(255,215,0,0.3)]"
                    >
                        {/* Glowing Bottom Accent */}
                        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#FFD700] to-transparent opacity-30 group-hover:opacity-60 transition-opacity duration-500 blur-xl"></div>
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#FFD700] shadow-[0_0_20px_#FFD700]"></div>

                        <div className="relative z-10 flex flex-col gap-4">
                            <h2 className="text-3xl font-bold text-white tracking-wide">Workshops</h2>
                            <p className="text-[#CFCFCF] text-sm leading-relaxed">
                                Enhance your professional skills with our exclusive hands on learning session
                            </p>
                            <span className="text-white text-sm font-semibold flex items-center gap-2 group-hover:gap-4 transition-all duration-300 mt-2">
                                Learn more <span className="text-[#FFD700]">&rarr;</span>
                            </span>
                        </div>
                    </motion.div>

                    {/* Flagship Events Card */}
                    <motion.div
                        whileHover={{ y: -10 }}
                        transition={{ duration: 0.3 }}
                        onClick={() => navigate('/main-events')}
                        className="cursor-pointer rounded-2xl overflow-hidden p-8 h-[24rem] flex flex-col justify-end bg-gradient-to-b from-[#111111]/80 to-[#1A1A1A] backdrop-blur-md border border-white/5 group relative shadow-[0_20px_50px_-20px_rgba(255,0,51,0.3)]"
                    >
                        {/* Glowing Bottom Accent */}
                        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#FF0033] to-transparent opacity-30 group-hover:opacity-60 transition-opacity duration-500 blur-xl"></div>
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#FF0033] shadow-[0_0_20px_#FF0033]"></div>

                        <div className="relative z-10 flex flex-col gap-4">
                            <h2 className="text-3xl font-bold text-white tracking-wide">Flagship Events</h2>
                            <p className="text-[#CFCFCF] text-sm leading-relaxed">
                                Experience our flagship collaborative sessions and global networking gatherings
                            </p>
                            <span className="text-white text-sm font-semibold flex items-center gap-2 group-hover:gap-4 transition-all duration-300 mt-2">
                                Learn more <span className="text-[#FF0033]">&rarr;</span>
                            </span>
                        </div>
                    </motion.div>

                    {/* Online Events Card */}
                    <motion.div
                        whileHover={{ y: -10 }}
                        transition={{ duration: 0.3 }}
                        onClick={() => navigate('/online-events')}
                        className="cursor-pointer rounded-2xl overflow-hidden p-8 h-[24rem] flex flex-col justify-end bg-gradient-to-b from-[#111111]/80 to-[#1A1A1A] backdrop-blur-md border border-white/5 group relative shadow-[0_20px_50px_-20px_rgba(0,170,255,0.3)]"
                    >
                        {/* Glowing Bottom Accent */}
                        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#00AAFF] to-transparent opacity-30 group-hover:opacity-60 transition-opacity duration-500 blur-xl"></div>
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#00AAFF] shadow-[0_0_20px_#00AAFF]"></div>

                        <div className="relative z-10 flex flex-col gap-4">
                            <h2 className="text-3xl font-bold text-white tracking-wide">Online Events</h2>
                            <p className="text-[#CFCFCF] text-sm leading-relaxed">
                                Join interactively from anywhere in the world with our virtual event platform
                            </p>
                            <span className="text-white text-sm font-semibold flex items-center gap-2 group-hover:gap-4 transition-all duration-300 mt-2">
                                Learn more <span className="text-[#00AAFF]">&rarr;</span>
                            </span>
                        </div>
                    </motion.div>
                </div>
            </div>

            <GlobusFooter />
        </section>
    );
};

export default Globus;
