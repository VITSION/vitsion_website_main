import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

// const images = [ ... ] removed

const UpcomingMovie = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [images, setImages] = useState<string[]>([]);

    useEffect(() => {
        fetch('https://vitsion-website-backend.onrender.com/api/home')
            .then(res => res.json())
            .then(data => {
                if (data.upcomingMovie && data.upcomingMovie.images) {
                    setImages(data.upcomingMovie.images);
                }
            })
            .catch(err => console.error("Failed to fetch home data:", err));
    }, []);

    useEffect(() => {
        if (images.length === 0) return;

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 10000); // Change every 10 seconds

        return () => clearInterval(interval);
    }, [images.length]);

    if (images.length === 0) return null; // Or a loading spinner

    return (
        <div className="w-full flex justify-center my-12 px-4">
            <Link to="/films" className="relative group cursor-pointer overflow-hidden rounded-3xl shadow-2xl border border-white/10 max-w-sm md:max-w-md w-full block">
                {/* Spacer Image to define height based on aspect ratio */}
                <img
                    src={images[0]}
                    alt="Spacer"
                    className="w-full h-auto opacity-0 pointer-events-none invisible"
                />

                <AnimatePresence mode="wait">
                    <motion.img
                        key={currentIndex}
                        src={images[currentIndex]}
                        alt="Upcoming Movie"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1 }}
                        className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                    />
                </AnimatePresence>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500 z-10" />

                {/* Text Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 z-20">
                    <h3 className="text-3xl md:text-5xl font-black text-white tracking-tighter uppercase opacity-0 group-hover:opacity-100 transform translate-y-10 group-hover:translate-y-0 transition-all duration-500 delay-100 drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">
                        Coming SOON !!
                    </h3>
                </div>
            </Link>
        </div>
    );
};

export default UpcomingMovie;
