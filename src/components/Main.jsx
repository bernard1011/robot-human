import HumanoidSection from "./HumanoidSection";
import Specs from "./Specs";
import Features from "./Features";
import Testimonials from "./Testimonials";


const Main = () => {
  return <>
    <div className="mx-6 xl:px-10 xl:mx-auto xl:max-w-[1400px] mt-28 lg:mb-16 flex flex-col gap-5">
      <HumanoidSection/>
      <Specs />
    </div>
    <section className="bg-gray-100" id="about">
      <div className="mx-6 xl:px-10 xl:mx-auto xl:max-w-[1400px] flex flex-col gap-5 pt-8 pb-8 lg:pt-24 lg:pb-24">
          <Features/>
      </div>
    </section>
    <div className="mx-6 xl:px-10 xl:mx-auto xl:max-w-[1400px] mt-9 lg:mb-16">
          <Testimonials />
    </div>
  </>;
};

export default Main;
