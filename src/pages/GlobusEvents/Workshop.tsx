import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import GlobusFooter from '@/components/GlobusFooter';
import EventModal from './EventModal';

interface GlobusWorkshop {
    id: number;
    title: string;
    desc: string;
    date: string;
    time: string;
    venue: string;
    poster: string;
    infoImages: string[];
}

const Workshop = () => {
    const navigate = useNavigate();
    const [selectedWorkshop, setSelectedWorkshop] = useState<GlobusWorkshop | null>(null);

    const workshops: GlobusWorkshop[] = [
        {
            id: 1,
            title: "SCRIPT WRITING WORKSHOP",
            desc: "Learn the subtle art of Script Writing in this workshop with industry experts from Kollywood Cine Industry.",
            date: "25 MAR",
            time: "2:00 PM",
            venue: "Netaji Audi",
            poster: "/Globus/globus_posters/33.png",
            infoImages: ["/Globus/globus_posters/34.png", "/Globus/globus_posters/35.png"]
        },
        {
            id: 2,
            title: "ART OF DIRECTION WORKSHOP",
            desc: "Learn the subtle art of Film Direction in this workshop with industry experts from Kollywood Cine Industry.",
            date: "27 MAR",
            time: "9:00 AM",
            venue: "Netaji Audi",
            poster: "/Globus/globus_posters/36.png",
            infoImages: ["/Globus/globus_posters/37.png", "/Globus/globus_posters/38.png"]
        }
    ];

    return (
        <section className="min-h-screen w-full bg-[#000000] text-[#FFFFFF] pt-32 pb-16 px-6 relative overflow-hidden flex flex-col">
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
                <div className="flex items-start gap-5 sm:gap-6 mb-16">
                    <button
                        onClick={() => navigate(-1)}
                        className="w-10 h-10 sm:w-12 sm:h-12 mt-1 sm:mt-2 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors shrink-0"
                    >
                        <svg className="w-5 h-5 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                    </button>
                    <div className="flex flex-col">
                        <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight text-[#A6FF00] drop-shadow-[0_0_25px_rgba(166,255,0,0.4)] uppercase leading-none" style={{ fontFamily: "'Arial Black', Arial, sans-serif" }}>Conquer</h1>
                        <div className="flex items-center gap-4 mt-3 md:mt-4 ml-1">
                            <div className="h-[2px] w-10 sm:w-16 bg-gradient-to-r from-[#A6FF00] to-transparent shadow-[0_0_10px_rgba(166,255,0,0.6)]"></div>
                            <p className="text-white/80 text-[10px] sm:text-xs md:text-sm font-semibold uppercase tracking-[0.4em]" style={{ fontFamily: "Arial, sans-serif" }}>Prime time broadcast</p>
                        </div>
                    </div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {workshops.map((workshop, idx) => (
                        <motion.div
                            key={workshop.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: idx * 0.2 }}
                            whileHover={{ y: -8, boxShadow: "0 20px 40px -10px rgba(255, 63, 164, 0.3)" }}
                            className="bg-[#111111] rounded-2xl overflow-hidden border border-[#333333] hover:border-[#FF3FA4]/50 flex flex-col transition-all duration-300 h-full"
                        >
                            <div className="w-full shrink-0 flex items-center justify-center p-2">
                                <img src={workshop.poster} alt={workshop.title} className="w-full h-auto max-h-72 object-contain rounded-xl transition-transform duration-700 hover:scale-[1.02]" />
                            </div>
                            <div className="p-6 flex flex-col flex-grow">
                                {/* Date / Time / Venue badges */}
                                <div className="flex flex-wrap gap-2 mb-3">
                                    <span className="flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-[#A6FF00] bg-[#A6FF00]/10 border border-[#A6FF00]/30 rounded-full px-3 py-1">
                                        📅 {workshop.date}
                                    </span>
                                    <span className="flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-[#FF3FA4] bg-[#FF3FA4]/10 border border-[#FF3FA4]/30 rounded-full px-3 py-1">
                                        🕐 {workshop.time}
                                    </span>
                                    <span className="flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-[#FFD84A] bg-[#FFD84A]/10 border border-[#FFD84A]/30 rounded-full px-3 py-1">
                                        📍 {workshop.venue}
                                    </span>
                                </div>
                                <h3 className="text-2xl font-black mb-3 text-[#FF3FA4] line-clamp-1 uppercase">{workshop.title}</h3>
                                <p className="text-[#CFCFCF] mb-8 flex-grow line-clamp-2">{workshop.desc}</p>
                                <div className="flex flex-col gap-3 mt-auto">
                                    <button
                                        onClick={() => setSelectedWorkshop(workshop)}
                                        className="w-full py-4 rounded-xl bg-[#d3ab00] text-[#000000] font-black uppercase tracking-wider transition-colors"
                                    >
                                        More Info
                                    </button>
                                    <a
                                        href="https://eventhubcc.vit.ac.in/EventHub/login"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full py-3 rounded-xl bg-transparent border-2 border-[#FF3FA4] text-[#FF3FA4] font-black uppercase tracking-wider text-center transition-all duration-200 hover:bg-[#FF3FA4] hover:text-[#000000]"
                                    >
                                        Register Now
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <div className="mt-16 w-full">
                <GlobusFooter />
            </div>

            <EventModal
                isOpen={!!selectedWorkshop}
                onClose={() => setSelectedWorkshop(null)}
                title={selectedWorkshop?.title || ''}
                images={selectedWorkshop ? [selectedWorkshop.poster, ...selectedWorkshop.infoImages] : []}
            />
        </section>
    );
};

export default Workshop;
