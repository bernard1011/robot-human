import { useState } from "react";
import Hero from "./Hero.jsx";
import headerBac from '../assets/Header-background.webp'


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <><div className="bg-cover bg-center md:p-5 xl:px-10 " style={{backgroundImage: `url(${headerBac})`}}>
      <div className="2xl:max-w-[1500px] 2xl:mx-auto">


      <div className="w-full bg-transparent sticky top-0 z-30  py-4 px-6 flex items-center justify-between">
        <div className={`${menuOpen ? 'text-black' : 'text-black'} text-3xl font-bold`}>
          <span className="font-bitcount text-4xl">Robot</span><span className="text-amber-600">Human</span>
        </div>
        {/* Navigation */}
        <nav className="hidden md:flex gap-6">
          <a href="#" className="text-black hover:text-amber-600 transition">
            Home
          </a>
          <a href="#" className="text-black hover:text-amber-600 transition">
            About
          </a>
          <a href="#" className="text-black hover:text-amber-600 transition">
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
            <div className="w-6 gap-2 flex flex-col justify-between" >
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
      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-white/70 backdrop-blur-xl flex flex-col items-center justify-center gap-8 transition-all duration-300 z-20 ${
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
          href="#"
          className={`text-black text-2xl hover:text-amber-600 transition`}
          onClick={() => setMenuOpen(false)}
        >
          About
        </a>
        <a
          href="#"
          className={`text-black text-2xl hover:text-amber-600 transition`}
          onClick={() => setMenuOpen(false)}
        >
          Contact
        </a>
      </div>
       <Hero/>
      </div>
    </div>
    </>
  );
};

export default Header;
