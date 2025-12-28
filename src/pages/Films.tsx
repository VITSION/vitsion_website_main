"use client";

import React, { useState } from "react";
import StaggeredMenu from "@/components/StaggeredMenu";
import { X, Play, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

type Film = {
  title: string;
  desc: string;
  poster: string;
  banner: string;
  color: string;
  year: string;
  certificate: string;
  duration: string;
  language: string;
  genre: string;
  tags: string[];
  link: string;
  director: string;
};

const row1: Film[] = [
  {
    title: "Inception",
    desc: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    poster: "https://via.placeholder.com/1080x1350",
    banner: "https://images.unsplash.com/photo-1604871000636-074fa5117945?auto=format&fit=crop&q=80&w=2000",
    color: "#F4EDE4",
    year: "2010",
    certificate: "UA",
    duration: "2h 28m",
    language: "English",
    genre: "Sci-Fi | Action | Thriller",
    tags: ["Mind-Bending", "Dream Heist", "Visual Masterpiece"],
    link: "https://www.youtube.com/watch?v=YoHD9XEInc0",
    director: "Christopher Nolan"
  },
  {
    title: "Interstellar",
    desc: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    poster: "https://via.placeholder.com/1080x1350",
    banner: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&q=80&w=2000",
    color: "#E7F0F7",
    year: "2014",
    certificate: "UA",
    duration: "2h 49m",
    language: "English",
    genre: "Sci-Fi | Drama | Adventure",
    tags: ["Space Travel", "Emotional", "Time Dilation"],
    link: "https://www.youtube.com/watch?v=zSWdZVtXT7E",
    director: "Christopher Nolan"
  },
  {
    title: "Whiplash",
    desc: "A promising young drummer enrolls at a cut-throat music conservatory where his dreams of greatness are mentored by an instructor who will stop at nothing to realize a student's potential.",
    poster: "https://via.placeholder.com/1080x1350",
    banner: "https://images.unsplash.com/photo-1519892300165-cb5542fb4747?auto=format&fit=crop&q=80&w=2000",
    color: "#F7E7E7",
    year: "2014",
    certificate: "A",
    duration: "1h 46m",
    language: "English",
    genre: "Drama | Music",
    tags: ["Intensity", "Jazz", "Psychological"],
    link: "https://www.youtube.com/watch?v=7d_jQycdQGo",
    director: "Damien Chazelle"
  },
];

const row2: Film[] = [
  {
    title: "Fight Club",
    desc: "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.",
    poster: "https://via.placeholder.com/1080x1350",
    banner: "https://images.unsplash.com/photo-1599839575945-a9e5af0c3fa5?auto=format&fit=crop&q=80&w=2000",
    color: "#EDE7F7",
    year: "1999",
    certificate: "A",
    duration: "2h 19m",
    language: "English",
    genre: "Drama",
    tags: ["Cult Classic", "Psychological", "Dark"],
    link: "https://www.youtube.com/watch?v=qtRKdVHc-cE",
    director: "David Fincher"
  },
  {
    title: "Blade Runner",
    desc: "A blade runner must pursue and terminate four replicants who stole a ship in space, and have returned to Earth to find their creator.",
    poster: "https://via.placeholder.com/1080x1350",
    banner: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?auto=format&fit=crop&q=80&w=2000",
    color: "#E7F7EF",
    year: "1982",
    certificate: "UA",
    duration: "1h 57m",
    language: "English",
    genre: "Sci-Fi | Thriller",
    tags: ["Cyberpunk", "Dystopian", "Noir"],
    link: "https://www.youtube.com/watch?v=eogpIG53Cis",
    director: "Ridley Scott"
  },
  {
    title: "Dune",
    desc: "A noble family becomes embroiled in a war for control over the galaxy's most valuable asset while its heir becomes troubled by visions of a dark future.",
    poster: "https://via.placeholder.com/1080x1350",
    banner: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?auto=format&fit=crop&q=80&w=2000",
    color: "#F7F3E7",
    year: "2021",
    certificate: "UA",
    duration: "2h 35m",
    language: "English",
    genre: "Action | Adventure | Drama",
    tags: ["Epic", "Desert", "Space Opera"],
    link: "https://www.youtube.com/watch?v=n9xhJrPXop4",
    director: "Denis Villeneuve"
  },
];
// ... existing code ...
{/* Action Buttons */ }
<div className="flex items-center gap-4 pt-2">
  <Button
    onClick={() => window.open(selectedFilm.link, '_blank')}
    className="h-12 px-8 bg-red-600 hover:bg-red-700 text-white font-bold text-lg rounded-lg transition-all shadow-lg hover:shadow-red-900/20 flex items-center gap-2 border-none"
  >
    <Play className="w-5 h-5 fill-current" />
    Watch Now
  </Button>

  <Button
    variant="outline"
    className="h-12 w-12 p-0 rounded-lg border-gray-600 bg-white/10 hover:bg-white/20 text-white transition-colors"
  >
    <Plus className="w-6 h-6" />
  </Button>
</div>

export default function Films() {
  const [selectedFilm, setSelectedFilm] = useState<Film | null>(null);

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
    { label: "LetterBox", link: "https://letterboxd.com/vitsion/" },
  ];

  const filmsRow1 = [...row1, ...row1, ...row1, ...row1];
  const filmsRow2 = [...row2, ...row2, ...row2, ...row2];

  return (
    <>
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
            logoUrl="/vitsion_new_logo.png"
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
            FILMS
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
                animation: "moveLeft 20s linear infinite",
                columnGap: "8px",
              }}
            >
              {filmsRow1.map((film, i) => (
                <div
                  key={`r1-${i}`}
                  onClick={() => setSelectedFilm(film)}
                  className="film-card"
                  style={{
                    width: "240px",
                    padding: "14px",
                    borderRadius: "8px",
                    boxShadow: "0 20px 40px rgba(0,0,0,0.45)",
                    background: film.color,
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
                      backgroundImage: `url(${film.poster})`,
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
                    {film.title}
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
                    {film.desc}
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
                animation: "moveRight 20s linear infinite",
                columnGap: "8px",
              }}
            >
              {filmsRow2.map((film, i) => (
                <div
                  key={`r2-${i}`}
                  onClick={() => setSelectedFilm(film)}
                  className="film-card"
                  style={{
                    width: "240px",
                    padding: "14px",
                    borderRadius: "8px",
                    boxShadow: "0 20px 40px rgba(0,0,0,0.45)",
                    background: film.color,
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
                      backgroundImage: `url(${film.poster})`,
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
                    {film.title}
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
                    {film.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* MODAL OVERLAY */}
      {selectedFilm && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-300">
          <div className="relative w-full max-w-5xl bg-[#141414] rounded-2xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300 border border-white/10">

            {/* Close Button */}
            <button
              onClick={() => setSelectedFilm(null)}
              className="absolute top-4 right-4 z-20 p-2 bg-black/50 hover:bg-black/80 text-white rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="flex flex-col md:flex-row h-full max-h-[90vh] overflow-y-auto md:overflow-hidden">

              {/* Backdrop Image Area */}
              <div className="relative w-full md:w-2/3 h-[50vh] md:h-auto">
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#141414] via-transparent to-transparent z-10" />
                <img
                  src={selectedFilm.banner}
                  alt={selectedFilm.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content Area */}
              <div className="w-full md:w-2/3 absolute md:relative bottom-0 left-0 md:inset-0 p-8 md:p-12 flex flex-col justify-end md:justify-center z-10">
                <div className="md:max-w-xl space-y-6">

                  {/* Title & Logo Placeholder */}
                  <div>
                    {/* You could put a logo image here if you have one, using text for now */}
                    <h2 className="text-4xl md:text-6xl font-bold text-white tracking-wide uppercase drop-shadow-lg mb-2">
                      {selectedFilm.title}
                    </h2>
                  </div>

                  {/* Metadata */}
                  <div className="flex flex-col gap-2 text-gray-300 text-sm md:text-base font-medium">
                    <span className="text-white">Director: <span className="text-gray-400">{selectedFilm.director}</span></span>
                    <div className="flex items-center gap-3">
                      <span>{selectedFilm.language}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 text-sm md:text-lg leading-relaxed md:line-clamp-4 drop-shadow-md">
                    {selectedFilm.desc}
                  </p>

                  {/* Genres */}
                  <div className="flex items-center gap-2 text-sm text-white font-medium">
                    <span>{selectedFilm.genre}</span>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-4 pt-2">
                    <Button
                      onClick={() => window.open(selectedFilm.link, '_blank')}
                      className="h-12 px-8 bg-red-600 hover:bg-red-700 text-white font-bold text-lg rounded-lg transition-all shadow-lg hover:shadow-red-900/20 flex items-center gap-2 border-none"
                    >
                      <Play className="w-5 h-5 fill-current" />
                      Watch Now
                    </Button>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      )}

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
