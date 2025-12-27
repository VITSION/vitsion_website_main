import { Button } from "@/components/ui/button";

const EventAnnouncement = () => {
    return (
        <div className="relative w-full max-w-6xl mx-auto h-[600px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl my-12 group">
            {/* Background Image with low opacity */}
            <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{
                    backgroundImage: 'url("/Events/Retrograde.JPG")',
                    opacity:0.5
                }}
            />

            {/* Dark Overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-center p-8 md:p-16 items-start z-10">
                <div className="space-y-6 max-w-3xl">
                    {/* Tagline/Label */}
                    <span className="text-sm font-bold tracking-[0.2em] uppercase ">
                        Coming Soon...!
                    </span>

                    <h2 className="text-6xl md:text-8xl font-black text-white tracking-tighter uppercase font-sans drop-shadow-lg">
                        Globus <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">'26</span>
                    </h2>

                    <p className="text-xl text-gray-300 leading-relaxed font-light max-w-2xl drop-shadow-md">
                        The ultimate convergence of cinematic art and student creativity.
                        Prepare for an unforgettable journey through sound and vision.
                        Where stories come alive and legends are made.
                    </p>

                    <div className="pt-8 flex gap-4">
                        <Button
                            className="rounded-full px-10 py-7 text-lg bg-white text-black hover:bg-gray-200 hover:scale-105 transition-all duration-300 font-bold tracking-widest shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                            onClick={() => window.location.href = '#'}
                        >
                            EXPLORE
                        </Button>
                        <Button
                            variant="outline"
                            className="rounded-full px-10 py-7 text-lg border-white/30 text-white hover:bg-white/10 hover:border-white transition-all duration-300 tracking-widest backdrop-blur-sm"
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
