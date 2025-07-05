import pic from "../assets/pic.png";

function Home() {
  return (
    <main
      id="section1"
      className="bg-primary flex flex-col items-center justify-center pt-24 pb-20 px-4 text-white font-inter text-center"
    >
      <img
        src={pic}
        alt="Rohit Singha"
        className="w-52 h-80 object-cover rounded-xl shadow-lg mb-6"
      />

      <p className="text-3xl md:text-4xl font-semibold mb-2">Rohit Singha</p>
      <p className="text-sm md:text-base text-gray-300 mb-1">
        Full Stack Web Developer
      </p>
      <p className="text-sm md:text-base text-gray-400 max-w-xl">
        Crafting fast, responsive, and user-friendly websites tailored to your goals.
      </p>
    </main>
  );
}

export default Home;
