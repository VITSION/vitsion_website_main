
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
                <h1 className="text-4xl md:text-6xl font-black tracking-widest text-white mb-8 text-center uppercase">
                    GALLERY
                </h1>

                <div className="w-full h-full min-h-screen px-2 md:px-0">
                    <Masonry
                        items={items}
                        ease="power3.out"
                        duration={0.6}
                        stagger={0.05}
                        animateFrom="bottom"
                        scaleOnHover={true}
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
    { img: "/Events/Shortfilm.jpg", height: 900 },
    { img: "/Events/MeesayaMurukku.jpg", height: 1100 },
    { img: "/Events/Retrograde.JPG", height: 800 },
    { img: "/Gallery/Curtain1.jpg", height: 1000 },
    { img: "/Gallery/Screening1.JPG", height: 900 },
    { img: "/Gallery/Screening2.jpg", height: 850 },
    { img: "/Gallery/Screening3.jpg", height: 950 },
    { img: "/Gallery/Screening4.jpeg", height: 700 },
    { img: "/Gallery/workshop1.jpg", height: 900 },
    { img: "/Gallery/workshop2.jpg", height: 900 },
    { img: "/Gallery/Expo1.jpg", height: 900 },
    { img: "/Gallery/Expo2.JPG", height: 900 },
    { img: "/Gallery/Expo3.jpg", height: 900 },
    { img: "/Gallery/CIneShark1.jpg", height: 900 },
    { img: "/Gallery/Cineshark2.jpg", height: 1100 },
    { img: "/Gallery/Ework1.jpg", height: 1200 },
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
