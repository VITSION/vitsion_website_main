
import React from 'react';
import InfiniteMenu from '@/components/InfiniteMenu';
import StaggeredMenu from '@/components/StaggeredMenu';

const coreMembers = [
    {
        link: '#',
        title: 'Rajarajeswari N',
        description: 'Core',
        image: '/teams/Core/rajarajeswari.jpg'
    },
    {
        link: '#',
        title: 'Keerthana Anil Sankar',
        description: 'Core',
        image: '/teams/Core/keerthana.jpg'
    },
    {
        link: '#',
        title: 'Vishaal Dharsan Prakash',
        description: 'Core',
        image: '/teams/Core/vishaal.jpg'
    },
    {
        link: '#',
        title: 'Sam Rozario D',
        description: 'Core',
        image: '/teams/Core/sam.webp'
    },
    {
        link: '#',
        title: 'Ragavi G S',
        description: 'Core',
        image: '/teams/Core/ragavi.jpg'
    },
    {
        link: '#',
        title: 'Aaditya Iniavan',
        description: 'Core',
        image: '/teams/Core/aaditya.jpeg'
    },
    {
        link: '#',
        title: 'Harinisri Vijayakumar',
        description: 'Core',
        image: '/teams/Core/harinisri.jpg'
    },
    {
        link: '#',
        title: 'Keith Anthony',
        description: 'Core',
        image: '/teams/Core/keith.jpg'
    },
    {
        link: '#',
        title: 'Shreya J',
        description: 'Core',
        image: '/teams/Core/shreya.png'
    }
];

const Core = () => {
    const [menuScale, setMenuScale] = React.useState(1);

    React.useEffect(() => {
        const handleResize = () => {
            // On PC (>768px), we increase scale (distance) to make images look smaller.
            setMenuScale(window.innerWidth > 768 ? 1.5 : 1);
        };
        handleResize(); // Set initial
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
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

    return (
        <div className="w-full h-screen bg-black overflow-hidden relative">
            {/* MENU */}
            <div style={{ position: "fixed", inset: 0, zIndex: 999, pointerEvents: "none" }}>
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

            <h1 className="absolute top-8 md:top-12 left-0 w-full text-center text-4xl md:text-6xl font-bold text-white tracking-[0.2em] opacity-90 uppercase z-20 pointer-events-none">
                CORE
            </h1>
            <div className="absolute inset-0 z-10">
                <InfiniteMenu items={coreMembers} scale={menuScale} />
            </div>
        </div>
    );
};

export default Core;
