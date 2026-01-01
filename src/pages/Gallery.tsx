
import { useState, useEffect } from 'react';
import StaggeredMenu from "@/components/StaggeredMenu";
import Galaxy from "@/components/Galaxy";
import Masonry from "@/components/Masonry";

const Gallery = () => {
    const [galleryItems, setGalleryItems] = useState<any[]>([]);

    useEffect(() => {
        fetch('https://vitsion-website-backend.onrender.com/api/gallery')
            .then(res => res.json())
            .then(data => {
                // Add IDs and URLs to the data
                const itemsWithIds = data.map((item: any, index: number) => ({
                    ...item,
                    id: String(index + 1),
                    url: "#",
                }));
                setGalleryItems(itemsWithIds);
            })
            .catch(err => console.error("Error loading gallery:", err));
    }, []);

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

    return (
        <div className="relative min-h-screen w-full overflow-x-hidden bg-black">

            <div className="fixed inset-0 z-0">
                <Galaxy mouseRepulsion={false} mouseInteraction={false} />
            </div>

            <div className="fixed top-6 right-6 z-50">

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

            <main className="relative z-10 pt-24 px-4 container mx-auto flex flex-col items-center w-full">
                <h1 className="text-4xl md:text-6xl font-black tracking-widest text-white mb-8 text-center uppercase">
                    GALLERY
                </h1>

                <div className="w-full h-full px-2 md:px-0">
                    <Masonry
                        items={galleryItems}
                        ease="power3.out"
                        duration={0.6}
                        stagger={0.05}
                        animateFrom="fade"
                        scaleOnHover={true}
                        blurToFocus={true}
                        colorShiftOnHover={false}
                    />
                </div>
            </main>
        </div>
    );
};

export default Gallery;
