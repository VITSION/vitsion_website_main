const Header = () => {
  const navLinks = [
    { label: "Globus", href: "#" },
    { label: "Events", href: "/events" },
    { label: "Films", href: "#" },
    { label: "Team", href: "#" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact", href: "#" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-8 py-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo Block */}
        <div className="flex items-center gap-4">
          {/* Square Icon Placeholder */}
          <div className="w-12 h-12 border-2 border-foreground/80 flex items-center justify-center">
            <div className="w-6 h-6 bg-foreground/20" />
          </div>

          {/* Logo Text */}
          <div className="flex flex-col">
            <span className="text-2xl font-bold tracking-[0.3em] text-foreground">
              VITSION
            </span>
            <span className="text-[10px] tracking-[0.4em] text-muted-foreground uppercase">
              Movie Makers
            </span>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm tracking-widest text-foreground/80 hover:text-foreground transition-all duration-300 relative group"
            >
              {link.label}
              {/* Underline animation */}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-foreground group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden flex flex-col gap-1.5 p-2">
          <span className="w-6 h-px bg-foreground" />
          <span className="w-6 h-px bg-foreground" />
          <span className="w-4 h-px bg-foreground" />
        </button>
      </div>
    </header>
  );
};

export default Header;
