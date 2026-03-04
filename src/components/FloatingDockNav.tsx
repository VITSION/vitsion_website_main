import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from "@/lib/utils";

const FloatingDockNav = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleScroll);
        handleScroll(); // Initial check

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
        };
    }, []);

    const navLinks = [
        { label: "Home", path: "/" },
        { label: "Globus", path: "/globus" },
        { label: "Events", path: "/events" },
        { label: "Films", path: "/films" },
        { label: "Gallery", path: "/gallery" },
        { label: "Team", path: "/team" },
        { label: "Contact", path: "/contact" },
    ];

    return (
        <motion.div
            initial={{ width: "98%", top: "1rem" }}
            animate={{
                width: scrolled ? "auto" : "98%",
                top: scrolled ? "0.75rem" : "1rem"
            }}
            transition={{ type: "spring", bounce: 0.25, duration: 0.6 }}
            className={cn(
                "fixed left-1/2 -translate-x-1/2 z-50 flex items-center",
                "max-w-[96vw] w-[96vw] md:w-auto",
                scrolled
                    ? "bg-black/80 backdrop-blur-xl border border-white/10 shadow-2xl rounded-full px-2 py-2 gap-2 justify-between"
                    : "bg-transparent justify-between px-2 md:px-6 py-2 md:py-3"
            )}
        >
            {/* LOGO */}
            <div
                className="flex items-center gap-2 cursor-pointer shrink-0"
                onClick={() => navigate('/')}
            >
                <img
                    src="/vitsion white.webp"
                    alt="Logo"
                    className={cn(
                        "object-contain",
                        scrolled ? "w-6 h-6" : "w-7 h-7 md:w-10 md:h-10"
                    )}
                />
                {/* Logo text only on desktop when not scrolled */}
                {!scrolled && (
                    <span className="hidden md:block text-xl font-bold tracking-widest text-white">
                        VITSION
                    </span>
                )}
            </div>

            {/* NAV LINKS — scrollable pill bar */}
            <div
                className={cn(
                    "flex items-center overflow-x-auto no-scrollbar shrink min-w-0",
                    "mx-1 md:mx-2",
                    "gap-0.5 md:gap-1",
                    scrolled
                        ? "bg-transparent border-none p-0"
                        : "bg-black/60 backdrop-blur-md border border-white/10 rounded-full px-1 py-1"
                )}
            >
                {navLinks.map((link) => {
                    const isActive = location.pathname === link.path;
                    // Always hide Contact from this bar — it's shown as the standalone button
                    if (link.label === "Contact") return null;
                    return (
                        <button
                            key={link.label}
                            onClick={() => navigate(link.path)}
                            className={cn(
                                "rounded-full font-medium uppercase tracking-wider whitespace-nowrap",
                                "transition-all duration-200 shrink-0",
                                "px-2.5 py-1.5 md:px-4 md:py-1.5",
                                "text-[10px] md:text-sm",
                                isActive
                                    ? "text-white font-bold underline underline-offset-4 decoration-white/60"
                                    : "text-gray-400 active:text-white md:hover:text-white"
                            )}
                        >
                            {link.label}
                        </button>
                    );
                })}
            </div>

            {/* CONTACT standalone button — outlined style, no white box */}
            <button
                onClick={() => navigate('/contact')}
                className={cn(
                    "shrink-0 rounded-full border border-white/50 text-white font-bold uppercase tracking-wider",
                    "transition-all hover:bg-white hover:text-black active:bg-white active:text-black",
                    "px-3 py-1.5 md:px-5 md:py-2",
                    "text-[10px] md:text-sm"
                )}
            >
                Contact
            </button>
        </motion.div>
    );
};

export default FloatingDockNav;
