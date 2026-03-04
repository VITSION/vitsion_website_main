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

const OnlineEvents = () => {
    const navigate = useNavigate();
    const [selectedEvent, setSelectedEvent] = useState<GlobusEvent | null>(null);

    const events: GlobusEvent[] = [
        {
            id: 1, title: "FRAME BY FRAME", desc: "Add your magic (edit) to a given movie. Let every cut, beat, and transition speak your vision.", date: "23 MAR",
            poster: "/Globus/globus_posters/1.png", infoImages: ["/Globus/globus_posters/2.png", "/Globus/globus_posters/3.png"]
        },
        {
            id: 2, title: "SHUTTER SHOWDOWN", desc: "Capture a moment that speaks without words. Frame your vision and let your lens tell the story.", date: "23 MAR",
            poster: "/Globus/globus_posters/4.png", infoImages: ["/Globus/globus_posters/5.png", "/Globus/globus_posters/6.png"]
        },
        {
            id: 3, title: "REFRAME", desc: "Reimagine a classic with bold creativity. Design a poster that demands a second look.", date: "23 MAR",
            poster: "/Globus/globus_posters/7.png", infoImages: ["/Globus/globus_posters/8.png", "/Globus/globus_posters/9.png"]
        },
        {
            id: 4, title: "THE WRITER'S ROOM", desc: "Turn imagination into a gripping screenplay. Create characters and stories that feel real and unforgettable.", date: "23 MAR",
            poster: "/Globus/globus_posters/10.png", infoImages: ["/Globus/globus_posters/11.png", "/Globus/globus_posters/12.png"]
        },
        {
            id: 5, title: "DIALOGUE SHOWCASE", desc: "Write conversations that spark emotion and tension. Make every line powerful, natural, and memorable.", date: "23 MAR",
            poster: "/Globus/globus_posters/13.png", infoImages: ["/Globus/globus_posters/14.png", "/Globus/globus_posters/15.png"]
        },
        {
            id: 6, title: "FINAL CUT", desc: "Tell a powerful story in just a few minutes. Make every frame count.", date: "26 MAR",
            poster: "/Globus/globus_posters/16.png", infoImages: ["/Globus/globus_posters/17.png", "/Globus/globus_posters/18.png", "/Globus/globus_posters/19.png", "/Globus/globus_posters/20.png"]
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        show: { opacity: 1, scale: 1, transition: { duration: 0.4 } }
    };

    return (
        <section className="min-h-screen w-full bg-[#000000] text-[#FFFFFF] pt-32 pb-16 px-6 relative overflow-hidden flex flex-col">
            <GlobusNavbar />

            {/* Dark Grey Swirl/Gradient Background */}
            <div className="absolute inset-0 pointer-events-none opacity-40 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#1A1A1A] via-[#000000] to-[#000000]"></div>

            <div className="max-w-7xl mx-auto relative z-10 w-full mb-auto mt-20">
                {/* Header */}
                <div className="flex items-center gap-6 mb-16">
                    <button
                        onClick={() => navigate(-1)}
                        className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors shrink-0"
                    >
                        <svg className="w-5 h-5 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                    </button>
                    <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-[#A6FF00] drop-shadow-lg uppercase">Online Events</h1>
                </div>

                {/* Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {events.map((event) => (
                        <motion.div
                            key={event.id}
                            variants={itemVariants}
                            whileHover={{ y: -5, boxShadow: "0 0 30px rgba(255, 63, 164, 0.3)", borderColor: "rgba(255, 63, 164, 0.5)" }}
                            className="bg-[#111111] rounded-2xl overflow-hidden border border-[#333333] flex flex-col transition-all duration-300 h-full"
                        >
                            <div className="w-full shrink-0 flex items-center justify-center p-2">
                                <img src={event.poster} alt={event.title} className="w-full h-auto max-h-72 object-contain rounded-xl transition-transform duration-700 hover:scale-[1.02]" />
                            </div>
                            <div className="p-6 flex flex-col flex-grow">
                                <div className="text-[#CFCFCF] text-sm font-bold tracking-widest mb-2 uppercase">{event.date}</div>
                                <h3 className="text-xl font-black mb-2 text-[#FF3FA4] line-clamp-1 uppercase">{event.title}</h3>
                                <p className="text-[#CFCFCF] text-sm mb-6 flex-grow line-clamp-2">{event.desc}</p>
                                <button
                                    onClick={() => setSelectedEvent(event)}
                                    className="w-full py-4 rounded-xl bg-[#0f3257] text-[#000000] font-black uppercase tracking-wider transition-colors mt-auto"
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

export default OnlineEvents;
