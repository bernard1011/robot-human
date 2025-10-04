import Purpose from "./Purpose";
import card from "../assets/text-mask-image.jpg"

const Footer = () => {
  return (
    <>
      <section className="mx-6 xl:px-10 xl:mx-auto xl:max-w-[1400px] mt-28 mb-8 lg:mb-16 flex flex-col gap-28 md:gap-52">
        <article className="flex flex-col gap-5">
          <Purpose num={"05"} word={"Newsletter"} />
          <h2 className="text-4xl font-bold">Subscribe to the newsletter</h2>
          <p className="text-gray-600 text-xl">
            Be first to hear about breakthroughs, partnerships, and deployment
            opportunities
          </p>
          <form id="emailForm" className="flex flex-col items-start gap-5 md:flex-row md:gap-7">
            <input type="email" name="email" placeholder="Email address" required className="border border-gray-300 focus:outline-orange-500 p-3 rounded-3xl md:w-full md:p-5 md:rounded-4xl"/>
            <button type="submit" className="bg-orange-500 text-white py-3 px-10 rounded-3xl active:bg-orange-600 md:py-5 md:rounded-4xl">Submit</button>
          </form>
        </article>
        <article className="text-center flex flex-col gap-7">
            <a href="https://preview--pulse-robot-template-48377.lovable.app/" target="_blank">
            <div style={{backgroundImage: `url(${card})`}} className="relative w-full h-96 bg-cover bg-center overflow-hidden flex items-center text-3xl md:text-7xl text-gray-100 justify-center rounded-3xl before:bg-gray-50 before:w-full before:h-11 before:absolute before:bottom-0">
                    <p className="font-bitcount">MY COPY OF PULSE ROBOT</p>
            </div>
            </a>
            <div>
            <a href="https://github.com/bernard1011" target="_blank" className="text-xl bg-orange-300 border border-orange-600 text-orange-600 py-2 px-6 rounded-3xl">GitHub</a>
            </div>
        </article>
      </section>
    </>
  );
};

export default Footer;
