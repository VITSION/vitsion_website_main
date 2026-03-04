import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import GlobusNavbar from '@/components/GlobusNavbar';
import GlobusFooter from '@/components/GlobusFooter';
import EventModal from './EventModal';

interface GlobusEvent {
    id: number;
    title: string;
    desc: string;
    date: string;
    poster: string;
    infoImages: string[];
}

const FlagshipEvents = () => {
    const navigate = useNavigate();
    const [selectedEvent, setSelectedEvent] = useState<GlobusEvent | null>(null);

    const events: GlobusEvent[] = [
        {
            id: 1, title: "CODEFLIX", desc: "Innovate for 24 hours without limits. Build the future of filmmaking from scratch.", date: "23 & 24 MAR",
            poster: "/Globus/globus_posters/21.png", infoImages: ["/Globus/globus_posters/22.png", "/Globus/globus_posters/23.png"]
        },
        {
            id: 2, title: "WHAT IF ?", desc: "Flip the script and rewrite the rules. Dare to imagine the unexpected and own the stage.", date: "25 MAR",
            poster: "/Globus/globus_posters/24.png", infoImages: ["/Globus/globus_posters/25.png", "/Globus/globus_posters/26.png"]
        },
        {
            id: 3, title: "MOVIE MINDS", desc: "Test your cinematic knowledge under pressure. Only the fastest and sharpest minds will win.", date: "25 MAR",
            poster: "/Globus/globus_posters/27.png", infoImages: ["/Globus/globus_posters/28.png", "/Globus/globus_posters/29.png"]
        },
        {
            id: 4, title: "RETAKE", desc: "Relive iconic moments with precision and passion. Bring the screen to life with your performance.", date: "25 MAR",
            poster: "/Globus/globus_posters/30.png", infoImages: ["/Globus/globus_posters/31.png", "/Globus/globus_posters/32.png"]
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <section className="min-h-screen w-full bg-[#000000] text-[#FFFFFF] pt-32 pb-16 px-6 relative overflow-hidden flex flex-col">
            <GlobusNavbar />
            {/* Dark Grey Cinematic Marble Background */}
            <div
                className="absolute inset-0 pointer-events-none opacity-40"
                style={{
                    backgroundImage: "url('/Globus/globus_bg.png')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            ></div>
            <div className="absolute inset-0 pointer-events-none opacity-60 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-transparent via-[#000000]/80 to-[#000000]"></div>

            <div className="max-w-7xl mx-auto relative z-10 w-full mb-auto">
                {/* Header */}
                <div className="flex items-center gap-6 mb-16">
                    <button
                        onClick={() => navigate(-1)}
                        className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors shrink-0"
                    >
                        <svg className="w-5 h-5 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                    </button>
                    <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-[#A6FF00] drop-shadow-lg uppercase">Flagship Events</h1>
                </div>

                {/* Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                >
                    {events.map((event) => (
                        <motion.div
                            key={event.id}
                            variants={itemVariants}
                            whileHover={{ y: -5, boxShadow: "0 20px 40px -10px rgba(255, 63, 164, 0.3)" }}
                            className="bg-[#111111] rounded-2xl overflow-hidden border border-[#333333] hover:border-[#FF3FA4]/50 flex flex-col transition-shadow h-full"
                        >
                            <div className="w-full shrink-0 flex items-center justify-center p-2">
                                <img src={event.poster} alt={event.title} className="w-full h-auto max-h-72 object-contain rounded-xl transition-transform duration-700 hover:scale-[1.02]" />
                            </div>
                            <div className="p-6 flex flex-col flex-grow">
                                <div className="text-[#CFCFCF] font-bold tracking-widest mb-2 uppercase">{event.date}</div>
                                <h3 className="text-2xl font-black mb-3 text-[#FF3FA4] line-clamp-1 uppercase">{event.title}</h3>
                                <p className="text-[#CFCFCF] mb-6 flex-grow line-clamp-3">{event.desc}</p>
                                <button
                                    onClick={() => setSelectedEvent(event)}
                                    className="w-full py-4 rounded-xl bg-[#6f1f13] text-[#000000] font-black uppercase tracking-wider transition-colors mt-auto"
                                >
                                    More Info
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            <div className="mt-16 w-full">
                <GlobusFooter />
            </div>

            <EventModal
                isOpen={!!selectedEvent}
                onClose={() => setSelectedEvent(null)}
                title={selectedEvent?.title || ''}
                images={selectedEvent ? [selectedEvent.poster, ...selectedEvent.infoImages] : []}
            />
        </section>
    );
};

export default FlagshipEvents;
