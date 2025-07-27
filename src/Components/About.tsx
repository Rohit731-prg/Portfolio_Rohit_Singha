import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText);

function About() {
  useGSAP(() => {
    gsap.from("#about_heading", {
      delay: 1,
      y: 100,
      opacity: 0,
      duration: 1.5,
      ease: "power2.out",
    });

    document.fonts.ready.then(() => {
      const splittext = new SplitText("#about_text", { type: "lines" });

      gsap.from(splittext.lines, {
        scrollTrigger: {
          trigger: "#section2",
          start: "top bottom",
          end: "bottom center",
          scrub: true,
          pin: true,
          markers: true,
        },
        y: 100,
        opacity: 0,
        duration: 1.5,
        ease: "power2.out",
        stagger: 0.15,
      });
    });
  }, []);
  return (
    <main
      id="section2"
      className="bg-primary font-inter px-6 md:px-20 lg:px-40 py-16 text-white"
    >
      <p id="about_heading" className="text-3xl md:text-4xl font-semibold mb-6">
        About Me
      </p>

      <div className="max-w-3xl">
        <p
          id="about_text"
          className="text-gray-300 text-base md:text-lg leading-relaxed"
        >
          I'm a full-stack web developer specializing in the MERN stack and
          exploring PERN. I build clean, high-performance web applications with
          a focus on usability and maintainability. Currently seeking
          opportunities to bring passion projects and purposeful ideas to life.
        </p>
      </div>
    </main>
  );
}

export default About;
