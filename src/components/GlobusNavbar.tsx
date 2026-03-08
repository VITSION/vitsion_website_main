import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const GlobusNavbar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const links = [
        { name: 'HOME', path: '/globus' },
        { name: 'EVENTS', path: '/events' }, // Reusing existing events page? The design says EVENTS, SPONSORS, TEAM. Let's just use placeholder routes or root events.
        { name: 'SPONSORS', path: '/sponsors' }, // Doesn't exist yet but matching design
        { name: 'TEAM', path: '/team' },
    ];

    return (
        <div className={`fixed top-0 left-0 w-full flex justify-between items-center z-50 transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-md py-4' : 'bg-transparent py-6'} px-6 md:px-12`}>
            {/* Logo / Title Area */}
            <div
                onClick={() => navigate('/globus')}
                className="cursor-pointer flex items-center"
            >
                <img src="/Home/VIT15 White Logo.webp" alt="VIT Chennai" className="h-10 md:h-12 w-auto object-contain" />
            </div>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center space-x-8">
                {links.map((link) => {
                    const isActive = location.pathname === link.path;
                    return (
                        <button
                            key={link.name}
                            onClick={() => navigate(link.path)}
                            className={`text-xs md:text-sm tracking-[0.2em] font-medium transition-colors duration-200 ${isActive
                                ? "text-[#A6FF00]"
                                : "text-white hover:text-[#A6FF00]"
                                }`}
                        >
                            {link.name}
                        </button>
                    );
                })}
            </div>

            {/* Mobile Setup (Minimal) */}
            <div className="md:hidden flex items-center">
                <button
                    className="text-white hover:text-[#A6FF00] p-2"
                    aria-label="Menu"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default GlobusNavbar;
