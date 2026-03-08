import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { cn } from "@/lib/utils";

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
        { name: 'Home', path: '/globus' },
        { name: 'Workshops', path: '/workshop' },
        { name: 'Flagship Events', path: '/main-events' },
        { name: 'Online Events', path: '/online-events' },
    ];

    return (
        <motion.div
            initial={{ top: "1rem" }}
            animate={{
                top: scrolled ? "0.75rem" : "1rem"
            }}
            transition={{ type: "spring", bounce: 0.25, duration: 0.6 }}
            className={cn(
                "fixed left-1/2 -translate-x-1/2 z-50 flex items-center bg-[#111111]/90 backdrop-blur-md border border-white/5 rounded-[2rem] px-3 py-2 shadow-2xl",
                "max-w-[96vw] overflow-x-auto no-scrollbar"
            )}
        >
            <div className="flex items-center gap-4 px-2 tracking-wide md:px-4 shrink-0">
                {/* Brand Text */}
                <div
                    onClick={() => navigate('/globus')}
                    className="cursor-pointer text-xl md:text-2xl font-black text-[#A6FF00] tracking-widest uppercase hover:opacity-80 transition-opacity"
                    style={{ fontFamily: "'Inter', sans-serif" }} // You can switch to glitch/bebas natively if available
                >
                    GLOBUS
                </div>

                {/* Vertical Divider */}
                <div className="w-[1px] h-5 bg-white/20" />

                {/* Navbar Links */}
                <div className="flex items-center gap-1 md:gap-2">
                    {links.map((link) => {
                        const isActive = location.pathname === link.path;
                        return (
                            <button
                                key={link.name}
                                onClick={() => navigate(link.path)}
                                className={cn(
                                    "rounded-full font-semibold transition-all duration-300",
                                    "px-4 py-2 text-xs md:text-sm whitespace-nowrap",
                                    isActive
                                        ? "bg-[#A6FF00] text-black shadow-[0_0_15px_rgba(166,255,0,0.5)]"
                                        : "text-gray-300 hover:text-white hover:bg-white/10"
                                )}
                            >
                                {link.name}
                            </button>
                        );
                    })}
                </div>
            </div>
        </motion.div>
    );
};

export default GlobusNavbar;
