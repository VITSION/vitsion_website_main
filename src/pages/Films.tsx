"use client";

import React, { useState, useRef, useEffect } from "react";
import StaggeredMenu from "@/components/StaggeredMenu";
import { X, Play, ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import UpcomingMovie from "@/components/UpcomingMovie";
import Galaxy from "@/components/Galaxy";


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

// Remove row1 and row2 constants

export default function Films() {
  const [selectedFilm, setSelectedFilm] = useState<Film | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [filmsData, setFilmsData] = useState<{ row1: Film[]; row2: Film[] }>({ row1: [], row2: [] });

  useEffect(() => {
    fetch('http://localhost:5000/api/films')
      .then(res => res.json())
      .then(data => setFilmsData(data))
      .catch(err => console.error("Failed to fetch films:", err));
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

  // Create separate display lists for each row - duplicated for infinite loop illusion
  const { row1, row2 } = filmsData;
  const displayRow1 = [...row1, ...row1, ...row1, ...row1, ...row1, ...row1, ...row1, ...row1, ...row1, ...row1, ...row1, ...row1, ...row1, ...row1, ...row1, ...row1];
  const displayRow2 = [...row2, ...row2, ...row2, ...row2, ...row2, ...row2, ...row2, ...row2, ...row2, ...row2, ...row2, ...row2, ...row2, ...row2, ...row2, ...row2];

  return (
    <>
      <div className="fixed inset-0 z-0">
        <Galaxy mouseRepulsion={false} mouseInteraction={false} />
      </div>

      {/* MENU - Updated button color for white bg */}
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
            menuButtonColor="#ffffff"
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

      {/* PAGE CONTAINER */}
      <div
        className="w-full min-h-screen bg-transparent flex flex-col items-start justify-start overflow-x-hidden relative gap-8 pt-24 md:gap-12 md:pt-32 pb-20"
      >
        {/* UPCOMING MOVIE TITLE */}
        <div className="w-full px-4 md:px-8">
          <h2 className="text-white text-3xl md:text-5xl font-black uppercase tracking-tighter text-center">
            Upcoming Projects
          </h2>
        </div>

        {/* UPCOMING MOVIE SECTION */}
        <div className="w-full flex justify-center shrink-0 scale-90 md:scale-100 z-10 mb-4">
          <UpcomingMovie />
        </div>


        {/* NOW SHOWING TITLE */}
        <div className="w-full px-4 md:px-8 mt-4">
          <h2 className="text-white text-3xl md:text-5xl font-black uppercase tracking-tighter text-center">
            Now Showing
          </h2>
        </div>

        {/* ROW 1: MOVES LEFT */}
        <div
          className="w-full overflow-hidden flex items-center justify-start"
        >
          <div
            className="film-track flex relative items-center px-0 min-w-max hover:paused"
            style={{
              animation: 'moveFilmRoll 60s linear infinite',
            }}
          >
            {/* PERFORATIONS TOP */}
            <div className="film-perforation film-perforation-top" />

            {/* FILMS - ROW 1 ONLY */}
            {displayRow1.map((film, i) => (
              <div
                key={`r1-film-${i}`}
                onClick={() => setSelectedFilm(film)}
                className="film-card-item group relative cursor-pointer"
                style={{
                  backgroundColor: '#fff',
                  boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                  transition: 'transform 0.3s ease, filter 0.3s ease',
                  flexShrink: 0
                }}
              >
                <div
                  className="w-full h-full bg-gray-200 overflow-hidden relative"
                >
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url('${film.poster}')` }}
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white font-bold tracking-widest text-lg uppercase">View</span>
                  </div>
                </div>
              </div>
            ))}

            {/* PERFORATIONS BOTTOM */}
            <div className="film-perforation film-perforation-bottom" />
          </div>
        </div>

        {/* ROW 2: MOVES RIGHT */}
        <div
          className="w-full overflow-hidden flex items-center justify-start"
        >
          <div
            className="film-track flex relative items-center px-0 min-w-max hover:paused"
            style={{
              animation: 'moveFilmRollRight 60s linear infinite',
            }}
          >
            {/* PERFORATIONS TOP */}
            <div className="film-perforation film-perforation-top" />

            {/* FILMS - ROW 2 ONLY */}
            {displayRow2.map((film, i) => (
              <div
                key={`r2-film-${i}`}
                onClick={() => setSelectedFilm(film)}
                className="film-card-item group relative cursor-pointer"
                style={{
                  backgroundColor: '#fff',
                  boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                  transition: 'transform 0.3s ease, filter 0.3s ease',
                  flexShrink: 0
                }}
              >
                <div
                  className="w-full h-full bg-gray-200 overflow-hidden relative"
                >
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url('${film.poster}')` }}
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white font-bold tracking-widest text-lg uppercase">View</span>
                  </div>
                </div>
              </div>
            ))}

            {/* PERFORATIONS BOTTOM */}
            <div className="film-perforation film-perforation-bottom" />
          </div>
        </div>

      </div>

      {/* MODAL OVERLAY (Kept largely the same but ensured z-index covers white bg) */}
      {selectedFilm && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-300">
          <div className="relative w-auto max-w-[95vw] bg-[#141414] rounded-2xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300 border border-white/10 flex flex-col md:flex-row max-h-[90vh]">

            {/* Image Area - Fits content */}
            <div className="relative flex-shrink-0 bg-black/20 flex items-center justify-center">
              <img
                src={selectedFilm.poster}
                alt={selectedFilm.title}
                className="block w-full md:w-auto h-auto max-h-[40vh] md:max-h-[90vh] max-w-full md:max-w-[65vw] object-contain"
              />
            </div>

            {/* Content Area - Fixed width on desktop, scrollable */}
            <div className="w-full md:w-[450px] relative p-6 md:p-10 flex flex-col justify-center items-start gap-6 bg-[#141414] overflow-y-auto">

              <h2 className="text-2xl md:text-3xl font-bold text-white tracking-wide uppercase leading-tight text-left">
                {selectedFilm.title}
              </h2>

              <div className="text-gray-400 text-lg font-medium">
                <span className="text-gray-500 uppercase text-sm tracking-wider mr-2">Director :</span>
                {selectedFilm.director}
              </div>

              {/* Action Buttons */}
              <div className="w-full flex items-center gap-4">
                <Button
                  onClick={() => window.open(selectedFilm.link, '_blank')}
                  className="flex-1 h-12 px-6 bg-red-600 hover:bg-red-700 text-white font-bold text-lg rounded-lg transition-all shadow-lg flex items-center justify-center gap-2"
                >
                  <Play className="w-5 h-5 fill-current" />
                  Watch Now
                </Button>
              </div>

              {/* Description */}
              <p className="text-gray-300 text-sm leading-relaxed text-center w-full">
                {selectedFilm.desc}
              </p>

            </div>

            {/* Close Button */}
            <button
              onClick={() => setSelectedFilm(null)}
              className="absolute top-4 right-4 z-[100] p-2 bg-black/50 hover:bg-black/80 text-white rounded-full transition-colors border border-white/10"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}

      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        .film-track {
          box-sizing: border-box;
          height: 380px;
          min-height: 380px;
          padding-top: 65px;
          padding-bottom: 65px;
          will-change: transform;
          background-color: #1c1c1c;
          border-top: 2px solid #555;
          border-bottom: 2px solid #555;
          box-shadow: 0 0 0 1px #000; /* Extra definition */
        }
        .film-card-item {
          width: 200px;
          height: 250px;
          padding: 8px;
          margin-right: 32px;
          flex-shrink: 0;
        }
        .film-perforation {
          position: absolute;
          left: 0;
          right: 0;
          height: 30px;
          background-image: linear-gradient(to right, #FFFFFF 50%, transparent 50%);
          background-size: 40px 100%;
          background-repeat: repeat-x;
          opacity: 1;
          z-index: 20;
          pointer-events: none;
        }
        .film-perforation-top { top: 18px; }
        .film-perforation-bottom { bottom: 18px; }

        @media (max-width: 768px) {
          .film-track {
            height: 210px;
            min-height: 210px;
            padding-top: 15px;
            padding-bottom: 15px;
            background-color: #1E1E1E;
          }
          .film-card-item {
            width: 130px;
            height: 180px;
            padding: 4px;
            margin-right: 12px;
          }
          .film-perforation {
            height: 8px;
            background-image: linear-gradient(90deg, #FFFFFF 6px, transparent 6px);
            background-size: 14px 100%;
          }
          .film-perforation-top { top: 4px; }
          .film-perforation-bottom { bottom: 4px; }
        }

        @keyframes moveFilmRoll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes moveFilmRollRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .hover\:paused:hover {
          animation-play-state: paused !important;
        }
        /* Invert white logo to black for this white page */
        .sm-logo-img {
          /* filter: invert(1); - Removed for black background */
        }
      `}</style>
    </>
  );
}
