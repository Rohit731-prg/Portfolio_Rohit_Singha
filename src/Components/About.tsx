import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText"; // ✅ Only import what you use

import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger, SplitText);

function About() {
  const headingRef = useRef(null);
  const textRef = useRef(null);
  const sectionRef = useRef(null);
  const patternRef = useRef(null);

  useGSAP(() => {
    gsap.from(headingRef.current, {
      delay: 1,
      y: 100,
      opacity: 0,
      duration: 1.5,
      ease: "power2.out",
    });

    document.fonts.ready.then(() => {
      const splitText = new SplitText(textRef.current, { type: "lines" });

      gsap.from(splitText.lines, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom center",
          scrub: true,
          pin: false, // ✅ Use pin only if necessary
        },
        y: 100,
        opacity: 0,
        duration: 1.5,
        ease: "power2.out",
        stagger: 0.15,
      });
    });

    gsap.from(patternRef.current, {
      x: -100,
      delay: 1,
      duration: 1,
      yoyo: true,
      repeat: -1,
    })
  }, []);

  return (
    <main
      ref={sectionRef}
      id="section2"
      className="bg-primary font-inter px-6 md:px-20 lg:px-40 py-16 text-white mt-40 relative"
    >
      <p
        ref={headingRef}
        id="about_heading"
        className="text-3xl md:text-4xl font-semibold mb-6"
      >
        About Me
      </p>

      <div className="max-w-3xl">
        <p
          ref={textRef}
          id="about_text"
          className="text-gray-300 text-base md:text-lg leading-relaxed"
        >
          I'm a full-stack web developer specializing in the MERN stack and
          exploring PERN. I build clean, high-performance web applications with
          a focus on usability and maintainability. Currently seeking
          opportunities to bring passion projects and purposeful ideas to life.
        </p>
      </div>

      <div ref={patternRef} className="absolute top-10 right-30">
        {Array.from({ length: 5 }).map((_, rowIndex) => (
          <div key={rowIndex} className="flex gap-5 mb-5">
            {Array.from({ length: 5 }).map((_, colIndex) => (
              <div key={colIndex} className="w-2 h-2 bg-white rounded-full" />
            ))}
          </div>
        ))}
      </div>

    </main>
  );
}

export default About;
