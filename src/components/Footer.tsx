import React from 'react';
import { Facebook, Instagram, Twitter, Youtube, Mail, MapPin, Phone, Linkedin, ClapperboardIcon } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Footer = () => {
    const location = useLocation();
    const navigate = useNavigate();

    return (
        <footer className="w-full bg-black/80 backdrop-blur-md border-t border-white/10 pt-16 pb-8 z-40 relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Brand Section */}
                    <div className="md:col-span-2 space-y-6">
                        <Link to="/" className="flex items-center gap-3 group">
                            <img
                                src="/vitsion_new_logo.png"
                                alt="Vitsion Logo"
                                className="w-12 h-12 object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                            />
                            <span className="text-2xl font-bold tracking-[0.2em] text-white">VITSION</span>
                        </Link>
                        <p className="text-gray-400 max-w-sm leading-relaxed">
                            VITSION Movie Makers Club is the official filmmaking community of VIT Chennai, bringing students together to explore storytelling, create films through hands-on projects, host workshops, collaborate creatively, and foster a vibrant campus cinema culture. 🎥
                        </p>
                        <div className="flex gap-4 pt-2">
                            <SocialLink href="https://www.instagram.com/vitsionmoviemakers/" icon={<Instagram size={20} />} />
                            <SocialLink href="https://letterboxd.com/vitsion/" icon={<ClapperboardIcon size={20} />} />
                            <SocialLink href="https://www.youtube.com/@VITSIONMovieMakers" icon={<Youtube size={20} />} />
                            <SocialLink href="https://www.linkedin.com/company/vitsionmoviemakersclub/" icon={<Linkedin size={20} />} />
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-semibold tracking-wider mb-6">EXPLORE</h3>
                        <ul className="space-y-4">
                            <FooterLink to="/events">Events</FooterLink>
                            <FooterLink to="/films">Films</FooterLink>
                            <FooterLink to="/gallery">Gallery</FooterLink>
                            <FooterLink to="/team">Team</FooterLink>
                            <FooterLink to="/globus">Globus</FooterLink>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-white font-semibold tracking-wider mb-6">CONTACT</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-gray-400">
                                <MapPin size={20} className="mt-1 text-blue-400 shrink-0" />
                                <span className="text-gray-400">VIT University,<br />Chennai, Tamil Nadu</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400">
                                <Mail size={20} className="text-blue-400 shrink-0" />
                                <span className="text-gray-400">vitsionmoviemakers@gmail.com</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400">
                                <Phone size={20} className="text-blue-400 shrink-0" />
                                <span className="text-gray-400">+91 98841 44646 </span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-center items-center gap-4">
                    <p
                        className="text-gray-500 text-sm select-none"
                        onDoubleClick={() => {
                            if (location.pathname === '/contact') {
                                sessionStorage.setItem('admin_access_unlocked', 'true');
                                navigate('/admin');
                            }
                        }}
                    >
                        © {new Date().getFullYear()} VITSION. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

const SocialLink = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-blue-500/20 hover:text-blue-400 transition-all duration-300 hover:scale-110 border border-white/5 hover:border-blue-500/30"
    >
        {icon}
    </a>
);

const FooterLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
    <li>
        <Link
            to={to}
            className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group"
        >
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500/50 group-hover:bg-blue-400 transition-colors" />
            {children}
        </Link>
    </li>
);

export default Footer;
