import LightRays from "@/components/LightRays";
import StaggeredMenu from "@/components/StaggeredMenu";

const Index = () => {
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
    { label: 'LetterBox', link: 'https://letterboxd.com/vitsion/' }
  ];

  return (
    <div className="relative h-screen w-full overflow-hidden bg-background">
      {/* Background Layer - Light Rays Animation */}
      <div className="absolute inset-0 z-0">
        <LightRays
          raysOrigin="top-center"
          raysColor="#4a9eff"
          raysSpeed={2.0}
          lightSpread={0.8}
          rayLength={1.5}
          followMouse={true}
          mouseInfluence={0.2}
          noiseAmount={0.05}
          distortion={0.05}
          className="h-full w-full"
        />
      </div>

      {/* Staggered Menu Overlay */}
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
          isFixed={false}
          className=""
          onMenuOpen={() => { }}
          onMenuClose={() => { }}
        />
      </div>

      {/* Main Content Area - Empty for now, full viewport */}
      <main className="relative z-10 h-full flex items-center justify-center pointer-events-none">
        {/* Content placeholder - can be expanded later */}
      </main>
    </div>
  );
};

export default Index;
