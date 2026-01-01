
import StaggeredMenu from "@/components/StaggeredMenu";
import Galaxy from "@/components/Galaxy";
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
        <div className="relative min-h-screen w-full overflow-x-hidden bg-black">

            {/* GALAXY BACKGROUND */}
            <div className="fixed inset-0 z-0">
                <Galaxy mouseRepulsion={false} mouseInteraction={false} />
            </div>

            <div className="fixed inset-0 z-50 pointer-events-none">
                <div className="pointer-events-auto">
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
            </div>

            {/* Page Content */}
            <div className="relative z-10 w-full min-h-screen flex flex-col items-center justify-start gap-8 pt-24 md:gap-12 md:pt-32 pb-20 px-4 container mx-auto">
                {/* OUR EVENTS TITLE */}
                <div className="w-full px-4 md:px-8">
                    <h2 className="text-white text-3xl md:text-5xl font-black uppercase tracking-tighter text-center">
                        Our Events
                    </h2>
                </div>

                <div className="w-full">
                    <EventAnnouncement />
                </div>

                <div className="mt-12 w-full relative z-20">
                    <FlowingMenu items={[{ link: '/events/2025-26', text: '2025-26', image: '/Events/Shortfilm.jpg' }]} />
                </div>
            </div>
        </div>
    );
};

export default Events;
