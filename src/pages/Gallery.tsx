
import StaggeredMenu from "@/components/StaggeredMenu";
import CardSwap, { Card } from "@/components/CardSwap";
import LightRaysBackground from "@/components/LightRaysBackground";
import FilmRollFrame from "@/components/FilmRollFrame";


const Gallery = () => {
    const menuItems = [
        { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
        { label: 'Globus', ariaLabel: 'Globus', link: '/globus' },
        { label: 'Events', ariaLabel: 'View our events', link: '/events' },
        { label: 'Films', ariaLabel: 'View our films', link: '/films' },
        { label: 'Gallery', ariaLabel: 'Browse gallery', link: '/gallery' },
        { label: 'Team', ariaLabel: 'Meet the team', link: '/team' },
        { label: 'Contact', ariaLabel: 'Get in touch', link: '#' }
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
                    logoUrl="/Vitsio_logo.jpeg"
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

            <main className="relative z-10 pt-24 px-4 container mx-auto flex flex-col items-center min-h-[calc(100vh-6rem)]">
                <h1 className="text-3xl md:text-5xl font-bold tracking-tighter text-foreground mb-12 text-center">
                    GALLERY
                </h1>

                <div className="w-full flex justify-center items-center py-12" style={{ height: '600px', position: 'relative' }}>
                    <CardSwap
                        cardDistance={60}
                        verticalDistance={70}
                        delay={5000}
                        pauseOnHover={false}
                    >
                        <Card className="border-none bg-transparent">
                            <div className="film-frame">
                                <div className="film-frame-window">
                                    <img
                                        src="/Events/Shortfilm.jpg"
                                        alt="Shortfilm"
                                        className="absolute inset-0 h-full w-full object-cover"
                                    />
                                </div>
                            </div>
                        </Card>
                        <Card className="border-none bg-transparent">
                            <div className="film-frame">
                                <div className="film-frame-window">
                                    <img
                                        src="/Events/MeesayaMurukku.jpg"
                                        alt="MEESAYA MURUKKU SCREENING"
                                        className="film-frame-image"
                                    />
                                </div>
                            </div>
                        </Card>

                        <Card className="border-none bg-transparent">
                            <div className="film-frame">
                                <div className="film-frame-window">
                                    <img
                                        src="/Events/Retrograde.JPG"
                                        alt="RETROGRADE"
                                        className="film-frame-image"
                                    />
                                </div>
                            </div>
                        </Card>


                    </CardSwap>
                </div>
            </main>
        </div>
    );
};

export default Gallery;
