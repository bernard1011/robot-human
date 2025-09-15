import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="w-full bg-transparent fixed z-30  py-4 px-6 flex items-center justify-between">
        <div className={`${menuOpen ? 'text-black' : 'text-black'} text-3xl font-bold`}>
          Robot<span className="text-amber-600">Human</span>
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
        className={`fixed top-0 left-0 w-full h-full bg-white/70 backdrop-blur-lg flex flex-col items-center justify-center gap-8 transition-all duration-300 z-20 ${
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
      <div className="relative h-48 w-3/4 rounded-full blur-3xl opacity-80 bg-amber-600/40 top-16 left-56">
            {/* orange mark */}
      </div>
      <div>
        <div className="flex gap-3 ml-12 w-max bg-orange-300/40 px-3 py-1 border-orange-500 border rounded-2xl">
            <span className="bg-orange-500 rounded-full px-1 text-white">01</span><p className="text-orange-400">Purpose</p> 
        </div>
      </div>
    </>
  );
};

export default Header;
