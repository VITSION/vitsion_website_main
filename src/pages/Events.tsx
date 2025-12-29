
import StaggeredMenu from "@/components/StaggeredMenu";

import LightRaysBackground from "@/components/LightRaysBackground"; // Or reuse the LightRays one
import ClapperBoard from "@/components/ClapperBoard";
import FlowingMenu from "@/components/FlowingMenu";

import EventAnnouncement from "@/components/EventAnnouncement";

const Events = () => {
    const menuItems = [
        { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
        { label: 'Globus', ariaLabel: 'Globus', link: '/globus' },
        { label: 'Events', ariaLabel: 'View our events', link: '/events' },
        { label: 'Films', ariaLabel: 'View our films', link: '/films' },
        { label: 'Gallery', ariaLabel: 'Browse gallery', link: '/gallery' },
        { label: 'Team', ariaLabel: 'Meet the team', link: '/team' }, // Events page has team link
        { label: 'Contact', ariaLabel: 'Get in touch', link: '/contact' }
    ];

    const socialItems = [
        { label: 'Instagram', link: 'https://www.instagram.com/vitsionmoviemakers' },
        { label: 'Linkedin', link: 'https://www.linkedin.com/company/vitsionmoviemakersclub/' },
        { label: 'LetterBox', link: 'https://letterboxd.com/vitsion/' },
        { label: 'YouTube', link: 'http://www.youtube.com/@VITSIONMovieMakers' }
    ];

    return (
        <div className="relative min-h-screen w-full overflow-x-hidden bg-background">
            <div className="absolute inset-0 z-50 pointer-events-none sticky top-0 h-screen w-full">
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
                    // Using a simple placeholder logo or text if no SVG available
                    logoUrl="/vitsion white.png"
                    accentColor="#0c0c0cff"
                    isFixed={true}
                    className=""
                    onMenuOpen={() => { }}
                    onMenuClose={() => { }}
                />
            </div>
            <ClapperBoard />

            {/* Reuse background or keep it simple */}
            <div className="absolute inset-0 z-0 opacity-50">
                <LightRaysBackground />
            </div>

            <main className="relative z-10 pt-24 px-4 container mx-auto flex flex-col items-center min-h-[calc(100vh-6rem)]">
                <h1 className="text-3xl md:text-5xl font-bold tracking-tighter text-foreground mb-12 text-center">
                    OUR EVENTS
                </h1>

                <EventAnnouncement />

                <div className="mt-40 w-full relative z-20">
                    <FlowingMenu />
                </div>
            </main>
        </div>
    );
};

export default Events;
