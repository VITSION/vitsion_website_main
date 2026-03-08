import React from 'react';
import { useLocation } from 'react-router-dom';
import Footer from './Footer';
import StaggeredMenu from './StaggeredMenu';

interface LayoutProps {
    children: React.ReactNode;
}

const menuItems = [
    { label: "Home", ariaLabel: "Go to home page", link: "/" },
    { label: "Globus", ariaLabel: "Globus", link: "/globus" },
    { label: "Events", ariaLabel: "View our events", link: "/events" },
    { label: "Films", ariaLabel: "View our films", link: "/films" },
    { label: "Gallery", ariaLabel: "Browse gallery", link: "/gallery" },
    { label: "Team", ariaLabel: "Meet the team", link: "/team" },
    { label: "Contact", ariaLabel: "Get in touch", link: "/contact" },
];

const socialItems = [
    { label: "Instagram", link: "https://www.instagram.com/vitsionmoviemakers" },
    { label: "Linkedin", link: "https://www.linkedin.com/company/vitsionmoviemakersclub/" },
    { label: "LetterBox", link: "https://letterboxd.com/vitsion/" },
    { label: "YouTube", link: "http://www.youtube.com/@VITSIONMovieMakers" },
];

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const location = useLocation();

    // Check for paths where footer should be hidden
    const hideFooterPaths = ['/admin', '/globus', '/workshop', '/main-events', '/online-events'];
    const shouldHideFooter = hideFooterPaths.some(path => location.pathname.startsWith(path));

    const shouldHideLogo = location.pathname === '/';

    return (
        <div className="flex flex-col min-h-screen">
            {/* Global Staggered Floating Menu */}
            <div style={{ position: "fixed", inset: 0, zIndex: 999, pointerEvents: "none" }}>
                <div style={{ pointerEvents: "auto" }}>
                    <StaggeredMenu
                        position="right"
                        items={menuItems}
                        socialItems={socialItems}
                        displaySocials={true}
                        displayItemNumbering={false}
                        menuButtonColor="#ffffff"
                        openMenuButtonColor="#0f0e0eff"
                        changeMenuColorOnOpen={true}
                        colors={["#0a0a0aff", "#f1ececff", "#3a3a3a"]}
                        logoUrl="/vitsion white.webp"
                        hideLogo={shouldHideLogo}
                        accentColor="#0c0c0cff"
                        isFixed={true}
                        className=""
                        onMenuOpen={() => { }}
                        onMenuClose={() => { }}
                    />
                </div>
            </div>

            <main className="flex-grow">
                {children}
            </main>
            {!shouldHideFooter && <Footer />}
        </div>
    );
};

export default Layout;
