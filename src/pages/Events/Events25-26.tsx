"use client";

import React, { useState, useEffect } from "react";
import StaggeredMenu from "@/components/StaggeredMenu";
import MagicBento from "@/components/MagicBento";
import Galaxy from "@/components/Galaxy";
import { X } from "lucide-react";

type EventItem = {
    id: string;
    title: string;
    description: string;
    longDescription?: string;
    poster: string;
    color: string;
    galleryImages?: string[];
    date?: string;
    participants?: string;
    row?: string;
};

export default function Events25_26() {
    const [showBento, setShowBento] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);
    const [eventItems, setEventItems] = useState<EventItem[]>([]);

    useEffect(() => {
        fetch('https://vitsion-website-backend.onrender.com/api/events')
            .then(res => res.json())
            .then(data => setEventItems(data))
            .catch(err => console.error("Failed to fetch events:", err));
    }, []);

    const menuItems = [
        { label: "Home", ariaLabel: "Go to home page", link: "/" },
        { label: "Globus", ariaLabel: "Globus", link: "/globus" },
        { label: "Events", ariaLabel: "View our events", link: "/events" },
        { label: "Films", ariaLabel: "View our films", link: "/films" },
        { label: "Gallery", ariaLabel: "Browse gallery", link: "/gallery" },
        { label: "Team", ariaLabel: "Meet the team", link: "/team" },
        { label: "Contact", ariaLabel: "Get in touch", link: "/contact" },
    ];

    const socialItems = [
        { label: "Instagram", link: "https://www.instagram.com/vitsionmoviemakers" },
        { label: "Linkedin", link: "https://www.linkedin.com/company/vitsionmoviemakersclub/" },
        { label: "LetterBox", link: "https://letterboxd.com/vitsion/" },
        { label: "YouTube", link: "http://www.youtube.com/@VITSIONMovieMakers" },
    ];

    // Filter events based on 'row' property
    const firstHalf = eventItems.filter(item => !item.row || item.row === '1');
    const secondHalf = eventItems.filter(item => item.row === '2');

    // Duplicate for infinite scroll smoothness
    const eventsRow1 = [...firstHalf, ...firstHalf, ...firstHalf, ...firstHalf];
    const eventsRow2 = [...secondHalf, ...secondHalf, ...secondHalf, ...secondHalf];

    const handleEventClick = (event: EventItem) => {
        setSelectedEvent(event);
        setShowBento(true);
    };

    return (
        <>
            {/* GALAXY BACKGROUND */}
            <div className="fixed inset-0 z-0">
                <Galaxy mouseRepulsion={false} mouseInteraction={false} />
            </div>

            <div className={`fixed inset-0 z-[2000] bg-black/50 transition-opacity duration-300 ${showBento ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} onClick={() => setShowBento(false)} />

            <div
                className={`fixed top-0 right-0 h-full w-full md:w-[80vw] lg:w-[70vw] z-[2001] transform transition-transform duration-500 ease-in-out ${showBento ? 'translate-x-0' : 'translate-x-full'}`}
            >
                <button
                    onClick={() => setShowBento(false)}
                    className="absolute top-6 right-6 z-50 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
                >
                    <X size={24} />
                </button>
                <div className="h-full overflow-y-auto p-4 md:p-12 flex items-start justify-center">
                    <MagicBento
                        textAutoHide={true}
                        enableStars={true}
                        enableSpotlight={true}
                        enableBorderGlow={true}
                        enableTilt={true}
                        enableMagnetism={true}
                        clickEffect={true}
                        spotlightRadius={300}
                        particleCount={12}
                        glowColor="132, 0, 255"
                        // @ts-ignore
                        teamworkImage={selectedEvent?.poster}
                        galleryImages={selectedEvent?.galleryImages}
                        title={selectedEvent?.title}
                        description={selectedEvent?.longDescription || selectedEvent?.description}
                        // @ts-ignore
                        date={selectedEvent?.date}
                        // @ts-ignore
                        participants={selectedEvent?.participants}
                    />
                </div>
            </div>

            {/* MENU */}
            <div
                style={{
                    position: "fixed",
                    inset: 0,
                    zIndex: 999,
                    pointerEvents: "none",
                }}
            >
                <div style={{ pointerEvents: "auto" }}>
                    <StaggeredMenu
                        position="right"
                        items={menuItems}
                        socialItems={socialItems}
                        displaySocials={true}
                        displayItemNumbering={false}
                        menuButtonColor="#f1efefff"
                        openMenuButtonColor="#0f0e0eff"
                        changeMenuColorOnOpen={true}
                        colors={["#0a0a0aff", "#f1ececff", "#3a3a3a"]}
                        logoUrl="/vitsion white.png"
                        accentColor="#0c0c0cff"
                        isFixed={true}
                        className=""
                        onMenuOpen={() => { }}
                        onMenuClose={() => { }}
                    />
                </div>
            </div>

            {/* PAGE CONTENT */}
            <div className="relative w-full min-h-screen bg-transparent overflow-x-hidden pt-32 md:pt-40 pb-20 font-sans z-10">

                {/* HERO TITLE */}
                <div className="w-full flex justify-center items-center mb-16 md:mb-24 px-4">
                    <h1 className="text-white text-5xl md:text-8xl font-bold tracking-widest text-center">
                        EVENTS
                    </h1>
                </div>

                {/* ROW 1: MOVES LEFT */}
                <section
                    style={{
                        padding: "0 0 60px",
                        margin: "0 0 40px",
                        overflow: "visible",
                    }}
                >
                    <div style={{ overflow: "visible" }}>
                        <div
                            style={{
                                display: "flex",
                                width: "max-content",
                                animation: "moveLeft 40s linear infinite",
                                animationPlayState: showBento ? "paused" : "running",
                                columnGap: "8px",
                            }}
                        >
                            {eventsRow1.map((item, i) => (
                                <div
                                    key={`r1-${i}`}
                                    onClick={() => handleEventClick(item)}
                                    className="film-card"
                                    style={{
                                        width: "240px",
                                        padding: "14px",
                                        borderRadius: "8px",
                                        boxShadow: "0 20px 40px rgba(0,0,0,0.45)",
                                        background: item.color,
                                        flexShrink: 0,
                                        cursor: "pointer",
                                        textDecoration: "none",
                                        // @ts-ignore
                                        "--rotate": i % 2 ? "-2deg" : "2deg",
                                        transform: "rotate(var(--rotate))",
                                    }}
                                >
                                    <div
                                        style={{
                                            width: "100%",
                                            height: 0,
                                            paddingBottom: "125%",
                                            borderRadius: "6px",
                                            marginBottom: "10px",
                                            backgroundImage: `url('${item.poster}')`,
                                            backgroundSize: "cover",
                                            backgroundPosition: "center",
                                            backgroundColor: "#ddd",
                                        }}
                                    />
                                    <h3
                                        style={{
                                            fontSize: "1rem",
                                            margin: "0 0 4px 0",
                                            color: "#111",
                                            fontWeight: 700,
                                        }}
                                    >
                                        {item.title}
                                    </h3>
                                    {item.date && (
                                        <p style={{
                                            fontSize: "0.75rem",
                                            color: "#666",
                                            margin: "0 0 6px 0",
                                            fontWeight: 500
                                        }}>
                                            {(() => {
                                                const [y, m, d] = item.date.split('-').map(Number);
                                                return new Date(y, m - 1, d).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' });
                                            })()}
                                        </p>
                                    )}
                                    <p
                                        className="line-clamp-2"
                                        style={{
                                            fontSize: "0.85rem",
                                            lineHeight: 1.35,
                                            color: "#333",
                                            margin: 0,
                                            display: "-webkit-box",
                                            WebkitLineClamp: 2,
                                            WebkitBoxOrient: "vertical",
                                            overflow: "hidden"
                                        }}
                                    >
                                        {item.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ROW 2: MOVES RIGHT */}
                <section
                    style={{
                        padding: "0 0 60px",
                        margin: 0,
                        overflow: "visible",
                    }}
                >
                    <div style={{ overflow: "visible" }}>
                        <div
                            style={{
                                display: "flex",
                                width: "max-content",
                                animation: "moveRight 40s linear infinite",
                                animationPlayState: showBento ? "paused" : "running",
                                columnGap: "8px",
                            }}
                        >
                            {eventsRow2.map((item, i) => (
                                <div
                                    key={`r2-${i}`}
                                    onClick={() => handleEventClick(item)}
                                    className="film-card"
                                    style={{
                                        width: "240px",
                                        padding: "14px",
                                        borderRadius: "8px",
                                        boxShadow: "0 20px 40px rgba(0,0,0,0.45)",
                                        background: item.color,
                                        flexShrink: 0,
                                        cursor: "pointer",
                                        textDecoration: "none",
                                        // @ts-ignore
                                        "--rotate": i % 2 ? "-2deg" : "2deg",
                                        transform: "rotate(var(--rotate))",
                                    }}
                                >
                                    <div
                                        style={{
                                            width: "100%",
                                            height: 0,
                                            paddingBottom: "125%",
                                            borderRadius: "6px",
                                            marginBottom: "10px",
                                            backgroundImage: `url('${item.poster}')`,
                                            backgroundSize: "cover",
                                            backgroundPosition: "center",
                                            backgroundColor: "#ddd",
                                        }}
                                    />
                                    <h3
                                        style={{
                                            fontSize: "1rem",
                                            margin: "0 0 4px 0",
                                            color: "#111",
                                            fontWeight: 700,
                                        }}
                                    >
                                        {item.title}
                                    </h3>
                                    {item.date && (
                                        <p style={{
                                            fontSize: "0.75rem",
                                            color: "#666",
                                            margin: "0 0 6px 0",
                                            fontWeight: 500
                                        }}>
                                            {(() => {
                                                const [y, m, d] = item.date.split('-').map(Number);
                                                return new Date(y, m - 1, d).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' });
                                            })()}
                                        </p>
                                    )}
                                    <p
                                        className="line-clamp-2"
                                        style={{
                                            fontSize: "0.85rem",
                                            lineHeight: 1.35,
                                            color: "#333",
                                            margin: 0,
                                            display: "-webkit-box",
                                            WebkitLineClamp: 2,
                                            WebkitBoxOrient: "vertical",
                                            overflow: "hidden"
                                        }}
                                    >
                                        {item.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>

            <style>{`
        @keyframes moveLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes moveRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        
        /* Film card hover effect */
        .film-card {
          transition: transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94), box-shadow 0.3s ease;
        }
        .film-card:hover {
          transform: rotate(var(--rotate)) scale(1.1) !important;
          z-index: 10;
          box-shadow: 0 30px 60px rgba(0,0,0,0.6) !important;
        }
      `}</style>
        </>
    );
}
