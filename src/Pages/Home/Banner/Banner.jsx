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
    // <div className="flex flex-col justify-center text-center items-center md:pt-72 pt-14 md:gap-6 gap-2">
    //   <motion.div initial="hidden" animate="show" variants={fadeInUpAnimation}>
    //     <motion.h2
    //       variants={fadeInUpAnimation}
    //       className="text-green-950 font-extrabold lg:text-5xl text-2xl mt-4"
    //     >
    //       Welcome to Our Next-Gen Blog Experience
    //     </motion.h2>

    //     <motion.p
    //       variants={fadeInUpAnimation}
    //       className="md:text-2xl font-black text-green-700 mt-4"
    //     >
    //       Dive into captivating articles, engage with our vibrant community, and unlock the power of learning like never before. Discover a world of insights.
    //     </motion.p>

    //     <motion.button
    //       variants={fadeInUpAnimation}
    //       className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mt-4"
    //     >
    //       Sign Up Now
    //     </motion.button>
    //   </motion.div>
    // </div>
    <div>
      <div className="carousel w-full">
  <div id="item1" className="carousel-item w-full">
    <img src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg" className="w-full" />
  </div> 
  <div id="item2" className="carousel-item w-full">
    <img src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg" className="w-full" />
  </div> 
  <div id="item3" className="carousel-item w-full">
    <img src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg" className="w-full" />
  </div> 
  <div id="item4" className="carousel-item w-full">
    <img src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="w-full" />
  </div>
</div> 
<div className="flex justify-center w-full py-2 gap-2">
  <a href="#item1" className="btn btn-xs">1</a> 
  <a href="#item2" className="btn btn-xs">2</a> 
  <a href="#item3" className="btn btn-xs">3</a> 
  <a href="#item4" className="btn btn-xs">4</a>
</div>
    </div>
  );
};

export default Banner;
