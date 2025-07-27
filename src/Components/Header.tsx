import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import pic from '../assets/pic.png';

interface NavArr {
  id: number;
  name: string;
  link: string;
}

function Header() {
  const navItemsRef = useRef<HTMLButtonElement[]>([]);
  const logoRef = useRef<HTMLDivElement>(null);

  const navber: NavArr[] = [
    { id: 1, name: "Home", link: "section1" },
    { id: 2, name: "About", link: "section2" },
    { id: 3, name: "Skills", link: "section3" },
    { id: 4, name: "Projects", link: "section4" },
    { id: 5, name: "Contact", link: "section5" },
  ];

  const scrollToView = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { duration: 1.5, ease: "power2.out" } });

    tl.from(logoRef.current, {
      y: -20,
      opacity: 0,
    })
    .from(navItemsRef.current, {
      y: -10,
      opacity: 0,
      stagger: 0.1,
    }, "-=1");
  }, []);

  return (
    <header className="font-inter bg-primary px-6 md:px-10 py-4 flex items-center justify-between text-white border-b-[2px] border-gray-600 sticky top-0 z-50">
      <div ref={logoRef} className="flex items-center gap-3">
        <img src={pic} alt="Logo" className="w-8 h-8 object-cover bg-white rounded-full" />
        <p className="font-bold text-base md:text-lg">Rohit's Portfolio</p>
      </div>

      <nav className="hidden sm:flex flex-row gap-4 md:gap-6 text-sm md:text-base">
        {navber.map((item, i) => (
          <button
            key={item.id}
            ref={(el) => {
              if (el) navItemsRef.current[i] = el;
            }}
            onClick={() => scrollToView(item.link)}
            className="hover:text-gray-300 transition-colors duration-200"
          >
            {item.name}
          </button>
        ))}
      </nav>
    </header>
  );
}

export default Header;
