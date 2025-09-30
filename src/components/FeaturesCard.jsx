import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

const FeaturesCard = ({ item }) => {
  return (
    <motion.div
      className="relative bg-white rounded-xl shadow-lg p-6 flex flex-col items-start gap-5 transition-shadow hover:shadow-2xl delay-75 duration-500 before:content-[''] before:absolute before:inset-0 before:rounded-xl
             before:bg-gradient-to-tl before:from-orange-400 before:to-white
             before:opacity-0 hover:before:opacity-15 before:transition-opacity before:duration-500"
      variants={cardVariants}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <span className="text-orange-400 bg-orange-100 p-3 rounded-3xl">
        {item.label}
      </span>
      <h4 className="text-lg font-semibold">{item.title}</h4>
      <p className="text-gray-600">{item.text}</p>
    </motion.div>
  );
};

export default FeaturesCard;

// 

