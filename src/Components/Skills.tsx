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
import type { ReactNode } from "react";
import com from '../assets/com.gif'

interface skillSchma {
  icon: ReactNode;
  name: string;
  lavel: string;
}

function Skills() {
  const skillLists: skillSchma[] = [
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
      "#section3",
      {
        x:0,
        opacity: 0,
      },
      {
        x:0,
        opacity: 1,
      }
    );
  }, []);

  return (
    <main
      className="font-inter bg-primary px-6 md:px-20 lg:px-40 py-10 text-white"
    >
      <p className="text-3xl md:text-4xl font-semibold mb-6">Skills</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
        {skillLists.map((item, index) => (
          <div
            id="section3"
            key={`${item.name}-${index}`}
            className="flex items-center gap-4 p-5 rounded-xl border-[2px] border-gray-600 bg-gray-700 shadow hover:shadow-lg transition-all"
          >
            <div className="text-3xl">{item.icon}</div>
            <div>
              <p className="text-lg font-semibold">{item.name}</p>
              <p className="text-sm text-gray-300">{item.lavel}</p>
            </div>
          </div>
        ))}
      </div>

      <section className="mt-20">
        <p className="text-3xl md:text-4xl font-semibold mb-10">Experience</p>

        <div className="space-y-14">
          {/* Experience Card 1 */}
          <div className="bg-gray-800 border border-gray-600 rounded-xl p-6 shadow-md hover:shadow-lg transition">
            <div className="flex justify-between items-start flex-wrap gap-2">
              <div>
                <div className="text-xl font-semibold text-white">
                  <p>Web Developer Intern @ SocialDrive</p>
                  <img src={com} alt="" className="w-40 h-20" />
                </div>
                <p className="text-sm text-gray-400">Feb 2025 – Present</p>
              </div>
              <FaDotCircle className="text-white mt-1" />
            </div>

            <ul className="list-disc ml-6 mt-4 space-y-2 text-gray-300 text-sm leading-relaxed">
              <li>
                Contributed to real-world, production-ready applications as part
                of the development team.
              </li>
              <li>
                Delivered 3+ full-stack projects using React, Tailwind, Zustand,
                Node.js, Express, and MongoDB.
              </li>
              <li>
                Integrated features like JWT authentication, REST APIs,
                Cloudinary media handling, and transactional messaging using
                Tilow.
              </li>
            </ul>
          </div>

          {/* Experience Card 2 */}
          <div className="bg-gray-800 border border-gray-600 rounded-xl p-6 shadow-md hover:shadow-lg transition">
            <div className="flex justify-between items-start flex-wrap gap-2">
              <div>
                <p className="text-xl font-semibold text-white">
                  Self Employed
                </p>
                <p className="text-sm text-gray-400">Apr 2024 – Present</p>
              </div>
              <FaDotCircle className="text-white mt-1" />
            </div>

            <ul className="list-disc ml-6 mt-4 space-y-2 text-gray-300 text-sm leading-relaxed">
              <li>
                Built and deployed several personal and client-side projects to
                strengthen full-stack capabilities.
              </li>
              <li>
                Focused on improving performance, accessibility, and
                maintainable code in MERN-based apps.
              </li>
              <li>
                Continuously learning new tools and applying modern web
                standards with real-world outcomes.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Skills;
