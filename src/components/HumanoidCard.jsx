import {motion, scale} from "framer-motion";

const cardVariants = {
    hidden: {opacity: 0, y:30, scale: 0.98},
    visible: {opacity:1, y:0, scale: 1}
};


const HumanoidCard = ({item}) => {
    return (
        <motion.div className="rounded-xl shadow-xl p-12"
        variants={cardVariants}
        transition={{duration: 0.75, ease:[0.22, 1, 0.36, 1]}}
        style={{backgroundImage: `url(${item.bg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}
        >
            <h4 className="text-xl text-white font-semibold mb-2">{item.title}</h4>
            <p className="text-lg text-white">{item.text}</p>
        </motion.div>
    )
}

export default HumanoidCard;
