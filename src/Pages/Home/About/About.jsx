import { motion } from "framer-motion";
import person from '../../../assets/pexels-tranmautritam-245032.jpg';
import parts from '../../../assets/pexels-pixabay-262508.jpg';

const About = () => {
  const fadeInAnimation = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.5 } },
  };

  const slideRightAnimation = {
    hidden: { x: '100%' }, // Ensure correct direction
    show: { x: 0, transition: { duration: 2, ease: 'easeOut' } },
  };

  return (
    <div className="about-wrapper"> {/* Descriptive wrapper class */}
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <motion.div
            className="image-container lg:w-1/2 relative"
            variants={fadeInAnimation}
            initial="hidden"
            animate="show"
          >
            <motion.img src={person} className="w-3/4 rounded-lg shadow-2xl" />
            <motion.img
              src={parts}
              className="w-1/2 absolute right-0 top-1/2 rounded-lg border-8 border-white shadow-2xl"
              variants={slideRightAnimation}
            /> {/* Use correct positioning classes */}
          </motion.div>
          <motion.div
            className="text-container lg:w-1/2 space-y-5 p-4"
            variants={fadeInAnimation}
            initial="hidden"
            animate="show"
          >
            <motion.h3 className="text-3xl text-green-800 font-extrabold">
              About Us
            </motion.h3> {/* Ensured closing tag */}
            <motion.h1 className="text-5xl font-bold">
              Crafting Connections, Inspiring Minds.
              </motion.h1>

            <motion.p className="py-6">
              Embark on a journey through the heart of <span className="gradient-text">NextGenBlogs</span>. We started with a vision and a passion for knowledge, and today, we stand as a beacon of inspiration in the digital landscape.
            </motion.p>

            {/* Added a title for better organization */}
            <motion.h4 className="text-2xl font-semibold text-gray-800 mb-2">
              Our Mission
              </motion.h4>

            <motion.p className="py-6">
              With every article, every interaction, we strive to ignite curiosity, spark conversations, and foster a community bound by a shared love for learning. Join us as we navigate the realms of knowledge and imagination, together shaping a future rich in insight and possibility.
            </motion.p>
            <motion.button className="btn btn-accent">Join Us</motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;