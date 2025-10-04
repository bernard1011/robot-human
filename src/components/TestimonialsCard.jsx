import {motion} from "framer-motion"

const cardVariants = {
    hidden: {opacity: 0, y:30, scale:0.98},
    visible: {opacity: 1, y:0, scale:1}
}

const TestimonialsCard = ({item}) => {
    return(<>
        <motion.div className="bg-cover bg-center text-white p-7 flex flex-col justify-between gap-7 rounded-xl relative  before:absolute before:block before:bg-gray-50 before:w-16 before:h-16 lg:before:w-24 lg:before:h-24 before:top-0 before:right-0 " style={{backgroundImage: `url(${item.bg})`}}
            variants={cardVariants}
            transition={{duration: 0.75, ease:[0.22, 1, 0.36, 1]}}
            whileHover={{ y: -12 }}
        >
                <p className="font-semibold text-xl lg:text-2xl lg:font-normal pr-11 lg:pr-24">
                    {item.comment}
                </p>
                <div>
                    <h3 className="text-white text-lg font-semibold">{item.who}</h3>
                    <p className="text-gray-300">{item.position}</p>
                </div>
        </motion.div>
    </>)
};

export default TestimonialsCard