import Purpose from "./Purpose";
import {motion, stagger} from "framer-motion";
import HumanoidCard from "./HumanoidCard";
import bgSection1 from "../assets/background-section1.png"
import bgSection2 from "../assets/background-section2.png"
import bgSection3 from "../assets/background-section3.png"
import bgSection4 from "../assets/bgSection4.jpg"


const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.18,
            delayChildren: 0.12
        }
    }
};

const cardsData = [
  { id: "c1", bg: bgSection1, title: "Adaptability", text: "Learns tasks and adapts to changes in environment." },
  { id: "c2", bg: bgSection2, title: "Human Interaction", text: "Natural language dialog and expressive gestures." },
  { id: "c3", bg: bgSection3, title: "Safety", text: "Built-in sensors and safety-first motion planning." },
  { id: "c4", bg: bgSection4, title: "Mobility", text: "Robust locomotion for indoor and outdoor tasks." }
];

const HumanoidSection = ()=> {
    return (
        <>
            <section className="mx-6 my-10"> 
                <div className="mb-6 flex flex-col gap-5">
                    <Purpose num={'02'} word={'Humanoid'}/>
                    <h3 className="text-2xl font-bold">Why Humanoid</h3>
                </div>

                <motion.div className="grid sm:grid-cols-2 gap-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.5}}>
                    {cardsData.map(item=>(
                        <HumanoidCard key={item.id} item={item} />
                    ))}
                </motion.div>
            </section>



        </>
    )
}

export default HumanoidSection;