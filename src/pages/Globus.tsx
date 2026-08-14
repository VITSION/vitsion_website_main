import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import GlobusFooter from '@/components/GlobusFooter';

const Globus = () => {
    const navigate = useNavigate();

    return (
        <section className="min-h-screen w-full bg-[#000000] text-[#FFFFFF] relative overflow-x-hidden flex flex-col font-['Inter',sans-serif]">

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
                    .glass-tile-pattern {
                        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20'%3E%3Cdefs%3E%3CradialGradient id='t' cx='30%25' cy='30%25' r='80%25'%3E%3Cstop offset='0%25' stop-color='rgba(255,255,255,0.1)'/%3E%3Cstop offset='100%25' stop-color='rgba(0,0,0,0.3)'/%3E%3C/radialGradient%3E%3C/defs%3E%3Crect width='20' height='20' fill='url(%23t)' stroke='rgba(0,0,0,0.3)' stroke-width='0.5'/%3E%3C/svg%3E");
                        background-size: 20px 20px;
                    }
                `}
            </style>

            {/* HERO SECTION - Using Provided Image */}
            <div className="relative w-full h-screen min-h-[800px] flex flex-col items-center justify-center overflow-hidden bg-black">

                {/* Background Image Container */}
                <div
                    className="absolute inset-0 w-full h-full z-0"
                    style={{
                        backgroundImage: "url('/Globus/hero_tv_man.webp')",
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                    }}
                >
                </div>

                <div className="relative z-10 w-full mx-auto px-4 md:px-8 flex flex-col items-center justify-center h-full min-h-screen pt-24 pb-16 pointer-events-none">

                    {/* Down Indicator */}
                    <div className="absolute bottom-10 text-white/70 z-30 animate-bounce">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                        </svg>
                    </div>
                </div>
            </div>

            {/* SPONSORS SECTION */}
            <div
                id="sponsors"
                className="relative w-full z-20 border-t border-white/5 flex flex-col items-center py-20 sm:py-28 md:py-36 bg-black"
                style={{
                    backgroundImage: "url('/Globus/logo background.png')",
                    backgroundSize: '100% 100%',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}
            >
                {/* Optional subtle overlay to ensure logos always contrast */}
                <div className="absolute inset-0 bg-black/10 pointer-events-none z-0"></div>

                {/* Vertical Sponsor Layout Structure */}
                <div className="relative w-full flex flex-col justify-around gap-20 sm:gap-28 md:gap-36 z-10 pointer-events-none">

                    {/* Top: Title Sponsor */}
                    <div className="w-full flex flex-col items-center justify-center gap-4 sm:gap-8 pointer-events-auto">
                        <div className="drop-shadow-[0_0_15px_rgba(0,0,0,0.9)] px-4">
                            <h2
                                className="text-3xl sm:text-5xl md:text-6xl font-black tracking-widest text-[#A6FF00] drop-shadow-[0_0_20px_rgba(166,255,0,0.6)] uppercase text-center"
                                style={{ fontFamily: "'Arial Black', sans-serif" }}
                            >
                                TITLE SPONSORS
                            </h2>
                        </div>

                        {/* Title Sponsor Logos */}
                        <div className="flex flex-col md:flex-row items-center justify-center gap-12 sm:gap-20 md:gap-32 w-full mt-2 md:mt-6">
                            <img
                                src="/Globus/t1.png"
                                alt="Title Sponsor 1"
                                className="h-32 sm:h-48 md:h-64 lg:h-[22rem] w-auto max-w-[90vw] object-contain drop-shadow-[0_0_30px_rgba(166,255,0,0.3)] hover:scale-105 hover:drop-shadow-[0_0_40px_rgba(166,255,0,0.6)] transition-all duration-500 cursor-pointer"
                            />
                            <img
                                src="/Globus/t2.webp"
                                alt="Title Sponsor 2"
                                className="h-32 sm:h-48 md:h-64 lg:h-[22rem] w-auto max-w-[90vw] object-contain drop-shadow-[0_0_30px_rgba(166,255,0,0.3)] hover:scale-105 hover:drop-shadow-[0_0_40px_rgba(166,255,0,0.6)] transition-all duration-500 cursor-pointer"
                            />
                        </div>
                    </div>

                    {/* Middle: Gold Sponsor */}
                    <div className="w-full flex flex-col items-center justify-center gap-4 sm:gap-8 pointer-events-auto">
                        <div className="drop-shadow-[0_0_15px_rgba(0,0,0,0.9)] px-4">
                            <h2
                                className="text-3xl sm:text-5xl md:text-6xl font-black tracking-widest text-[#FFD700] drop-shadow-[0_0_20px_rgba(255,215,0,0.6)] uppercase text-center"
                                style={{ fontFamily: "'Arial Black', sans-serif" }}
                            >
                                GOLD SPONSOR
                            </h2>
                        </div>

                        {/* Gold Sponsor Logo */}
                        <div className="flex flex-col md:flex-row items-center justify-center gap-12 sm:gap-20 md:gap-32 w-full mt-2 md:mt-6">
                            <img
                                src="/Globus/s2.png"
                                alt="Gold Sponsor"
                                className="h-28 sm:h-44 md:h-60 lg:h-[20rem] w-auto max-w-[90vw] object-contain drop-shadow-[0_0_30px_rgba(255,215,0,0.4)] hover:scale-105 hover:drop-shadow-[0_0_40px_rgba(255,215,0,0.7)] transition-all duration-500 cursor-pointer"
                            />
                        </div>
                    </div>

                    {/* Bottom: Silver Sponsor */}
                    <div className="w-full flex flex-col items-center justify-center gap-4 sm:gap-8 pointer-events-auto">
                        <div className="drop-shadow-[0_0_15px_rgba(0,0,0,0.9)] px-4">
                            <h2
                                className="text-3xl sm:text-5xl md:text-6xl font-black tracking-widest text-slate-300 drop-shadow-[0_0_20px_rgba(255,255,255,0.4)] uppercase text-center"
                                style={{ fontFamily: "'Arial Black', sans-serif" }}
                            >
                                SILVER SPONSOR
                            </h2>
                        </div>

                        {/* Silver Sponsor Logo */}
                        <div className="flex flex-col md:flex-row items-center justify-center gap-12 sm:gap-20 md:gap-32 w-full mt-2 md:mt-6">
                            <img
                                src="/Globus/s1.png"
                                alt="Silver Sponsor"
                                className="h-28 sm:h-40 md:h-56 lg:h-[18rem] w-auto max-w-[90vw] object-contain drop-shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:scale-105 hover:drop-shadow-[0_0_40px_rgba(255,255,255,0.5)] transition-all duration-500 cursor-pointer"
                            />
                        </div>
                    </div>

                </div>
            </div>

            {/* CARDS SECTION */}
            <div
                className="relative z-20 w-full min-h-screen py-24 flex items-center bg-black bg-center bg-cover bg-no-repeat"
                style={{
                    backgroundImage: "url('/Globus/globus_bg.png')",
                    backgroundAttachment: "fixed"
                }}
            >
                {/* Marbled/Swirly Background Setup */}
                <div className="absolute inset-0 noise-bg z-0 mix-blend-overlay"></div>
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-black/20 via-black/80 to-black z-0 pointer-events-none"></div>

                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 w-full z-10">

                    {/* Online Events Card */}
                    <motion.div
                        whileHover={{ y: -10 }}
                        transition={{ duration: 0.3 }}
                        onClick={() => navigate('/online-events')}
                        className="cursor-pointer rounded-2xl overflow-hidden p-8 h-[24rem] flex flex-col justify-end border border-white/5 group relative shadow-[0_20px_50px_-20px_rgba(0,170,255,0.3)] bg-black"
                    >
                        {/* Base Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#050505] via-[#111111] to-[rgba(0,170,255,0.4)] opacity-80 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>

                        {/* Glass Tile Overlay */}
                        <div className="absolute inset-0 glass-tile-pattern opacity-60 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>

                        {/* Glowing Bottom Accent */}
                        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#00AAFF] to-transparent opacity-40 group-hover:opacity-70 transition-opacity duration-500 blur-xl z-0"></div>
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#00AAFF] shadow-[0_0_20px_#00AAFF] z-10"></div>

                        <div className="relative z-10 flex flex-col gap-4">
                            <h2 className="text-3xl font-bold text-white tracking-wide">Create</h2>
                            <p className="text-[#CFCFCF] text-sm leading-relaxed">
                                Join interactively from anywhere in the world with our virtual event platform
                            </p>
                            <span className="text-white text-sm font-semibold flex items-center gap-2 group-hover:gap-4 transition-all duration-300 mt-2">
                                Learn more <span className="text-[#00AAFF]">&rarr;</span>
                            </span>
                        </div>
                    </motion.div>

                    {/* Flagship Events Card */}
                    <motion.div
                        whileHover={{ y: -10 }}
                        transition={{ duration: 0.3 }}
                        onClick={() => navigate('/main-events')}
                        className="cursor-pointer rounded-2xl overflow-hidden p-8 h-[24rem] flex flex-col justify-end border border-white/5 group relative shadow-[0_20px_50px_-20px_rgba(255,0,51,0.3)] bg-black"
                    >
                        {/* Base Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#050505] via-[#111111] to-[rgba(255,0,51,0.4)] opacity-80 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>

                        {/* Glass Tile Overlay */}
                        <div className="absolute inset-0 glass-tile-pattern opacity-60 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>

                        {/* Glowing Bottom Accent */}
                        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#FF0033] to-transparent opacity-40 group-hover:opacity-70 transition-opacity duration-500 blur-xl z-0"></div>
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#FF0033] shadow-[0_0_20px_#FF0033] z-10"></div>

                        <div className="relative z-10 flex flex-col gap-4">
                            <h2 className="text-3xl font-bold text-white tracking-wide">Compete</h2>
                            <p className="text-[#CFCFCF] text-sm leading-relaxed">
                                Experience our flagship collaborative sessions and global networking gatherings
                            </p>
                            <span className="text-white text-sm font-semibold flex items-center gap-2 group-hover:gap-4 transition-all duration-300 mt-2">
                                Learn more <span className="text-[#FF0033]">&rarr;</span>
                            </span>
                        </div>
                    </motion.div>

                    {/* Workshop Card */}
                    <motion.div
                        whileHover={{ y: -10 }}
                        transition={{ duration: 0.3 }}
                        onClick={() => navigate('/workshop')}
                        className="cursor-pointer rounded-2xl overflow-hidden p-8 h-[24rem] flex flex-col justify-end border border-white/5 group relative shadow-[0_20px_50px_-20px_rgba(255,215,0,0.3)] bg-black"
                    >
                        {/* Base Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#050505] via-[#111111] to-[rgba(255,215,0,0.4)] opacity-80 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>

                        {/* Glass Tile Overlay */}
                        <div className="absolute inset-0 glass-tile-pattern opacity-60 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>

                        {/* Glowing Bottom Accent */}
                        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#FFD700] to-transparent opacity-40 group-hover:opacity-70 transition-opacity duration-500 blur-xl z-0"></div>
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#FFD700] shadow-[0_0_20px_#FFD700] z-10"></div>

                        <div className="relative z-10 flex flex-col gap-4">
                            <h2 className="text-3xl font-bold text-white tracking-wide">Conquer</h2>
                            <p className="text-[#CFCFCF] text-sm leading-relaxed">
                                Enhance your professional skills with our exclusive hands on learning session
                            </p>
                            <span className="text-white text-sm font-semibold flex items-center gap-2 group-hover:gap-4 transition-all duration-300 mt-2">
                                Learn more <span className="text-[#FFD700]">&rarr;</span>
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
