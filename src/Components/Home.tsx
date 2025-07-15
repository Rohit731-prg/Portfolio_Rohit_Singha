import useScroller from "../store/scroll";

function Home() {
  return (
    <main
      id="section1"
      className="bg-primary flex flex-row items-center justify-center pt-24 pb-20 text-white font-inter px-40"
    >
      <section className="w-2/3 pr-10">
        <p className="">Hello, My name is</p>
        <p className="text-3xl md:text-4xl font-semibold mb-2">Rohit Singha</p>
        <p className="text-sm md:text-base text-gray-300 mb-1">
          Full Stack Web Developer
        </p>
        <p className="text-sm md:text-base text-gray-400 my-3">
          Full-stack MERN developer, BCA graduate, currently building web apps at SocialDrive. Passionate about clean UI & robust backend. Planning to pursue MCA to deepen my knowledge and skills further.
        </p>
        <button
        onClick={() => useScroller.getState().explore()}
          className="border-2 border-white rounded-full px-10 py-3 text-2xl font-semibold my-10 hover:bg-white hover:text-black transition-all duration-300 ease-in-out"
        >
          Explore More
        </button>
      </section>
      <img
        src={"https://cdn-icons-png.flaticon.com/512/3242/3242257.png"}
        alt="Rohit Singha"
        className="w-1/4 object-contain"
      />
    </main>
  );
}

export default Home;
