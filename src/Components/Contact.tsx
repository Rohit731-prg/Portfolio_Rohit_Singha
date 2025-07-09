import { FaLinkedin, FaGithub } from "react-icons/fa";

interface ConSchema {
  name: string;
  link: string;
}

function Contact() {
  const con: ConSchema[] = [
    { name: "GitHub", link: "https://github.com/Rohit731-prg" },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/rohit-singha-55477b308/",
    },
  ];

  return (
    <main
      id="section5"
      className="font-inter bg-primary px-4 sm:px-10 md:px-20 lg:px-40 py-10 text-white"
    >
      <p className="text-3xl md:text-4xl font-semibold mb-6">Contact</p>

      <div className="space-y-3 mb-8">
        <p>
          <span className="font-medium">Email:</span>{" "}
          <span className="underline underline-offset-4">
            rohitsingha.bca@gmail.com
          </span>
        </p>
        <p>
          <span className="font-medium">Phone:</span>{" "}
          <span className="tracking-wide">+91 9883583218</span>
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-10">
        {con.map((item, index) => {
          const isLinkedIn = item.name === "LinkedIn";
          return (
            <div
              key={index}
              role="button"
              onClick={() => window.open(item.link, "_blank")}
              className={`group cursor-pointer relative flex items-center gap-2 p-3 pr-6 rounded-md font-bold transition-all duration-300 ${
                isLinkedIn
                  ? "bg-sky-700 hover:bg-sky-600"
                  : "bg-gray-700 hover:bg-gray-600"
              }`}
            >
              <span className="text-2xl">
                {isLinkedIn ? <FaLinkedin /> : <FaGithub />}
              </span>
              <span className="border-l-2 px-2">Rohit Singha</span>

              {/* Tooltip */}
              <div
                className={`absolute top-full mt-2 left-1/2 -translate-x-1/2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 px-3 py-2 text-sm rounded-md shadow ${
                  isLinkedIn ? "bg-sky-600" : "bg-gray-600"
                }`}
              >
                See my profile!
                {/* Tooltip arrow */}
                <div
                  className={`absolute w-3 h-3 rotate-45 -top-1 left-1/2 -translate-x-1/2 ${
                    isLinkedIn ? "bg-sky-600" : "bg-gray-600"
                  }`}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}

export default Contact;
