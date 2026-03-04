import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import GlobusNavbar from '@/components/GlobusNavbar';
import GlobusFooter from '@/components/GlobusFooter';

const Globus = () => {
    const navigate = useNavigate();

    return (
        <section className="min-h-screen w-full bg-[#000000] text-[#FFFFFF] pt-32 pb-16 px-6 relative overflow-hidden flex flex-col">
            <GlobusNavbar />

            {/* Dark Grey Swirl/Gradient Background */}
            <div className="absolute inset-0 pointer-events-none opacity-40 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#1A1A1A] via-[#000000] to-[#000000]"></div>

            <div className="max-w-7xl mx-auto flex flex-col items-center relative z-10">
                {/* Hero Section */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="text-center mb-24 mt-8"
                >
                    <motion.h1
                        className="text-6xl md:text-8xl font-black mb-6 tracking-tight text-[#FFFFFF]"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                        Welcome to <span className="text-[#A6FF00]">GLOBUS</span>
                    </motion.h1>
                    <p className="text-xl md:text-2xl text-[#CFCFCF] max-w-3xl mx-auto font-light leading-relaxed">
                        Global innovation, collaboration, workshops, events, and networking platform.
                    </p>
                </motion.div>

                {/* 3 Horizontal Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
                    {/* Workshop Card */}
                    <motion.div
                        whileHover={{ scale: 1.03, boxShadow: "0 0 40px rgba(255, 63, 164, 0.4)" }}
                        transition={{ duration: 0.3 }}
                        onClick={() => navigate('/workshop')}
                        className="relative cursor-pointer rounded-2xl overflow-hidden p-8 h-[22rem] flex flex-col justify-end bg-gradient-to-b from-[#111111] to-[#1A1A1A]/50 backdrop-blur-md border border-[#FF3FA4]/20 shadow-xl group"
                    >
                        <div className="absolute top-8 left-8">
                            <div className="w-16 h-16 rounded-full bg-[#FF3FA4]/10 flex items-center justify-center text-[#FF3FA4] group-hover:scale-110 transition-transform duration-300 border border-[#FF3FA4]/20">
                                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                            </div>
                        </div>
                        <h2 className="text-3xl font-bold mb-2 text-[#FF3FA4] uppercase tracking-wide">Workshops</h2>
                        <p className="text-[#CFCFCF] line-clamp-2">
                            Enhance your professional skills with our exclusive hands-on learning sessions.
                        </p>
                    </motion.div>

                    {/* Main Events Card */}
                    <motion.div
                        whileHover={{ scale: 1.03, boxShadow: "0 0 40px rgba(166, 255, 0, 0.4)" }}
                        transition={{ duration: 0.3 }}
                        onClick={() => navigate('/main-events')}
                        className="relative cursor-pointer rounded-2xl overflow-hidden p-8 h-[22rem] flex flex-col justify-end bg-gradient-to-b from-[#111111] to-[#1A1A1A]/50 backdrop-blur-md border border-[#A6FF00]/20 shadow-xl group"
                    >
                        <div className="absolute top-8 left-8">
                            <div className="w-16 h-16 rounded-full bg-[#A6FF00]/10 flex items-center justify-center text-[#A6FF00] group-hover:scale-110 transition-transform duration-300 border border-[#A6FF00]/20">
                                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                            </div>
                        </div>
                        <h2 className="text-3xl font-bold mb-2 text-[#A6FF00] uppercase tracking-wide">Flagship Events</h2>
                        <p className="text-[#CFCFCF] line-clamp-2">
                            Experience our flagship collaborative sessions and global networking gatherings.
                        </p>
                    </motion.div>

                    {/* Online Events Card */}
                    <motion.div
                        whileHover={{ scale: 1.03, boxShadow: "0 0 40px rgba(255, 63, 164, 0.4)" }}
                        transition={{ duration: 0.3 }}
                        onClick={() => navigate('/online-events')}
                        className="relative cursor-pointer rounded-2xl overflow-hidden p-8 h-[22rem] flex flex-col justify-end bg-gradient-to-b from-[#111111] to-[#1A1A1A]/50 backdrop-blur-md border border-[#FF3FA4]/20 shadow-xl group"
                    >
                        <div className="absolute top-8 left-8">
                            <div className="w-16 h-16 rounded-full bg-[#FF3FA4]/10 flex items-center justify-center text-[#FF3FA4] group-hover:scale-110 transition-transform duration-300 border border-[#FF3FA4]/20">
                                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                            </div>
                        </div>
                        <h2 className="text-3xl font-bold mb-2 text-[#FF3FA4] uppercase tracking-wide">Online Events</h2>
                        <p className="text-[#CFCFCF] line-clamp-2">
                            Join interactively from anywhere in the world with our virtual event platform.
                        </p>
                    </motion.div>
                </div>
            </div>
            <GlobusFooter />
        </section>
    );
};

export default Globus;