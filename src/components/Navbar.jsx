import { useEffect } from "react";
import logo from '../assets/logo2.png'; // adjust path based on file location

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);
  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="font-mono text-xl font-bold text-white">
            {/* {" "} */}
            {/* pedro<span className="text-blue-500">.tech</span>{" "} */}
            <img src={logo} className="w-21 h-16" />

          </a>

          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#about"
              className="text-gray-300 hove:text-white transition-colors"
            >
              {" "}
              اطلاعات مجموعه
            </a>
            <a
              href="#facilities"
              className="text-gray-300 hove:text-white transition-colors"
            >
              {" "}
             امکانات{" "}
            </a>
            <a
              href="#home"
              className="text-gray-300 hove:text-white transition-colors"
            >
              {" "}
             خانه{" "}
            </a>
            {/* <a
              href="#contact"
              className="text-gray-300 hove:text-white transition-colors"
            >
              {" "}
              Contact{" "}
            </a> */}
          </div>
        </div>
      </div>
    </nav>
  );
};
