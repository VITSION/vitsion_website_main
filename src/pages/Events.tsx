
import FlowingMenu from "@/components/FlowingMenu";
import EventAnnouncement from "@/components/EventAnnouncement";

const Events = () => {
    return (
        <div className="relative min-h-screen w-full overflow-x-hidden bg-black">

            {/* Page Content */}
            <div className="relative z-10 w-full min-h-screen flex flex-col items-center justify-start gap-8 pt-24 md:gap-12 md:pt-32 pb-20 px-4 container mx-auto">
                {/* OUR EVENTS TITLE */}
                <div className="w-full px-4 md:px-8">
                    <h2 className="text-white text-3xl md:text-5xl font-black uppercase tracking-tighter text-center">
                        Our Events
                    </h2>
                </div>

                <div className="w-full">
                    <EventAnnouncement />
                </div>

                <div className="mt-12 w-full relative z-20">
                    <FlowingMenu items={[{ link: '/events/2025-26', text: '2025-26', image: '/Events/Shortfilm.webp' }]} />
                </div>
            </div>
        </div>
    );
};

export default Events;
