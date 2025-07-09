import useScroller from "../store/scroll";

function Home() {
  return (
    <main
      id="section1"
      className="bg-primary flex flex-row items-center justify-between pt-24 pb-20 text-white font-inter px-40"
    >
      <section className="w-2/3">
        <p className="text-3xl md:text-4xl font-semibold mb-2">Rohit Singha</p>
        <p className="text-sm md:text-base text-gray-300 mb-1">
          Full Stack Web Developer
        </p>
        <p className="text-sm md:text-base text-gray-400 max-w-xl my-3">
          Full-stack MERN developer, BCA graduate, currently building web apps at SocialDrive. Passionate about clean UI & robust backend. Planning to pursue MCA to deepen my knowledge and skills further.
        </p>
        <button 
        onClick={() => useScroller.getState().explore()}
        className="group relative my-5 bg-slate-900 h-16 w-64 border-2 border-teal-600 text-white text-base font-bold rounded-xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:border-emerald-400 hover:text-emerald-300 p-3 text-left before:absolute before:w-10 before:h-10 before:content[''] before:right-2 before:top-2 before:z-10 before:bg-indigo-500 before:rounded-full before:blur-lg before:transition-all before:duration-500 after:absolute after:z-10 after:w-16 after:h-16 after:content[''] after:bg-teal-400 after:right-6 after:top-4 after:rounded-full after:blur-lg after:transition-all after:duration-500 hover:before:right-10 hover:before:-bottom-4 hover:before:blur hover:after:-right-6 hover:after:scale-110">
          Explore More
        </button>
      </section>
      <img
        src={"https://cdn-icons-png.flaticon.com/128/3242/3242257.png"}
        alt="Rohit Singha"
        className="w-1/3"
      />
    </main>
  );
}

export default Home;
