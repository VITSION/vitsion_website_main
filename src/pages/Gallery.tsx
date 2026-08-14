
import { useState, useEffect } from 'react';
import Masonry from "@/components/Masonry";

interface GalleryItem {
    id: string;
    img: string;
    height: number;
    url: string;
}

const Gallery = () => {
    const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([]);

    useEffect(() => {
        fetch('https://vitsion-website-backend.onrender.com/api/gallery')
            .then(res => res.json())
            .then(data => {
                // Add IDs and URLs to the data
                const itemsWithIds = data.map((item: { img: string; height: number }, index: number) => ({
                    ...item,
                    id: String(index + 1),
                    url: "#",
                }));
                setGalleryItems(itemsWithIds);
            })
            .catch(err => console.error("Error loading gallery:", err));
    }, []);

    return (
        <div className="relative min-h-screen w-full overflow-x-hidden bg-black">

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
