import InfiniteMenu from '../components/ui/InfiniteMenu';
import StaggeredMenu from "@/components/StaggeredMenu";
import LightRaysBackground from "@/components/LightRaysBackground";

const items = [
    {
        image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=800',
        link: '#',

        title: 'RajaRejshwari',
        description: 'Event Leads'
    },
    {
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800',
        link: '#',
        title: 'Akash A',
        description: 'Senior Developer'
    },
    {
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=800',
        link: '#',
        title: 'HariniSri',
        description: 'Project Manager'
    },
    {
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800',
        link: '#',
        title: 'Sam Rozario D',
        description: 'UX Researcher'
    },
    {
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800',
        link: '#',
        title: 'Tharun ',
        description: 'Marketing Lead'
    },
    {
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800',
        link: '#',
        title: 'Shreya ',
        description: 'Marketing Lead'
    },
    {
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800',
        link: '#',
        title: 'Aaditya ',
        description: 'Editing Lead'
    },
    {
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800',
        link: '#',
        title: 'Gokul ',
        description: 'Editing Lead'
    }

];

export default function Team() {

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
        { label: 'LetterBox', link: 'https://letterboxd.com/vitsion/' },

    ];

    return (
        <div className="w-full h-screen bg-black overflow-hidden relative">
            <div className="absolute inset-0 z-0 opacity-50 pointer-events-none">
                <LightRaysBackground />
            </div>
            <div className="absolute inset-0 z-50 pointer-events-none">
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
                    logoUrl="/vitsion_new_logo.png"
                    accentColor="#0c0c0cff"
                    isFixed={true}
                    className=""
                    onMenuOpen={() => { }}
                    onMenuClose={() => { }}
                />
            </div>
            <h1 className="text-3xl text-white font-bold text-center pt-8 absolute w-full z-10 pointer-events-none">OUR CORE</h1>
            <div style={{ height: '100%', position: 'relative' }}>
                <InfiniteMenu items={items} scale={1.0} />
            </div>
        </div>
    );
}
