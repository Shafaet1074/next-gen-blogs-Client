import { motion } from "framer-motion";

const fadeInUpAnimation = {
  hidden: {
    opacity: 0,
    y: 500,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.5,
      duration: 2,
    },
  },
};

const Banner = () => {
  return (
    <div className="flex flex-col justify-center text-center items-center md:pt-72 pt-14 md:gap-6 gap-2">
      <motion.div initial="hidden" animate="show" variants={fadeInUpAnimation}>
        <motion.h2
          variants={fadeInUpAnimation}
          className="text-green-950 font-extrabold lg:text-5xl text-2xl mt-4"
        >
          Welcome to Our Next-Gen Blog Experience
        </motion.h2>

        <motion.p
          variants={fadeInUpAnimation}
          className="md:text-2xl font-black text-green-700 mt-4"
        >
          Dive into captivating articles, engage with our vibrant community, and unlock the power of learning like never before. Discover a world of insights.
        </motion.p>

        <motion.button
          variants={fadeInUpAnimation}
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mt-4"
        >
          Sign Up Now
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Banner;
