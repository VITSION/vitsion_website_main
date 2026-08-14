
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



const Index = () => {
  const titleRef = useRef(null);
  const upcomingTextRef = useRef(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const { scrollYProgress } = useScroll({
    target: titleRef,
    offset: ["start 80%", "center center"],
  });

  const x = useTransform(scrollYProgress, [0, 1], [-300, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  // Pause video when scrolled off screen to free GPU for scroll rendering
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => { });
        } else {
          video.pause();
        }
      },
      { threshold: 0.05 }
    );
    obs.observe(video);
    return () => obs.disconnect();
  }, []);

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
    <div className="relative w-full overflow-x-hidden bg-black min-h-screen">
      {/* FIXED BACKGROUND VIDEO */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* VIDEO + OVERLAY */}
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover opacity-30 z-0"
        >
          <source src="/Globus/Theaterscreen.mp4" type="video/mp4" />
        </video>

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/40 z-10" />

        {/* TEXT ABOVE VIDEO */}
        <div className="relative z-10 flex flex-col h-full items-end justify-center gap-3 pb-16 px-4 md:px-20">
          {/* Pure CSS gradient animation — no JS timer, compositor-thread only */}
          <style>{`
            @keyframes gradientShift {
              0%, 100% { background-position: 0% 50%; }
              50%       { background-position: 100% 50%; }
            }
            .hero-title {
              background: linear-gradient(90deg, #AA8c2C, #f0d080, #AA8c2C);
              background-size: 200% auto;
              -webkit-background-clip: text;
              background-clip: text;
              -webkit-text-fill-color: transparent;
              animation: gradientShift 5s linear infinite;
            }
          `}</style>
          <h2 className="hero-title font-black tracking-[0.2em] md:tracking-[0.5em] text-right text-[clamp(1.4rem,5vw,5rem)]">
            VITSION MOVIE MAKERS
          </h2>

          <h3 className="text-white text-right font-bold text-[clamp(0.75rem,2vw,1.2rem)] leading-relaxed max-w-3xl">
            VITSION Movie Makers Club is VIT Chennai's official filmmaking community, uniting students to create films through storytelling, workshops, collaboration, and campus cinema culture.
          </h3>
        </div>

      </section>

      {/* ABOUT SECTION */}
      <section className="relative z-20 overflow-hidden">
        <div className="relative z-10">
          <AboutSection />
        </div>
      </section>

      <section
        ref={titleRef}
        className="relative z-10 py-12 md:py-16 flex justify-center overflow-hidden"
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
        className="relative z-10 w-full flex justify-center px-4 py-10 md:py-10 bg-black/50 overflow-hidden"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, margin: "-60px" }}
        style={{ willChange: "transform, opacity" }}
      >
        <div className="relative z-10 w-full flex justify-center">
          <UpcomingMovie />
        </div>
      </motion.section>
      <section>
        <div
          className="relative z-10 w-full flex flex-col items-center justify-center px-4 py-10 md:py-10 gap-8 bg-black/50 overflow-hidden"
        >
          <div
            ref={upcomingTextRef}
            className="relative z-10 text-white text-center w-[clamp(20rem,80vw,90rem)]
 font-sans font-black text-[clamp(1.6rem,3vw,10rem)] leading-[1] tracking-tight opacity-0">
            Upcoming Event
          </div>
          <motion.section
            className="relative z-10 w-full flex justify-center px-4 py-10 md:py-10"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, margin: "-60px" }}
            style={{ willChange: "transform, opacity" }}
          >
            <EventAnnouncement />
          </motion.section>
        </div>

      </section>

    </div>
  );
};

export default Index;





