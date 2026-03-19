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
        { name: 'Sponsors', path: '/globus#sponsors' },
        { name: 'Create', path: '/online-events' },
        { name: 'Compete', path: '/main-events' },
        { name: 'Conquer', path: '/workshop' },
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
                    style={{ fontFamily: "'Arial Black', sans-serif" }} // You can switch to glitch/bebas natively if available
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
                                onClick={() => {
                                    if (link.path.includes('#')) {
                                        const hashTarget = link.path.split('#')[1];
                                        if (location.pathname === '/globus') {
                                            const element = document.getElementById(hashTarget);
                                            if (element) {
                                                element.scrollIntoView({ behavior: 'smooth' });
                                            }
                                        } else {
                                            navigate(link.path);
                                            setTimeout(() => {
                                                document.getElementById(hashTarget)?.scrollIntoView({ behavior: 'smooth' });
                                            }, 100);
                                        }
                                    } else {
                                        navigate(link.path);
                                    }
                                }}
                                className={cn(
                                    "rounded-full font-black uppercase transition-all duration-300 tracking-widest",
                                    "px-4 py-2 text-[11px] md:text-[13px] whitespace-nowrap",
                                    isActive || (location.pathname === '/globus' && link.name === 'Sponsors')
                                        ? "bg-[#A6FF00] text-black shadow-[0_0_15px_rgba(166,255,0,0.5)]"
                                        : "text-gray-400 hover:text-[#A6FF00] hover:bg-white/5 hover:drop-shadow-[0_0_8px_rgba(166,255,0,0.4)]"
                                )}
                                style={{ fontFamily: "'Arial Black', sans-serif" }}
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
