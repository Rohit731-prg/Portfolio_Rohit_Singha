import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { CiLink } from "react-icons/ci";

import ChatPic1 from "../assets/projects/chatHub/pic1.png";
import ChatPic2 from "../assets/projects/chatHub/pic2.png";
import ChatPic3 from "../assets/projects/chatHub/pic3.png";
import ChatPic4 from "../assets/projects/chatHub/pic4.png";

import wea1 from "../assets/projects/weatherApp/wea1.png";
import wea2 from "../assets/projects/weatherApp/wea2.png";

import re1 from "../assets/projects/recipe/re1.png";
import re2 from "../assets/projects/recipe/re2.png";
import re3 from "../assets/projects/recipe/re3.png";
import re4 from "../assets/projects/recipe/re4.png";

import blog1 from "../assets/projects/blog/blog1.png";
import blog2 from "../assets/projects/blog/blog2.png";
import blog3 from "../assets/projects/blog/blog3.png";
import blog4 from "../assets/projects/blog/blog4.png";
import blog6 from "../assets/projects/blog/blog6.png";
import blog7 from "../assets/projects/blog/blog7.png";
import blog8 from "../assets/projects/blog/blog8.png";

interface SettingSchema {
  dots: boolean;
  infinite: boolean;
  speed: number;
  slidesToShow: number;
  slidesToScroll: number;
  autoplay: boolean;
  autoplaySpeed: number;
}

interface ProjectSchema {
  name: string;
  type: string;
  description: string;
  skills: string[];
  images: string[];
  link: string;
}

const Project = () => {
  const settings: SettingSchema = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const projectInfo: ProjectSchema[] = [
    {
      name: "ChatHub",
      type: "Full Stack",
      description: "A real-time chat app using React, Socket.io and MongoDB.",
      skills: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Tailwind CSS",
        "Zustand",
        "Socket.io",
        "React Router",
        "Axios",
        "Cloudinary",
        "Nodemailer",
      ],
      images: [ChatPic1, ChatPic2, ChatPic3, ChatPic4],
      link: "https://github.com/Rohit731-prg/ChatHub",
    },
    {
      name: "Weather App",
      type: "Frontend",
      description: "A weather forecasting app using React and OpenWeather API.",
      skills: [
        "React.js",
        "OpenWeather API",
        "Tailwind CSS",
        "context API",
        "React Router",
      ],
      images: [wea1, wea2],
      link: "https://github.com/Rohit731-prg/Weather-App",
    },
    {
      name: "Recipe Finder",
      type: "Frontend",
      description: "A recipe search app using React and Edamam API.",
      skills: [
        "React.js",
        "Edamam API",
        "Tailwind CSS",
        "context API",
        "React Router",
      ],
      images: [re1, re2, re3, re4],
      link: "https://github.com/Rohit731-prg/Recipe-Finder",
    },
    {
      name: "Blog App",
      type: "Full Stack",
      description: "A blog platform using React and Node.js.",
      skills: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Tailwind CSS",
        "Zustand",
        "React Router",
        "Axios",
        "Cloudinary",
        "Nodemailer",
      ],
      images: [blog1, blog2, blog3, blog4, blog6, blog7, blog8],
      link: "https://github.com/Rohit731-prg/Blog-App",
    },
  ];

  return (
    <main
      id="section4"
      className="font-inter bg-primary px-6 md:px-20 py-10 text-white"
    >
      <h2 className="text-3xl font-bold mb-8">Projects</h2>

      <div className="grid gap-10 md:grid-cols-2">
        {projectInfo.map((project, index) => (
          <div
            key={index}
            className="bg-secondary rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow relative"
          >
            {/* Type badge */}
            <span
              className={`absolute top-4 right-4 px-3 py-1 text-xs font-semibold rounded-full ${
                project.type === "Full Stack"
                  ? "bg-emerald-500 text-white"
                  : "bg-indigo-400 text-white"
              }`}
            >
              {project.type}
            </span>

            <Slider {...settings}>
              {project.images.map((image, imgIndex) => (
                <div key={imgIndex}>
                  <img
                    src={image}
                    alt={`Slide ${imgIndex + 1}`}
                    className="w-full h-80 object-cover"
                  />
                </div>
              ))}
            </Slider>

            <div className="p-5 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">{project.name}</h3>
                <button
                  onClick={() => window.open(project.link, "_blank")}
                  className="text-accent hover:text-accent-dark transition"
                  title="Open Project"
                >
                  <CiLink size={24} />
                </button>
              </div>

              {/* TYPE FIELD */}
              <p className="text-sm font-medium text-cyan-400">
                Type: <span className="text-white">{project.type}</span>
              </p>

              <p className="text-sm text-gray-300">{project.description}</p>

              <div className="flex flex-wrap gap-2">
                {project.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="bg-accent bg-opacity-10 text-black px-3 py-1 text-xs rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Project;
