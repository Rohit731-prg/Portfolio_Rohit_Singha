import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import {
  FaDotCircle,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { SiTypescript, SiExpress, SiMongodb, SiRedux } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { useRef } from "react";
import type { ReactNode } from "react";

interface skillSchema {
  icon: ReactNode;
  name: string;
  lavel: string;
}

function Skills() {
  const containerRef = useRef(null);

  const skillLists: skillSchema[] = [
    { icon: <FaHtml5 />, name: "HTML5", lavel: "Advanced" },
    { icon: <FaCss3Alt />, name: "CSS3", lavel: "Advanced" },
    { icon: <DiJavascript />, name: "JavaScript", lavel: "Advanced" },
    { icon: <SiTypescript />, name: "TypeScript", lavel: "Intermediate" },
    { icon: <FaReact />, name: "React.js", lavel: "Advanced" },
    { icon: <FaNodeJs />, name: "Node.js", lavel: "Advanced" },
    { icon: <SiExpress />, name: "Express.js", lavel: "Advanced" },
    { icon: <SiMongodb />, name: "MongoDB", lavel: "Advanced" },
    { icon: <SiRedux />, name: "Zustand", lavel: "Intermediate" },
    { icon: <RiTailwindCssFill />, name: "Tailwind CSS", lavel: "Advanced" },
    { icon: <FaGithub />, name: "Git & GitHub", lavel: "Intermediate" },
  ];

  useGSAP(() => {
    gsap.fromTo(
      containerRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.2 }
    );
  }, []);

  return (
    <main className="font-inter bg-primary text-white px-4 sm:px-8 md:px-16 lg:px-32 py-10">
      <p className="text-3xl md:text-4xl font-semibold mb-8">Skills</p>

      <div
        ref={containerRef}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
      >
        {skillLists.map((item, index) => (
          <div
            key={`${item.name}-${index}`}
            className="flex items-center gap-4 p-5 rounded-xl border-[1.5px] border-gray-600 bg-gray-700 shadow-md hover:shadow-lg transition-all"
          >
            <div className="text-3xl">{item.icon}</div>
            <div>
              <p className="text-lg font-semibold">{item.name}</p>
              <p className="text-sm text-gray-300">{item.lavel}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Experience Section */}
      <section className="mt-20">
        <p className="text-3xl md:text-4xl font-semibold mb-10">Experience</p>

        <div className="space-y-14">
          {[
            {
              title: "Independent Learner",
              org: "",
              duration: "Apr 2024 – Present",
              points: [
                "Built and deployed several personal and client-side projects to strengthen full-stack capabilities.",
                "Focused on improving performance, accessibility, and maintainable code in MERN-based apps.",
                "Continuously learning new tools and applying modern web standards with real-world outcomes.",
              ],
            },
            {
              title: "Intern @ SocialDrive",
              org: "Social Drive",
              duration: "Oct 2024 – Jun 2025",
              points: [
                "Contributed to real-world, production-ready applications as part of the development team.",
                "Delivered 3+ full-stack projects using React, Tailwind, Zustand, Node.js, Express, and MongoDB.",
                "Integrated features like JWT authentication, REST APIs, Cloudinary media handling, and transactional messaging using Tilow.",
              ],
            },
            {
              title: "Full-Time Employee @ SocialDrive",
              org: "Social Drive",
              duration: "July 2025 – Present",
              points: [
                "Contributed to real-world, production-ready applications as part of the development team.",
                "Delivered 3+ full-stack projects using React, Tailwind, Zustand, Node.js, Express, and MongoDB.",
                "Integrated features like JWT authentication, REST APIs, Cloudinary media handling, and transactional messaging using Tilow.",
              ],
            },
          ].map((exp, i) => (
            <div
              key={i}
              className="bg-gray-800 border border-gray-600 rounded-xl p-6 shadow-md hover:shadow-lg transition"
            >
              <div className="flex justify-between items-start flex-wrap gap-2">
                <div>
                  <p className="text-xl font-semibold text-white">
                    {exp.title}
                  </p>
                  {exp.org && (
                    <p className="text-lg mt-1 text-gray-200">{exp.org}</p>
                  )}
                  <p className="text-sm text-gray-400">{exp.duration}</p>
                </div>
                <FaDotCircle className="text-white mt-1" />
              </div>
              <ul className="list-disc ml-6 mt-4 space-y-2 text-gray-300 text-sm leading-relaxed">
                {exp.points.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Skills;
