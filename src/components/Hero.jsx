import { ArrowRight } from "lucide-react";
import robotFirst from "../assets/hero-image.jpg";
import Purpose from "./Purpose.jsx";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <>
      {/* <div className="absolute h-80 w-1/2 md:h-48 md:w-2/3 rounded-full blur-3xl  bg-amber-600/20 top-8 left-44 md:top-3 md:left-60">
      </div> */}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        className="mx-6 md:mx-0 my-10 flex flex-col lg:flex-row gap-5 md:gap-10 lg:items-center xl:justify-between relative before:absolute before:h-80 before:w-1/2 before:md:h-48 before:md:w-2/3 before:rounded-xl before:blur-3xl before:bg-orange-600/20 before:top-8 before:left-44 before:md:top-0n"
      >
        {/* <div className="flex gap-3 w-max bg-orange-300/40 px-3 py-1 border-orange-500 border rounded-2xl">
        <span className="bg-orange-500 rounded-full px-1 text-white">01</span>
        <p className="text-orange-400">Purpose</p>
      </div> */}
        <div className="flex flex-col gap-5 md:gap-10 lg:gap-7">
          <Purpose num={"01"} word={"Purpose"} />
          <h2 className="text-3xl/10 md:text-3xl/8 lg:text-4xl xl:text-5xl font-semibold md:font-bold md:w-1/3 lg:w-4/5 ">
            Atlas: Where Code Meets Motion
          </h2>
          <p className="text-lg">
            The humanoid companion that learns and adapts alongside you.{" "}
          </p>
          <a href="#request">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px #FFAC1C" }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 bg-orange-500 rounded-3xl p-3 justify-center md:w-max md:px-5 text-white border border-white z-50"
            >
              Request Acces <ArrowRight className="w-4 h-4" />
            </motion.button>
          </a>
        </div>
        <img
          src={robotFirst}
          alt="Robot First"
          className="rounded-3xl shadow-xl lg:w-1/2 xl:w-2xl"
        />
      </motion.div>
    </>
  );
};

export default Hero;
