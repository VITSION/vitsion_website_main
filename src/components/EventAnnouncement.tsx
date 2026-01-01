import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const EventAnnouncement = () => {
    const [data, setData] = useState({
        title: "Globus '26",
        description: "",
        buttonText: "EXPLORE",
        buttonLink: "/globus",
        backgroundImage: "/Events/Retrograde.webp"
    });

    useEffect(() => {
        fetch('https://vitsion-website-backend.onrender.com/api/home')
            .then(res => res.json())
            .then(apiData => {
                if (apiData.eventAnnouncement) {
                    setData(prev => ({ ...prev, ...apiData.eventAnnouncement }));
                }
            })
            .catch(err => console.error("Failed to fetch home data:", err));
    }, []);

    return (
        <div className="relative w-full max-w-6xl mx-auto min-h-[500px] md:min-h-[600px] h-auto rounded-3xl overflow-hidden border border-white/10 shadow-2xl my-12 group md:mx-auto">
            {/* Background Image with low opacity */}
            <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{
                    backgroundImage: `url("${data.backgroundImage}")`,
                    opacity: 0.5
                }}
            />

            {/* Vignette Overlay to blend edges into background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,#000000_100%)] opacity-80" />

            {/* Dark Overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

            {/* Content - Set to relative so it dictates height, but min-h ensures it matches parent visual */}
            <div className="relative w-full flex flex-col justify-center p-6 md:p-16 items-start z-10 text-white min-h-[500px] md:min-h-[600px]">
                <div className="space-y-6 max-w-3xl w-full">
                    {/* Tagline/Label */}
                    <span className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-gray-300">
                        Coming Soon...!
                    </span>

                    <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter uppercase font-sans drop-shadow-lg leading-tight">
                        {data.title}
                    </h2>

                    <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light max-w-2xl drop-shadow-md">
                        {data.description}
                    </p>

                    <div className="pt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                        <Button
                            className="rounded-full w-full sm:w-auto px-8 py-6 text-base md:text-lg bg-white text-black hover:bg-gray-200 hover:scale-105 transition-all duration-300 font-bold tracking-widest shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                            onClick={() => window.location.href = data.buttonLink}
                        >
                            {data.buttonText}
                        </Button>
                        <Button
                            variant="outline"
                            className="rounded-full w-full sm:w-auto px-8 py-6 text-base md:text-lg border-white/30 text-white hover:bg-white/10 hover:border-white transition-all duration-300 tracking-widest backdrop-blur-sm"
                            onClick={() => window.location.href = ''}
                        >
                            BROCHURE
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventAnnouncement;
