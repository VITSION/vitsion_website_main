"use client";

import React from "react";
import StaggeredMenu from "@/components/StaggeredMenu";

type Film = {
  title: string;
  desc: string;
  poster: string;
  color: string;
};

const row1: Film[] = [
  { title: "Inception", desc: "A dream inside a dream inside chaos.", poster: "https://via.placeholder.com/1080x1350", color: "#F4EDE4" },
  { title: "Interstellar", desc: "Space, time, and love vs physics.", poster: "https://via.placeholder.com/1080x1350", color: "#E7F0F7" },
  { title: "Whiplash", desc: "Greatness demands sacrifice.", poster: "https://via.placeholder.com/1080x1350", color: "#F7E7E7" },
];

const row2: Film[] = [
  { title: "Fight Club", desc: "Identity, violence, and denial.", poster: "https://via.placeholder.com/1080x1350", color: "#EDE7F7" },
  { title: "Blade Runner", desc: "What does it mean to be human?", poster: "https://via.placeholder.com/1080x1350", color: "#E7F7EF" },
  { title: "Dune", desc: "Power belongs to those who control spice.", poster: "https://via.placeholder.com/1080x1350", color: "#F7F3E7" },
];

export default function Films() {
  const menuItems = [
    { label: "Home", ariaLabel: "Go to home page", link: "/" },
    { label: "Globus", ariaLabel: "Globus", link: "/globus" },
    { label: "Events", ariaLabel: "View our events", link: "/events" },
    { label: "Films", ariaLabel: "View our films", link: "/films" },
    { label: "Gallery", ariaLabel: "Browse gallery", link: "/gallery" },
    { label: "Team", ariaLabel: "Meet the team", link: "/team" },
    { label: "Contact", ariaLabel: "Get in touch", link: "#" },
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
            logoUrl="/Vitsio_logo.jpeg"
            accentColor="#0c0c0cff"
            isFixed={true}
            className=""
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
                columnGap: "8px", // smaller spacing between polaroids
              }}
            >
              {filmsRow1.map((film, i) => (
                <div
                  key={`r1-${i}`}
                  style={{
                    width: "240px",
                    padding: "14px",
                    borderRadius: "8px",
                    boxShadow: "0 20px 40px rgba(0,0,0,0.45)",
                    background: film.color,
                    flexShrink: 0,
                    cursor: "pointer",
                    transform: `rotate(${i % 2 ? "-2deg" : "2deg"})`,
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
                    style={{
                      fontSize: "0.85rem",
                      lineHeight: 1.35,
                      color: "#333",
                      margin: 0,
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
                columnGap: "8px", // same smaller spacing
              }}
            >
              {filmsRow2.map((film, i) => (
                <div
                  key={`r2-${i}`}
                  style={{
                    width: "240px",
                    padding: "14px",
                    borderRadius: "8px",
                    boxShadow: "0 20px 40px rgba(0,0,0,0.45)",
                    background: film.color,
                    flexShrink: 0,
                    cursor: "pointer",
                    transform: `rotate(${i % 2 ? "-2deg" : "2deg"})`,
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
                    style={{
                      fontSize: "0.85rem",
                      lineHeight: 1.35,
                      color: "#333",
                      margin: 0,
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

      <style jsx global>{`
        @keyframes moveLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes moveRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </>
  );
}
