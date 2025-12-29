
import StaggeredMenu from "@/components/StaggeredMenu";

import LightRaysBackground from "@/components/LightRaysBackground"; // Or reuse the LightRays one

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
            <div className="fixed inset-0 z-50 pointer-events-none">
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


            {/* Reuse background or keep it simple */}
            <div className="absolute inset-0 z-0 opacity-50">
                <LightRaysBackground />
            </div>

            {/* Header Section (Like Films) */}
            <section
                className="relative z-10"
                style={{
                    height: "auto",
                    minHeight: "0",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: 0,
                    margin: 0,
                }}
            >
                <h1
                    style={{
                        fontSize: "clamp(3rem, 7vw, 6rem)",
                        letterSpacing: "0",
                        margin: 0,
                        fontWeight: 900,
                        textAlign: "center",
                        fontFamily: "Arial Black, sans-serif",
                        textTransform: "uppercase"
                    }}
                >
                    OUR EVENTS
                </h1>
            </section>

            <main className="relative z-10 px-4 container mx-auto flex flex-col items-center min-h-[calc(100vh-6rem)]">
                <div className="mt-8 w-full">
                    <EventAnnouncement />
                </div>

                <div className="mt-20 w-full relative z-20">
                    <FlowingMenu items={[{ link: '/events/2025-26', text: '2025-26', image: '/Events/Shortfilm.jpg' }]} />
                </div>
            </main>
        </div>
    );
};

export default Events;
