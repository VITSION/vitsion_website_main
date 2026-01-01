
import FloatingDockNav from "@/components/FloatingDockNav";
import UpcomingMovie from "@/components/UpcomingMovie";
import EventAnnouncement from "@/components/EventAnnouncement";
import AboutSection from "@/components/AboutSection";
import {
  motion,
  useScroll,
  useTransform
} from "framer-motion";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import Galaxy from "@/components/Galaxy";

const Index = () => {
  const titleRef = useRef(null);
  const upcomingTextRef = useRef(null);
  // ... rest of refs

  const { scrollYProgress } = useScroll({
    target: titleRef,
    offset: ["start 80%", "center center"],
  });

  const x = useTransform(scrollYProgress, [0, 1], [-300, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  useEffect(() => {
    // ... animation logic
    const el = upcomingTextRef.current;
    if (el) {
      const ctx = gsap.context(() => {
        gsap.fromTo(
          el,
          { x: -100, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
      return () => ctx.revert();
    }
  }, []);

  return (
    <div className="relative w-full overflow-x-hidden ">

      {/* FIXED BACKGROUND VIDEO */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* ... video logic ... */}
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover opacity-30 z-0"
        >
          <source src="/Globus/Theaterscreen.mp4" type="video/mp4" />
        </video>

        {/* DARK OVERLAY (optional, improves text contrast) */}
        <div className="absolute inset-0 bg-black/40 z-10" />

        {/* TEXT ABOVE VIDEO */}
        <div className="relative z-10 flex flex-col h-full items-end justify-center gap-4 pb-16 px-8 md:px-20">

          <motion.h2
            className="
        font-black tracking-[0.5em] text-[#AA8c2C] text-right font-black
        text-[clamp(2rem,4vw,5rem)]
        tracking-wide
      "
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{ backgroundSize: "200% auto" }}
          >
            VITSION MOVIE MAKERS
          </motion.h2>

          <h3 className="text-white text-right font-bold text-[clamp(1rem,1.2vw,1.8rem)] leading-relaxed max-w-3xl">
            VITSION Movie Makers Club is VIT Chennai’s official filmmaking community, uniting students to create films through storytelling,  workshops, collaboration, and campus cinema culture.
          </h3>
        </div>

      </section>
      {/* NAV */}
      <header className="fixed top-0 left-0 w-full z-50">
        <FloatingDockNav />
      </header>

      {/* ABOUT SECTION WITH GALAXY */}
      <section className="relative z-20 bg-black overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
          <Galaxy mouseRepulsion={false} mouseInteraction={false} />
        </div>
        <div className="relative z-10">
          <AboutSection />
        </div>
      </section>

      {/* TITLE */}
      <section
        ref={titleRef}
        className="relative z-10 py-24 md:py-24 flex justify-center overflow-hidden  border-t-8 border-[#d1ab2e]"
      >
        <motion.h6
          style={{ x, opacity }}
          className="text-white text-center font-sans font-black text-[clamp(1.6rem,3vw,10rem)] leading-[0.2]"
        >
          Upcoming Film
        </motion.h6>
      </section>

      {/* UPCOMING MOVIE WITH GALAXY */}
      <motion.section
        className="relative z-10 w-full flex justify-center px-4 py-20 md:py-10 bg-black/50 overflow-hidden"
        initial={{ opacity: 0, y: 150 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
          <Galaxy mouseRepulsion={false} mouseInteraction={false} />
        </div>
        <div className="relative z-10 w-full flex justify-center">
          <UpcomingMovie />
        </div>
      </motion.section>
      <motion.section>
        <div
          className="relative z-10 w-full flex flex-col items-center justify-center px-4 py-20 md:py-10 gap-10 bg-black/50 overflow-hidden"
        >
          <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
            <Galaxy mouseRepulsion={false} mouseInteraction={false} />
          </div>
          <div
            ref={upcomingTextRef}
            className="relative z-10 text-white text-center w-[clamp(20rem,80vw,90rem)]
 font-sans font-black text-[clamp(1.6rem,3vw,10rem)] leading-[1] tracking-tight opacity-0">
            Upcoming Event
          </div>
          <motion.section
            className="relative z-10 w-full flex justify-center px-4 py-20 md:py-10"
            initial={{ opacity: 0, y: 150 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <EventAnnouncement />
          </motion.section>
        </div>

      </motion.section>

    </div>
  );
};

export default Index;





