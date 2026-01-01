import React from "react";
import { motion } from "framer-motion";

const AboutSection = () => {
    return (
        <div className="w-full bg-black py-24 relative">
            <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 gap-24">

                {/* Main Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center text-5xl md:text-7xl font-black text-white tracking-widest"
                >
                    ABOUT
                </motion.h1>

                {/* About VITSION Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Left: Content */}
                    <div className="flex flex-col gap-8 order-2 md:order-1">
                        <motion.h2
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-4xl md:text-6xl font-black text-[#AA8c2C] tracking-wider text-center"
                        >
                            VITSION
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-gray-300 text-lg md:text-xl leading-relaxed font-light text-justify"
                        >
                            VITSION Movie Makers Club is the official filmmaking and visual storytelling community of VIT Chennai. The club brings together passionate students interested in cinema, short films, screenwriting, direction, cinematography, editing, and production. VITSION serves as a creative platform where ideas turn into stories and stories into films through hands-on projects, workshops, collaborations, and screenings. The club aims to nurture talent, encourage original storytelling, and build a strong filmmaking culture on campus.
                        </motion.p>
                    </div>

                    {/* Right: Logo Placeholder */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="flex justify-center md:justify-end order-1 md:order-2"
                    >



                        <img
                            src="/vitsion white.png"
                            alt="Vitsion Logo"
                            className="w-80 h-80 object-contain opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                        />

                    </motion.div>
                </div>


                {/* About VIT Chennai Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Left: Logo Placeholder */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="flex justify-center md:justify-start"
                    >
                        <div className="flex items-center justify-center relative group">
                            <img
                                src="/Home/VIT15 White Logo.webp"
                                alt="VIT Chennai Logo"
                                className="w-full max-w-sm object-contain opacity-80 group-hover:opacity-100 transition-all duration-500"
                            />
                        </div>
                    </motion.div>

                    {/* Right: Content */}
                    <div className="flex flex-col gap-8">
                        <motion.h2
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-4xl md:text-6xl font-black text-[#AA8c2C] tracking-wider text-center"
                        >
                            VIT CHENNAI
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-gray-300 text-lg md:text-xl leading-relaxed font-light text-justify"
                        >
                            For over 15 years, VIT Chennai has built a strong record of academic excellence, offering students the freedom to tailor their education through the Fully Flexible Credit System (FFCS). This system allows learners to choose their courses, faculty, and schedules according to their interests and goals. The campus encourages a globally competitive learning environment through project-based education, along with ample opportunities for research and innovation. Supported by state-of-the-art infrastructure and a vibrant student community, VIT Chennai continues to promote holistic development and high academic standards.
                        </motion.p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AboutSection;
