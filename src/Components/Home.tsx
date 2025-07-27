import { useGSAP } from "@gsap/react";
import useScroller from "../store/scroll";
import gsap from "gsap";
import { SplitText } from "gsap/all";

gsap.registerPlugin(SplitText);

function Home() {
  useGSAP(() => {
    gsap.from("#pic", {
      x: 100,
      opacity: 0,
      duration: 1.5,
      ease: "power2.out",
    });

    gsap.from("#head", {
      x: -100,
      opacity: 0,
      duration: 1.5,
      ease: "power2.out",
      stagger: 0.5,
    });

    document.fonts.ready.then(() => {
      const textSplit = new SplitText("#btn", { type: "chars" });

      gsap.from(textSplit.chars, {
        y: 50,
        opacity: 0,
        duration: 1.5,
        ease: "power2.out",
        stagger: 0.1,
      });
    });
  }, []);
  return (
    <main
      id="section1"
      className="bg-primary flex flex-row items-center justify-center pt-24 pb-20 text-white font-inter px-40"
    >
      <section className="w-2/3 pr-10">
        <p id="head" className="">
          Hello, My name is
        </p>
        <p id="head" className="text-3xl md:text-4xl font-semibold mb-10">
          Rohit Singha
        </p>

        <p id="head" className="text-sm md:text-base text-gray-400 my-3">
          Full-stack MERN developer, BCA graduate, currently building web apps
          at SocialDrive. Passionate about clean UI & robust backend. Planning
          to pursue MCA to deepen my knowledge and skills further.
        </p>
        <button
          id="btn"
          onClick={() => useScroller.getState().explore()}
          className="border-2 border-white rounded-full px-10 py-3 text-2xl font-semibold my-10 hover:bg-white hover:text-black transition-all duration-300 ease-in-out"
        >
          Explore More
        </button>
      </section>
      <img
        id="pic"
        src={"https://cdn-icons-png.flaticon.com/512/3242/3242257.png"}
        alt="Rohit Singha"
        className="w-1/4 object-contain"
      />
    </main>
  );
}

export default Home;
