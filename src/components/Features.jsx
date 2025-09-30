import Purpose from "./Purpose";
import FeaturesCard from "./FeaturesCard";
import { motion} from "framer-motion";
import { BrainCircuit, File, Bot, Box, ShieldX, Shapes } from "lucide-react";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.12,
    },
  },
};

const cardsData = [
  {
    id: "f1",
    label: <BrainCircuit />,
    title: "Adaptive Learning",
    text: "Atlas learns from your interactions, continuously improving its responses and actions to better serve your needs.",
  },
  {
    id: "f2",
    label: <File />,
    title: "Natural Interaction",
    text: "Communicate using natural language and gestures. Atlas understands context and responds appropriately.",
  },
  {
    id: "f3",
    label: <Bot />,
    title: "Precise Movement",
    text: "Advanced motorized joints provide fluid, human-like movement with exceptional balance and coordination.",
  },
  {
    id: "f4",
    label: <Box />,
    title: "Spatial Awareness",
    text: "Advanced sensors and mapping technology allow Atlas to navigate complex environments with ease.",
  },
  {
    id: "f5",
    label: <ShieldX />,
    title: "Enhanced Security",
    text: "Built-in protocols protect your data and privacy, while physical safeguards ensure safe operation.",
  },
  {
    id: "f6",
    label: <Shapes />,
    title: "Task Assistance",
    text: "From simple reminders to complex multi-step tasks, Atlas can assist with a wide range of activities.",
  },
];

const Features = () => {
  return (
    <>
      <article className="flex flex-col gap-5 items-center text-center">
        <Purpose num={""} word={"Features"} />
        <h2 className="text-2xl font-bold">
          Advanced Intelligence, Human-Like Intuition
        </h2>
        <p className="text-gray-600">
          Built with cutting-edge technology to understand, learn, and adapt to
          your unique needs.
        </p>
      </article>
      <motion.div
        className="grid sm:grid-cols-2 md:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
      >
        {cardsData.map((item) => (
          <FeaturesCard key={item.id} item={item} />
        ))}
      </motion.div>
    </>
  );
};

export default Features;
