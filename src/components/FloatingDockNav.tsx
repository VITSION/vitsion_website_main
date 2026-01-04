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
                "max-w-[96vw]", // ✅ prevent overflow on mobile
                scrolled
                    ? "bg-transparent justify-between md:bg-black/80 md:backdrop-blur-xl md:border md:border-white/10 md:shadow-2xl md:rounded-full md:px-2 md:py-2 md:gap-2"
                    : "bg-transparent justify-between px-3 md:px-6 py-2 md:py-3"
            )}
        >

            {/* LOGO */}
            <div
                className="flex items-center gap-2 cursor-pointer"
                onClick={() => navigate('/')}
            >
                <img
                    src="/vitsion white.png"
                    alt="Logo"
                    className={cn(
                        "object-contain",
                        scrolled ? "w-6 h-6" : "w-8 h-8 md:w-10 md:h-10"
                    )}
                />

                {/* Logo text only on desktop */}
                {!scrolled && (
                    <span className="hidden md:block text-xl font-bold tracking-widest text-white">
                        VITSION
                    </span>
                )}
            </div>

            {/* NAV LINKS */}
            <div
                className={cn(
                    "flex items-center",
                    "overflow-x-auto no-scrollbar",
                    "mx-2",
                    scrolled
                        ? "gap-1 bg-black/60 backdrop-blur-md border border-white/10 rounded-full px-1 py-1 md:bg-transparent md:border-none md:p-0"
                        : "bg-black/60 backdrop-blur-md border border-white/10 rounded-full px-1 py-1 gap-1"
                )}
            >
                {navLinks.map((link) => {
                    const isActive = location.pathname === link.path;
                    return (
                        <button
                            key={link.label}
                            onClick={() => navigate(link.path)}
                            className={cn(
                                "rounded-full font-medium uppercase tracking-wider whitespace-nowrap",
                                "transition-colors",
                                // ✅ Mobile-friendly tap size
                                "px-4 py-2 md:px-4 md:py-1.5",
                                "text-xs md:text-sm",
                                isActive || link.label === "Contact"
                                    ? "bg-white text-black font-bold"
                                    : "text-gray-300 active:bg-white/20 md:hover:bg-white/10",
                                link.label === "Contact" ? (scrolled ? "block md:hidden" : "hidden") : ""
                            )}
                        >
                            {link.label}
                        </button>
                    );
                })}
            </div>

            {/* CONTACT */}
            <button
                onClick={() => navigate('/contact')}
                className={cn(
                    scrolled ? "hidden md:block" : "block", // Hide on mobile when scrolled
                    "rounded-full bg-white text-black font-bold uppercase tracking-wider",
                    "transition-all",
                    // ✅ Bigger touch target on mobile
                    "px-4 py-2 md:px-6 md:py-2",
                    "text-xs md:text-sm"
                )}
            >
                Contact
            </button>
        </motion.div>
    );
};

export default FloatingDockNav;
