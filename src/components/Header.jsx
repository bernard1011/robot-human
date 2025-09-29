import { useState } from "react";
import Hero from "./Hero.jsx";
import headerBac from '../assets/Header-background.webp'
import Navbar from "./Navbar.jsx";

const Header = () => {


  return (
    <><div className="bg-cover bg-center" style={{backgroundImage: `url(${headerBac})`}}>
      <div className="md:px-6 xl:max-w-[1400px] xl:px-10 xl:mx-auto">


        {/* <Navbar />       */}
       <Hero/>
      </div>
    </div>
    </>
  );
};

export default Header;
