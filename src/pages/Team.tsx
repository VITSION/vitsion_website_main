import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import StaggeredMenu from "@/components/StaggeredMenu";
import Galaxy from "@/components/Galaxy";

import StarField from "@/components/StarField";

export default function Team() {

    const menuItems = [
        { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
        { label: 'Globus', ariaLabel: 'Globus', link: '/globus' },
        { label: 'Events', ariaLabel: 'View our events', link: '/events' },
        { label: 'Films', ariaLabel: 'View our films', link: '/films' },
        { label: 'Gallery', ariaLabel: 'Browse gallery', link: '/gallery' },
        { label: 'Team', ariaLabel: 'Meet the team', link: '/team' },
        { label: 'Contact', ariaLabel: 'Get in touch', link: '/contact' }
    ];

    const socialItems = [
        { label: 'Instagram', link: 'https://www.instagram.com/vitsionmoviemakers' },
        { label: 'Linkedin', link: 'https://www.linkedin.com/company/vitsionmoviemakersclub/' },
        { label: 'LetterBox', link: 'https://letterboxd.com/vitsion/' },
        { label: 'YouTube', link: 'http://www.youtube.com/@VITSIONMovieMakers' }
    ];

    const teamMembers = [
        {
            id: 5,
            name: "Srivathsan",
            role: "Secretary",
            initial: "S",
            favoriteFilm: "Meiyazhagan",
            image: "/teams/Srivathsan.jpg"
        },
        {
            id: 4,
            name: "Mohana Ramanan",
            role: "Vice Chairperson",
            initial: "M",
            favoriteFilm: "Ante Sundaraniki",
            image: "/teams/Mohana_Ramanan_D.JPG"
        },
        {
            id: 3,
            name: "Gurusreeram",
            role: "Chairperson",
            initial: "G",
            favoriteFilm: "Vinnaithaandi Varuvaayaa",
            image: "/teams/Guru_sreeram.jpg"
        },
        {
            id: 2,
            name: "Rashmi",
            role: "Vice Chairperson",
            initial: "R",
            favoriteFilm: "Hi Nanna",
            image: "/teams/rashmi.jpg"
        },
        {
            id: 1,
            name: "Thanmayya Vinod",
            role: "Joint Secretary",
            initial: "T",
            favoriteFilm: "Black Swan",
            image: "/teams/Thanmayya_Vinod.PNG"
        }
    ];

    const [hoveredMember, setHoveredMember] = useState<number | null>(null);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const scrollToCenter = () => {
            if (scrollContainerRef.current && window.innerWidth < 768) {
                const container = scrollContainerRef.current;
                const cardWidth = 288; // w-72 = 18rem = 288px
                const gap = 24; // gap-6 = 1.5rem = 24px
                const index = 2; // 3rd element (0-indexed)

                // Calculate position to center the 3rd card
                const itemCenter = (cardWidth * index) + (gap * index) + (cardWidth / 2);
                const containerCenter = container.clientWidth / 2;
                const scrollTo = itemCenter - containerCenter;

                container.scrollTo({
                    left: scrollTo,
                    behavior: 'smooth'
                });
            }
        };

        // Small delay to ensure layout is ready
        const timer = setTimeout(scrollToCenter, 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="w-full min-h-screen bg-black overflow-x-hidden relative font-sans overscroll-none">

            {/* STARFIELD BACKGROUND */}
            <div className="fixed inset-0 z-0 bg-black">
                <StarField speed={1} backgroundColor="#000000" starColor="#ffffff" />
            </div>

            {/* MENU - Fixed Wrapper */}
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
                        colors={['#0a0a0aff', '#f1ececff', '#3a3a3a']}
                        logoUrl="/vitsion white.png"
                        accentColor="#0c0c0cff"
                        isFixed={true}
                        className=""
                        onMenuOpen={() => { }}
                        onMenuClose={() => { }}
                    />
                </div>
            </div>

            {/* MAIN CONTENT */}
            <div className="relative z-10 w-full flex flex-col items-center justify-start pt-32 md:pt-40 pb-32">
                {/* Header Title */}
                <div className="w-full flex justify-center items-center mb-8 px-4">
                    <h1 className="text-4xl md:text-8xl font-bold text-white tracking-widest opacity-90 text-center">
                        TEAM
                    </h1>
                </div>

                <div className="w-full max-w-7xl px-4 flex flex-col items-center">
                    <p className="text-xl text-gray-200 font-normal text-center mb-12 tracking-wide">
                        The dedicated members leading our club's creative journey.
                    </p>

                    {/* FACULTY COORDINATOR ROW */}
                    <div className="w-full flex justify-center mb-2">
                        {[{
                            id: 0,
                            name: "Vineeth Radhakrishnan",
                            role: "Faculty Coordinator",
                            initial: "V",
                            favoriteFilm: "Manichitratazhu", // Placeholder or remove if unknown
                            image: "/teams/IMG_20250521_114651 - Vineeth Radhakrishnan.jpg"
                        }].map((member) => (
                            <div
                                key={member.id}
                                className="relative w-72 h-auto md:w-[17vw] md:h-[34vw] flex flex-col items-center justify-start cursor-pointer group shrink-0 snap-center"
                                onMouseEnter={() => setHoveredMember(member.id)}
                                onMouseLeave={() => setHoveredMember(null)}
                                onClick={() => setHoveredMember(hoveredMember === member.id ? null : member.id)}
                            >
                                <div className="w-48 h-48 md:w-[13vw] md:h-[13vw] rounded-full bg-black flex items-center justify-center mb-6 md:mb-[1.5vw] shadow-lg shadow-blue-900/10 overflow-hidden relative transition-transform duration-300 group-hover:scale-105">
                                    {member.image ? (
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="w-full h-full object-cover object-top"
                                        />
                                    ) : (
                                        <span className="text-white text-7xl md:text-[5vw] font-medium tracking-tighter">{member.initial}</span>
                                    )}
                                </div>

                                <h3 className="text-white text-3xl md:text-[1.5vw] font-bold mb-2 md:mb-[0.5vw] tracking-tight whitespace-nowrap transition-colors duration-300 group-hover:text-gray-100">{member.name}</h3>
                                <p className="text-gray-500 text-sm md:text-[0.9vw] text-center uppercase tracking-wider font-semibold mb-4 md:mb-[1vw] transition-colors duration-300 group-hover:text-gray-400">{member.role}</p>

                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{
                                        opacity: hoveredMember === member.id ? 1 : 0,
                                        height: hoveredMember === member.id ? 'auto' : 0
                                    }}
                                    transition={{ duration: 0.3, ease: "easeOut" }}
                                    className="flex flex-col items-center justify-start overflow-hidden w-full md:w-auto"
                                >
                                    {member.favoriteFilm && (
                                        <>
                                            <div className="text-xs md:text-[0.7vw] uppercase tracking-widest text-blue-300 font-bold mb-1 md:mb-[0.3vw]">FAVORITE FILM</div>
                                            <div className="text-white font-medium text-lg md:text-[1.1vw] mb-3 md:mb-[1vw] text-center italic leading-tight">{member.favoriteFilm}</div>
                                        </>
                                    )}

                                </motion.div>
                            </div>
                        ))}
                    </div>

                    <div
                        ref={scrollContainerRef}
                        className="flex flex-row md:flex-nowrap justify-start md:justify-center items-start gap-6 md:gap-[2vw] w-full px-8 md:px-[2vw] overflow-x-auto md:overflow-visible pb-12 md:pb-0 h-auto no-scrollbar snap-x snap-mandatory"
                    >
                        {teamMembers.map((member) => (
                            <div
                                key={member.id}
                                className="relative w-72 h-auto md:w-[17vw] md:h-[34vw] flex flex-col items-center justify-start cursor-pointer group shrink-0 snap-center"
                                onMouseEnter={() => setHoveredMember(member.id)}
                                onMouseLeave={() => setHoveredMember(null)}
                                onClick={() => setHoveredMember(hoveredMember === member.id ? null : member.id)}
                            >
                                <div className="w-48 h-48 md:w-[13vw] md:h-[13vw] rounded-full bg-black flex items-center justify-center mb-6 md:mb-[1.5vw] shadow-lg shadow-blue-900/10 overflow-hidden relative transition-transform duration-300 group-hover:scale-105">
                                    {member.image ? (
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="w-full h-full object-cover object-top"
                                        />
                                    ) : (
                                        <span className="text-white text-7xl md:text-[5vw] font-medium tracking-tighter">{member.initial}</span>
                                    )}
                                </div>

                                <h3 className="text-white text-3xl md:text-[1.5vw] font-bold mb-2 md:mb-[0.5vw] tracking-tight whitespace-nowrap transition-colors duration-300 group-hover:text-gray-100">{member.name}</h3>
                                <p className="text-gray-500 text-sm md:text-[0.9vw] text-center uppercase tracking-wider font-semibold mb-4 md:mb-[1vw] transition-colors duration-300 group-hover:text-gray-400">{member.role}</p>

                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{
                                        opacity: hoveredMember === member.id ? 1 : 0,
                                        height: hoveredMember === member.id ? 'auto' : 0
                                    }}
                                    transition={{ duration: 0.3, ease: "easeOut" }}
                                    className="flex flex-col items-center justify-start overflow-hidden w-full md:w-auto"
                                >
                                    <div className="text-xs md:text-[0.7vw] uppercase tracking-widest text-blue-300 font-bold mb-1 md:mb-[0.3vw]">FAVORITE FILM</div>
                                    <div className="text-white font-medium text-lg md:text-[1.1vw] mb-3 md:mb-[1vw] text-center italic leading-tight">{member.favoriteFilm}</div>

                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
