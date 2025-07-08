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

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {con.map((item, index) => (
          <button 
          onClick={() => window.open(item.link, "_blank")}
          key={index} 
          className="group hover:bg-sky-600 relative bg-sky-700 rounded-sm text-neutral-50 duration-500 font-bold flex justify-start gap-2 items-center p-2 pr-6">
            {/* <svg
              className="w-8 h-8 fill-neutral-50"
              height="100"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 100 100"
              width="100"
              x="0"
              xmlns="http://www.w3.org/2000/svg"
              y="0"
            >
              <path d="M92.86,0H7.12A7.17,7.17,0,0,0,0,7.21V92.79A7.17,7.17,0,0,0,7.12,100H92.86A7.19,7.19,0,0,0,100,92.79V7.21A7.19,7.19,0,0,0,92.86,0ZM30.22,85.71H15.4V38H30.25V85.71ZM22.81,31.47a8.59,8.59,0,1,1,8.6-8.59A8.6,8.6,0,0,1,22.81,31.47Zm63,54.24H71V62.5c0-5.54-.11-12.66-7.7-12.66s-8.91,6-8.91,12.26V85.71H39.53V38H53.75v6.52H54c2-3.75,6.83-7.7,14-7.7,15,0,17.79,9.89,17.79,22.74Z"></path>
            </svg> */}
            <p>{item.name}</p>
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
