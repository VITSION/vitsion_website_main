import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { cn } from "@/lib/utils";

const FloatingDockNav = () => {
    const navigate = useNavigate();
    const location = useLocation();

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
        <div className="fixed top-0 left-0 w-full h-[60px] md:h-[80px] z-50 flex items-center px-4 md:px-8 pointer-events-none">

            {/* Left: LOGO */}
            <div
                className="flex items-center gap-3 cursor-pointer pointer-events-auto mr-auto"
                onClick={() => navigate('/')}
            >
                <img
                    src="/vitsion white.webp"
                    alt="Logo"
                    className="object-contain w-8 h-8 md:w-10 md:h-10"
                />
                <span className="hidden md:block text-xl font-bold tracking-widest text-white">
                    VITSION
                </span>
            </div>

            {/* Center: NAVIGATION PILL */}
            <div
                className={cn(
                    "flex items-center overflow-x-auto no-scrollbar pointer-events-auto mx-auto shrink",
                    "bg-[#0f0f0f] border border-white/5 rounded-full px-2 py-1 md:py-1.5 shadow-[0_0_20px_rgba(0,0,0,0.5)] gap-0.5 md:gap-1"
                )}
            >
                {navLinks.map((link) => {
                    const isActive = location.pathname === link.path;
                    return (
                        <button
                            key={link.label}
                            onClick={() => navigate(link.path)}
                            className={cn(
                                "rounded-full font-bold uppercase tracking-wider whitespace-nowrap",
                                "transition-all duration-200 shrink-0",
                                "px-3 py-1.5 md:px-5 md:py-1.5",
                                "text-[10px] md:text-sm",
                                isActive
                                    ? "text-white underline underline-offset-4 decoration-white/60"
                                    : "text-gray-400 active:text-white md:hover:text-white"
                            )}
                        >
                            {link.label}
                        </button>
                    );
                })}
            </div>

            {/* Right spacer to permanently mirror left logo space and keep dynamic pill universally centered */}
            <div className="hidden md:block w-8 md:w-[140px] shrink-0 ml-auto"></div>

        </div>
    );
};

export default FloatingDockNav;
