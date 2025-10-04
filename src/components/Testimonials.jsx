import Purpose from "./Purpose";
import TestimonialsCard from "./TestimonialsCard";
import cardOne from "../assets/background-section1.png";
import cardTwo from "../assets/background-section2.png";
import cardThree from "../assets/background-section3.png";
import cardFour from "../assets/bgSection4.jpg";
import { motion, stagger } from "framer-motion";

const comments = [
  {
    id: "c1",
    bg: cardOne,
    comment:
      '"Atlas transformed our production line, handling repetitive tasks while our team focuses on innovation. 30% increase in output within three months."',
    who: "Sarah Chen",
    position: "VP of Operations, Axion Manufacturing",
  },
  {
    id: "c2",
    bg: cardTwo,
    comment:
      '"Implementing Atlas in our fulfillment centers reduced workplace injuries by 40% while improving order accuracy. The learning capabilities are remarkable."',
    who: "Michael Rodriguez",
    position: "Director of Logistics, GlobalShip",
  },
  {
    id: "c3",
    bg: cardThree,
    comment: `"Atlas adapted to our lab protocols faster than any system we've used. It's like having another researcher who never gets tired and maintains perfect precision."`,
    who: "Dr. Amara Patel",
    position: "Lead Scientist, BioAdvance Research",
  },
  {
    id: "c4",
    bg: cardFour,
    comment:
      '"As a mid-size business, we never thought advanced robotics would be accessible to us. Atlas changed that equation entirely with its versatility and ease of deployment."',
    who: "Jason Lee",
    position: "CEO, Innovative Solutions Inc.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.12,
    },
  },
};

const Testimonials = () => {
  return (
    <>
      <article className="flex flex-col gap-5">
        <Purpose num={"04"} word={"Testimonials"} />
        <h2 className="text-2xl font-bold">What others say</h2>
        <motion.div className="grid sm:grid-cols-2 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{once: true, amount: 0.25}}
        >

        {comments.map((item) => (
          <TestimonialsCard key={item.id} item={item} />
        ))}
        </motion.div>
      </article>
    </>
  );
};

export default Testimonials;
