import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const GlobusFooter = () => {
    const navigate = useNavigate();

    const links = [
        { name: 'Home', path: '/globus' },
        { name: 'Workshops', path: '/workshop' },
        { name: 'Flagship Events', path: '/main-events' },
        { name: 'Online Events', path: '/online-events' },
    ];

    return (
        <footer className="w-full relative z-10 mt-auto">
            {/* Gradient separator */}
            <div className="h-px w-full bg-gradient-to-r from-transparent via-[#A6FF00]/30 to-transparent" />

            <div className="bg-[#000000]/95 backdrop-blur-md pt-16 pb-12 px-6">
                <div className="max-w-4xl mx-auto flex flex-col items-center text-center">

                    {/* Brand */}
                    <div className="space-y-4 mb-10 flex flex-col items-center">
                        <button
                            onClick={() => navigate('/globus')}
                            className="text-4xl font-black tracking-wider"
                        >
                            <span className="text-[#A6FF00] uppercase">
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
                    <div className="mb-12 w-full max-w-2xl">
                        <ul className="flex flex-wrap justify-center items-center gap-6 sm:gap-10">
                            {links.map((link) => (
                                <li key={link.name}>
                                    <button
                                        onClick={() => navigate(link.path)}
                                        className="text-[#CFCFCF] hover:text-[#FFFFFF] text-sm sm:text-base font-medium transition-colors duration-200"
                                    >
                                        {link.name}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Bottom bar */}
                    <div className="pt-8 border-t border-[#333333] flex flex-col sm:flex-row items-center justify-between gap-3">
                        <p className="text-gray-500 text-xs">
                            © {new Date().getFullYear()} Globus by VITSION. All rights reserved.
                        </p>
                        <div className="flex items-center gap-1.5 text-gray-500 text-xs">
                            <span>Part of</span>
                            <button
                                onClick={() => navigate('/')}
                                className="text-gray-400 hover:text-white transition-colors font-medium"
                            >
                                VITSION Movie Makers
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default GlobusFooter;
