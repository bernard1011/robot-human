import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  });

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className={` sticky top-0 z-30  transition-colors duration-300 ${
          menuOpen
            ? "bg-transparent"
            : `${
                scrolled
                  ? "backdrop-blur-md bg-white/50 shadow-md w-full"
                  : "bg-transparent"
              }`
        }  `}
      >
        <div className="flex items-center justify-between xl:px-10 xl:max-w-[1400px] xl:mx-auto w-full  py-4 px-6">
          <div
            className={`${
              menuOpen ? "text-black" : "text-black"
            } text-3xl md:font-bold`}
          >
            <a href="#">
            <span className="font-bitcount text-4xl">Robot</span>
            <span className="text-amber-600">Human</span>
            </a>
          </div>
          {/* Navigation */}
          <nav className="hidden md:flex gap-6">
            <a href="#" className="text-black hover:text-amber-600 transition">
              Home
            </a>
            <a href="#about" className="text-black hover:text-amber-600 transition">
              About
            </a>
            <a href="#contact" className="text-black hover:text-amber-600 transition">
              Contact
            </a>
          </nav>
          {/* Mobile Menu Button */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {/* Burger icon */}
            <div className="w-6 gap-2 flex flex-col justify-between">
              <span
                className={`block h-[0.2rem] rounded transition-all duration-300 ${
                  menuOpen ? "rotate-45 translate-y-2.5 bg-black" : "bg-black"
                }`}
              ></span>
              <span
                className={`block h-[0.2rem] rounded transition-all duration-300 ${
                  menuOpen ? "opacity-0" : "bg-black"
                }`}
              ></span>
              <span
                className={`block h-[0.2rem]  rounded transition-all duration-300 ${
                  menuOpen ? "-rotate-45 -translate-y-3 bg-black" : "bg-black"
                }`}
              ></span>
            </div>
          </button>
        </div>
      </motion.div>
      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-white/50 backdrop-blur-xl flex flex-col items-center justify-center gap-8 transition-all duration-300 z-20 ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        } md:hidden`}
      >
        <a
          href="#"
          className={`text-black text-2xl hover:text-amber-600 transition`}
          onClick={() => setMenuOpen(false)}
        >
          Home
        </a>
        <a
          href="#about"
          className={`text-black text-2xl hover:text-amber-600 transition`}
          onClick={() => setMenuOpen(false)}
        >
          About
        </a>
        <a
          href="#contact"
          className={`text-black text-2xl hover:text-amber-600 transition`}
          onClick={() => setMenuOpen(false)}
        >
          Contact
        </a>
      </div>
    </>
  );
};

export default Navbar;
