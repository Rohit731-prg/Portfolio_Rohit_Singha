import { FaLinkedin, FaGithub } from "react-icons/fa";

interface conSchma {
  name: string;
  link: string;
}

function Contact() {
  const con: conSchma[] = [
    { name: "GitHub", link: "https://github.com/Rohit731-prg" },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/rohit-singha-55477b308/",
    },
  ];

  return (
    <main
      id="section5"
      className="font-inter bg-primary px-6 md:px-20 lg:px-40 py-10 text-white"
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
        {con.map((item, index) => (
          <button 
          onClick={() => window.open(item.link, "_blank")}
          key={index} 
          className={`group text-neutral-50 relative duration-500 font-bold flex justify-start gap-2 items-center p-2 pr-6 ${item.name == 'LinkedIn' ? 'hover:bg-sky-600 bg-sky-700' : 'hover:bg-gray-600 bg-gray-700'} rounded-sm`}>
            <p className="text-2xl">{item.name == "LinkedIn" ? <FaLinkedin /> : <FaGithub />}</p>
            <span className="border-l-2 px-1">Rohit Singha</span>
            <div className="group-hover:opacity-100 opacity-0 top-16 absolute z-10 inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-500 bg-sky-600 rounded-lg shadow-sm before:w-3 before:h-3 before:rotate-45 before:-top-1 before:left-20 before:bg-sky-600 before:absolute">
              See my profile!
            </div>
          </button>
        ))}
      </div>
    </main>
  );
}

export default Contact;
