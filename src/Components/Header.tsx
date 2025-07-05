import { FaUserLarge } from "react-icons/fa6";

interface NavArr {
  id: number;
  name: string;
  link: string;
}

function Header() {
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

  return (
    <header className="font-inter bg-primary px-6 md:px-10 py-4 flex items-center justify-between text-white border-b-[2px] border-gray-600">
      <div className="flex items-center gap-3">
        <FaUserLarge className="text-lg md:text-xl" />
        <p className="font-bold text-base md:text-lg">Rohit's Portfolio</p>
      </div>

      <nav className="hidden sm:flex flex-row gap-4 md:gap-6 text-sm md:text-base">
        {navber.map((item) => (
          <button
            key={item.id}
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
