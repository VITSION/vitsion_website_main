import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const GlobusNavbar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const links = [
        { name: 'Home', path: '/globus' },
        { name: 'Workshops', path: '/workshop' },
        { name: 'Flagship Events', path: '/main-events' },
        { name: 'Online Events', path: '/online-events' },
    ];

    return (
        <>
            <div className="fixed top-4 md:top-6 left-0 w-screen flex justify-center z-50 pointer-events-none">
                <motion.div
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ type: "spring", bounce: 0.25, duration: 0.6 }}
                    className="flex flex-nowrap items-center max-w-[96vw] w-max bg-[#111111]/90 backdrop-blur-xl border border-white/10 shadow-lg rounded-full p-2 gap-2 pointer-events-auto"
                >
                    {/* Logo */}
                    <div
                        onClick={() => navigate('/globus')}
                        className="text-lg md:text-xl font-black text-[#A6FF00] cursor-pointer tracking-wider flex items-center px-4 shrink-0 border-r border-[#333333]"
                    >
                        <span className="uppercase">Globus</span>
                    </div>

                    {/* Desktop and Mobile Links */}
                    <div className="flex items-center overflow-x-auto no-scrollbar shrink min-w-0 px-1 gap-1">
                        {links.map((link) => {
                            const isActive = location.pathname === link.path;
                            return (
                                <button
                                    key={link.name}
                                    onClick={() => navigate(link.path)}
                                    className={`rounded-full font-medium tracking-wider whitespace-nowrap transition-all duration-200 shrink-0 px-3 py-1.5 md:px-4 text-[10px] md:text-sm ${isActive
                                        ? "text-[#000000] bg-[#A6FF00] font-bold"
                                        : "text-[#CFCFCF] hover:text-[#FFFFFF] hover:bg-[#333333]/50"
                                        }`}
                                >
                                    {link.name}
                                </button>
                            );
                        })}
                    </div>
                </motion.div>
            </div>
        </>
    );
};

export default GlobusNavbar;
