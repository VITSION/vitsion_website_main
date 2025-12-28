
import StaggeredMenu from "@/components/StaggeredMenu";
import LightRaysBackground from "@/components/LightRaysBackground";
import Masonry from "@/components/Masonry"; // Newly added component


const Gallery = () => {
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
        { label: 'LetterBox', link: 'https://letterboxd.com/vitsion/' }
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
                    logoUrl="/vitsion_new_logo.png"
                    accentColor="#0c0c0cff"
                    isFixed={true}
                    className=""
                    onMenuOpen={() => { }}
                    onMenuClose={() => { }}
                />
            </div>


            <div className="absolute inset-0 z-0 opacity-50">
                <LightRaysBackground />
            </div>

            <main className="relative z-10 pt-24 px-4 container mx-auto flex flex-col items-center w-full">
                <h1 className="text-3xl md:text-5xl font-bold tracking-tighter text-foreground mb-4 text-center">
                    GALLERY
                </h1>

                <div className="w-full h-full min-h-screen">
                    <Masonry
                        items={items}
                        ease="power3.out"
                        duration={0.6}
                        stagger={0.05}
                        animateFrom="bottom"
                        scaleOnHover={true}
                        hoverScale={0.95}
                        blurToFocus={true}
                        colorShiftOnHover={false}
                    />
                </div>
            </main>
        </div>
    );
};

// Mock data adapted for the new Masonry component
const baseData = [
    { img: "/Events/Shortfilm.jpg", height: 600 },
    { img: "/Events/MeesayaMurukku.jpg", height: 800 },
    { img: "/Events/Retrograde.JPG", height: 500 },
    { img: "https://images.unsplash.com/photo-1542204165-65bf26472b9b?auto=format&fit=crop&q=80&w=800", height: 700 },
    { img: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&q=80&w=800", height: 600 },
    { img: "https://images.unsplash.com/photo-1517604931442-71053e6e2360?auto=format&fit=crop&q=80&w=800", height: 550 },
    { img: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&q=80&w=800", height: 650 },
    { img: "https://images.unsplash.com/photo-1519709041289-e2b2c80327f3?q=80&w=1968", height: 400 },
    { img: "https://images.unsplash.com/photo-1478720568477-152d9b164e63?auto=format&fit=crop&q=80&w=800", height: 600 },
];

const items = [
    ...baseData,
    ...baseData,
    ...baseData,
    ...baseData
].map((item, index) => ({
    ...item,
    id: String(index + 1),
    url: "#", // Placeholder link
}));

export default Gallery;
