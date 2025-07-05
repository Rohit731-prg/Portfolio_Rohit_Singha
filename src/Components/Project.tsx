import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { CiLink } from "react-icons/ci";
import ChatPic1 from "../assets/projects/chatHub/pic1.png";
import ChatPic2 from "../assets/projects/chatHub/pic2.png";
import ChatPic3 from "../assets/projects/chatHub/pic3.png";
import ChatPic4 from "../assets/projects/chatHub/pic4.png";

interface SettingSchema {
  dots: boolean;
  infinite: boolean;
  speed: number;
  slidesToShow: number;
  slidesToScroll: number;
}

interface ProjectSchema {
  name: string;
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
  };

  const projectInfo: ProjectSchema[] = [
    {
      name: "ChatHub",
      description: "A real-time chat app using React, Socket.io and MongoDB.",
      skills: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Zustand", "Socket.io"],
      images: [ChatPic1, ChatPic2, ChatPic3, ChatPic4],
      link: "https://github.com/Rohit731-prg/ChatHub",
    },
    // You can add more projects here
  ];

  return (
    <main id="section4" className="font-inter bg-primary px-6 md:px-20 py-10 text-white">
      <h2 className="text-3xl font-bold mb-8">Projects</h2>

      <div className="grid gap-10 md:grid-cols-2">
        {projectInfo.map((project, index) => (
          <div
            key={index}
            className="bg-secondary rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow"
          >
            <Slider {...settings}>
              {project.images.map((image, imgIndex) => (
                <div key={imgIndex}>
                  <img
                    src={image}
                    alt={`Slide ${imgIndex + 1}`}
                    className="w-full h-64 object-cover"
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
