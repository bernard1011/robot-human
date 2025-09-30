import HumanoidSection from "./HumanoidSection";
import Specs from "./Specs";
import Features from "./Features";


const Main = () => {
  return <>
    <div className="mx-6 xl:px-10 xl:mx-auto xl:max-w-[1400px] mt-28 lg:mb-16 flex flex-col gap-5">
      <HumanoidSection/>
      <Specs />
    </div>
    <section className="bg-gray-100">
      <div className="mx-6 xl:px-10 xl:mx-auto xl:max-w-[1400px] flex flex-col gap-5 pt-8 pb-8 lg:pt-24 lg:pb-24">
          <Features/>
      </div>
    </section>
  </>;
};

export default Main;
