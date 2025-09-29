import HumanoidSection from "./HumanoidSection";
import Specs from "./Specs";

const Main = () => {
  return <>
    <div className="mx-6 xl:px-10 xl:mx-auto xl:max-w-[1400px] mt-28 flex flex-col gap-5">
      <HumanoidSection/>
      <Specs />
    </div>
  </>;
};

export default Main;
