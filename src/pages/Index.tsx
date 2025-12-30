import LightRays from "@/components/LightRays";
import FloatingDockNav from "@/components/FloatingDockNav";
import UpcomingMovie from "@/components/UpcomingMovie";
import EventAnnouncement from "@/components/EventAnnouncement";

import {
  motion,
  useScroll,
  useTransform
} from "framer-motion";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  const titleRef = useRef(null);
  const upcomingTextRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: titleRef,
    offset: ["start 80%", "center center"],
  });

  const x = useTransform(scrollYProgress, [0, 1], [-300, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  useEffect(() => {
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
      <section >

        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="w-full h-full object-cover opacity-15 md:opacity-20 "
        >
          <source src="/Globus/Theaterscreen.mp4" type="video/mp4" />

        </video>
      </section>
      {/* NAV */}
      <header className="fixed top-0 left-0 w-full z-50">
        <FloatingDockNav />
      </header>

      {/* HERO */}


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

      {/* UPCOMING MOVIE */}
      <motion.section
        className="relative z-10 w-full flex justify-center px-4 py-20 md:py-10 border-b-8 border-[#d1ab2e]"
        initial={{ opacity: 0, y: 150 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <UpcomingMovie />
      </motion.section>
      <motion.section>
        <div
          className="relative z-10 w-full flex justify-center px-4 py-20 md:py-10"
        >
          <div
            ref={upcomingTextRef}
            className="text-white text-center w-[clamp(20rem,80vw,90rem)]
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


