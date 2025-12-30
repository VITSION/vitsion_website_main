"use client";

import React, { useState } from "react";
import StaggeredMenu from "@/components/StaggeredMenu";
import MagicBento from "@/components/MagicBento";
import { X } from "lucide-react";

type EventItem = {
    title: string;
    desc: string;
    poster: string;
    color: string;
};

const eventItems: EventItem[] = [
    {
        title: "Event 1",
        desc: "Alumni Meet",
        poster: "/Events 2k25-26/Alumni Meet.png",
        color: "#F4EDE4",
    },
    {
        title: "Event 2",
        desc: "Camera Handling Workshop",
        poster: "/Events 2k25-26/Camera Handling Workshop .jpg",
        color: "#E7F0F7",
    },
    {
        title: "Event 3",
        desc: "Cineshark",
        poster: "/Events 2k25-26/Cineshark .jpg",
        color: "#F7E7E7",
    },
    {
        title: "Event 4",
        desc: "Cineshot Memes",
        poster: "/Events 2k25-26/Cineshot Memes (1).jpg",
        color: "#F4EDE4", // Cycle colors or random
    },
    {
        title: "Event 5",
        desc: "Cineverse",
        poster: "/Events 2k25-26/Cineverse (1).jpg",
        color: "#E7F0F7",
    },
    {
        title: "Event 6",
        desc: "Colour Grading Workshop",
        poster: "/Events 2k25-26/Colour Grading Workshop  (2).jpg",
        color: "#F7E7E7",
    },
    {
        title: "Event 7",
        desc: "How to make a Shortfilm",
        poster: "/Events 2k25-26/How to make a Shortfilm as a Student.png",
        color: "#F4EDE4",
    },
    {
        title: "Event 8",
        desc: "Meesaya murukku",
        poster: "/Events 2k25-26/Meesaya murukku.png",
        color: "#E7F0F7",
    },
    {
        title: "Event 9",
        desc: "Poster reimagined",
        poster: "/Events 2k25-26/Poster reimagined.png",
        color: "#F7E7E7",
    },
    {
        title: "Event 10",
        desc: "Retrograde",
        poster: "/Events 2k25-26/Retrograde.png",
        color: "#F4EDE4",
    },
    {
        title: "Event 11",
        desc: "Video Editing Workshop",
        poster: "/Events 2k25-26/Video Editing Workshop .jpg",
        color: "#E7F0F7",
    },
    {
        title: "Event 12",
        desc: "Curtain Raiser",
        poster: "/Events 2k25-26/curtain raiser.jpeg",
        color: "#F7E7E7",
    },
];

export default function Events25_26() {
    const [showBento, setShowBento] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);

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

    // Split events into two rows, 6 each
    const firstHalf = eventItems.slice(0, 6);
    const secondHalf = eventItems.slice(6, 12);

    // Duplicate for infinite scroll smoothness
    const eventsRow1 = [...firstHalf, ...firstHalf, ...firstHalf, ...firstHalf];
    const eventsRow2 = [...secondHalf, ...secondHalf, ...secondHalf, ...secondHalf];

    const handleEventClick = (event: EventItem) => {
        setSelectedEvent(event);
        setShowBento(true);
    };

    return (
        <>
            <div className={`fixed inset-0 z-[2000] bg-black/50 transition-opacity duration-300 ${showBento ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} onClick={() => setShowBento(false)} />

            <div
                className={`fixed top-0 right-0 h-full w-full md:w-[80vw] lg:w-[70vw] bg-[#060010] z-[2001] shadow-2xl transform transition-transform duration-500 ease-in-out ${showBento ? 'translate-x-0' : 'translate-x-full'}`}
                style={{ borderLeft: "1px solid #333" }}
            >
                <button
                    onClick={() => setShowBento(false)}
                    className="absolute top-6 right-6 z-50 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
                >
                    <X size={24} />
                </button>
                <div className="h-full overflow-y-auto p-4 md:p-12 flex items-center justify-center">
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

            {/* PAGE */}
            <div
                style={{
                    background: "#000",
                    color: "#fff",
                    minHeight: "100vh",
                    overflowX: "hidden",
                    fontFamily: "system-ui, sans-serif",
                }}
            >
                {/* HERO */}
                <section
                    style={{
                        height: "auto",
                        minHeight: "0",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: "#000",
                        padding: 0,
                        margin: 0,
                    }}
                >
                    <h1
                        style={{
                            fontSize: "clamp(3rem, 7vw, 6rem)",
                            letterSpacing: "0.12em",
                            margin: 0,
                            fontWeight: 700,
                        }}
                    >
                        EVENTS
                    </h1>
                </section>

                {/* ROW 1: MOVES LEFT */}
                <section
                    style={{
                        padding: "40px 0 80px",
                        margin: "0 0 60px",
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
                                            margin: "0 0 6px 0",
                                            color: "#111",
                                            fontWeight: 700,
                                        }}
                                    >
                                        {item.title}
                                    </h3>
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
                                        {item.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ROW 2: MOVES RIGHT */}
                <section
                    style={{
                        padding: "40px 0 80px",
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
                                            margin: "0 0 6px 0",
                                            color: "#111",
                                            fontWeight: 700,
                                        }}
                                    >
                                        {item.title}
                                    </h3>
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
                                        {item.desc}
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
