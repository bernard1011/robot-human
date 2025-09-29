import Purpose from "./Purpose";
import textMask from "../assets/text-mask-image.jpg";
import cardOne from "../assets/background-section3.png";
import cardTwo from "../assets/background-section1.png";
import thirdImg from "../assets/sectionThree.jpg";
import { header } from "framer-motion/client";
import { CircleCheck } from "lucide-react";

const Specs = () => {
  return (
    <>
      <div className="flex items-center gap-3">
        <Purpose num={"03"} word={"Specs"} />
        <span className="h-0.5 w-full bg-gray-300"></span>
      </div>
      <div>
        <p
          className="bg-clip-text bg-center text-transparent text-3xl font-semibold tracking-wide max-w-[900px] md:text-4xl lg:text-6xl"
          style={{ backgroundImage: `url(${textMask})` }}
        >
          Atlas works with your team, not instead of it. By handling repetitive
          tasks, improving safety conditions, and learning from every
          interaction, Atlas helps humans focus on what they do best: create,
          solve, and innovate.
        </p>
      </div>
      <section className="flex flex-col gap-5 lg:flex-row lg:justify-center">
        <article className="shadow-lg rounded-2xl overflow-hidden h-[536px] md:w-full">
          <header
            style={{ backgroundImage: `url(${cardOne})` }}
            className="h-48 bg-cover bg-bottom flex items-end p-4"
          >
            <h3 className="text-gray-100 text-2xl font-bold align-middle">
              The details
            </h3>
          </header>
          <div className="p-5">
            <p className="font-bold mb-5">
              Precision engineering meets adaptive intelligence
            </p>
            <ul className="text-sm flex flex-col gap-3">
              <li className="flex gap-5">
                <CircleCheck />
                <span className="bg-gray-100 border border-gray-300 w-full p-2 rounded-md">
                  <strong>Height: </strong>5'8"
                </span>
              </li>
              <li className="flex gap-5">
                <CircleCheck />
                <span className="bg-gray-100 border border-gray-300 w-full p-2 rounded-md">
                  <strong>Capacity: </strong>55lbs
                </span>
              </li>
              <li className="flex gap-5">
                <CircleCheck />
                <span className="bg-gray-100 border border-gray-300 w-full p-2 rounded-md">
                  <strong>Weight: </strong>140lbs
                </span>
              </li>
              <li className="flex gap-5">
                <CircleCheck />
                <span className="bg-gray-100 border border-gray-300 w-full p-2 rounded-md">
                  <strong>Uptime: </strong>6hr
                </span>
              </li>
              <li className="flex gap-5">
                <CircleCheck />
                <span className="bg-gray-100 border border-gray-300 w-full p-2 rounded-md">
                  <strong>Movement:</strong>1.5M/S
                </span>
              </li>
            </ul>
          </div>
        </article>
        <aside className="shadow-lg rounded-2xl overflow-hidden md:h-[536px] md:w-full">
          <header
            style={{ backgroundImage: `url(${cardTwo})` }}
            className=" h-48 bg-cover bg-bottom flex flex-col justify-between items-start p-4"
          >
            <span className="border border-gray-300 rounded-3xl text-sm py-1 px-2 text-gray-300">
              Request a demo
            </span>
            <h3 className="text-gray-100 text-2xl font-bold">
              See it for yourself
            </h3>
          </header>
          <form className="p-5 flex flex-col gap-5">
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="Full name"
              className="border border-gray-300 rounded-xl p-3 focus:outline-gray-400"
            />
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="Email address"
              className="border border-gray-300 rounded-xl p-3 focus:outline-gray-400"
            />
            <input
              id="company"
              name="company"
              type="text"
              placeholder="Company (optional)"
              className="border border-gray-300 rounded-xl p-3 focus:outline-gray-400"
            />
            <button
              type="submit"
              className="bg-orange-500 p-3 rounded-3xl text-gray-100 active:bg-orange-600"
            >
              Request access
            </button>
          </form>
        </aside>
      </section>
      <section className="flex flex-col gap-5 mt-5 items-center">
        <h2 className="text-2xl md:text-3xl font-bold text-center">Experience the Future Today</h2>
        <p className="text-gray-600 text-center md:text-lg">
          Our cutting-edge humanoid robot is designed to transform how we
          interact with technology in everyday environments.
        </p>
        <article className="shadow-lg rounded-2xl overflow-hidden mb-10 max-w-[900px]">
          <img src={thirdImg} alt="robot" className="w-full" />
          <div className="px-5 py-3 flex flex-col gap-3">
          <h3 className="text-xl font-bold">Next Generation Robotics</h3>
          <p className="text-gray-600 md:text-lg">
            Built with precision engineering and sophisticated AI, our robots
            seamlessly integrate into various environments, from homes to
            hospitals, providing assistance and enriching human experiences.
          </p>
          </div>
        </article>
      </section>
    </>
  );
};

export default Specs;
