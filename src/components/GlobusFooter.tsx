import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Footer from './Footer';

const GlobusFooter = () => {
    const navigate = useNavigate();

    const links = [
        { name: 'Home', path: '/globus' },
        { name: 'Create', path: '/online-events' },
        { name: 'Compete', path: '/main-events' },
        { name: 'Conquer', path: '/workshop' },
    ];

    return (
        <div className="w-full relative z-10 mt-auto flex flex-col">
            {/* Globus Section */}
            <div className="w-full relative">
                {/* Gradient separator */}
                <div className="h-px w-full bg-gradient-to-r from-transparent via-[#A6FF00]/30 to-transparent" />

                <div className="bg-[#000000]/95 backdrop-blur-md pt-8 pb-4 px-6">
                    <div className="max-w-4xl mx-auto flex flex-col items-center text-center">

                        {/* Brand */}
                        <div className="space-y-3 mb-6 flex flex-col items-center">
                            <button
                                onClick={() => {
                                    navigate('/globus');
                                    window.scrollTo({ top: 0, behavior: 'smooth' });
                                }}
                                className="text-4xl font-black tracking-wider"
                            >
                                <span className="text-[#A6FF00] uppercase" style={{ fontFamily: "'Arial Black', sans-serif" }}>
                                    Globus
                                </span>
                            </button>
                            <p className="text-[#CFCFCF] text-sm leading-relaxed max-w-md">
                                A global platform for innovation, collaboration, workshops, events, and networking — powered by VITSION.
                            </p>
                            {/* Decorative orbs */}
                            <div className="flex gap-2 pt-2 justify-center">
                                <div className="w-2.5 h-2.5 rounded-full bg-[#A6FF00] opacity-70" />
                                <div className="w-2.5 h-2.5 rounded-full bg-[#FF3FA4] opacity-70" />
                                <div className="w-2.5 h-2.5 rounded-full bg-[#FFD84A] opacity-70" />
                            </div>
                        </div>

                        {/* Navigation */}
                        <div className="w-full max-w-2xl">
                            <ul className="flex flex-wrap justify-center items-center gap-6 sm:gap-10">
                                {links.map((link) => (
                                    <li key={link.name}>
                                        <button
                                            onClick={() => {
                                                navigate(link.path);
                                                window.scrollTo({ top: 0, behavior: 'smooth' });
                                            }}
                                            className="text-[#CFCFCF] hover:text-[#FFFFFF] text-sm sm:text-base font-medium transition-colors duration-200"
                                        >
                                            {link.name}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* VITSION Main Footer Integration */}
            <Footer />
        </div>
    );
};

export default GlobusFooter;
