
import React from "react";
import StaggeredMenu from "@/components/StaggeredMenu";
import { Instagram, Linkedin, Youtube, Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
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

    return (
        <div className="min-h-screen bg-[#0a0a0aff] text-white font-sans selection:bg-white/20">
            {/* MENU */}
            <div className="fixed inset-0 z-[999] pointer-events-none">
                <div className="pointer-events-auto">
                    <StaggeredMenu
                        position="right"
                        items={menuItems}
                        socialItems={socialItems}
                        displaySocials={true}
                        displayItemNumbering={false}
                        menuButtonColor="#f1efefff"
                        openMenuButtonColor="#0f0e0eff"
                        changeMenuColorOnOpen={true}
                        colors={["#0a0a0aff", "#f1ececff", "#3a3a3a"]}
                        logoUrl="/vitsion white.png"
                        accentColor="#0c0c0cff"
                        isFixed={true}
                        className=""
                        onMenuOpen={() => { }}
                        onMenuClose={() => { }}
                    />
                </div>
            </div>

            <main className="container mx-auto px-6 py-24 md:py-32 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">

                    {/* Left Column: Get in Touch */}
                    <div className="space-y-8 animate-fade-in-up">
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Get in Touch</h1>
                            <p className="text-gray-400 text-lg leading-relaxed max-w-md">
                                For filmmaking queries, collaborations, or general questions, connect with
                                us through any of our official channels.
                            </p>
                        </div>

                        <div className="space-y-6 pt-4">
                            <a
                                href="https://www.instagram.com/vitsionmoviemakers"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 text-xl text-gray-300 group transition-colors hover:text-[#E1306C]"
                            >
                                <div className="p-3 bg-white/5 rounded-lg group-hover:bg-[#E1306C]/10 transition-colors">
                                    <Instagram className="w-6 h-6" />
                                </div>
                                <span>Instagram</span>
                            </a>

                            <a
                                href="https://www.linkedin.com/company/vitsionmoviemakersclub/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 text-xl text-gray-300 group transition-colors hover:text-[#0077b5]"
                            >
                                <div className="p-3 bg-white/5 rounded-lg group-hover:bg-[#0077b5]/10 transition-colors">
                                    <Linkedin className="w-6 h-6" />
                                </div>
                                <span>LinkedIn</span>
                            </a>

                            <a
                                href="http://www.youtube.com/@VITSIONMovieMakers"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 text-xl text-gray-300 group transition-colors hover:text-[#FF0000]"
                            >
                                <div className="p-3 bg-white/5 rounded-lg group-hover:bg-[#FF0000]/10 transition-colors">
                                    <Youtube className="w-6 h-6" />
                                </div>
                                <span>YouTube</span>
                            </a>

                            <a
                                href="mailto:vitsionmoviemakers@gmail.com"
                                className="flex items-center gap-4 text-xl text-gray-300 group transition-colors hover:text-[#FBBF24]"
                            >
                                <div className="p-3 bg-white/5 rounded-lg group-hover:bg-[#FBBF24]/10 transition-colors">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <span>vitsionmoviemakers@gmail.com</span>
                            </a>
                        </div>
                    </div>

                    {/* Right Column: Contact Form */}
                    <div className="space-y-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Need Help?</h2>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                Have a specific question or need assistance with a project? Fill out the form
                                below and we'll get back to you as soon as possible.
                            </p>
                        </div>

                        <form className="space-y-6 pt-4">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium text-gray-300 ml-1">Your Name</label>
                                <Input
                                    id="name"
                                    placeholder="Enter your name"
                                    className="bg-white/5 border-white/10 text-white placeholder:text-gray-600 h-14 rounded-xl focus:border-white/30 focus:ring-0 transition-colors"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-gray-300 ml-1">Your Email</label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="Enter your email"
                                    className="bg-white/5 border-white/10 text-white placeholder:text-gray-600 h-14 rounded-xl focus:border-white/30 focus:ring-0 transition-colors"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-gray-300 ml-1">Message</label>
                                <Textarea
                                    id="message"
                                    placeholder="How can we help you?"
                                    className="bg-white/5 border-white/10 text-white placeholder:text-gray-600 min-h-[150px] rounded-xl focus:border-white/30 focus:ring-0 resize-none transition-colors"
                                />
                            </div>

                            <Button
                                className="w-full h-14 bg-white text-black hover:bg-gray-200 text-lg font-medium rounded-xl transition-colors mt-4"
                            >
                                Send Message
                                <Send className="w-5 h-5 ml-2" />
                            </Button>
                        </form>
                    </div>

                </div>
            </main>
        </div>
    );
};

export default Contact;
