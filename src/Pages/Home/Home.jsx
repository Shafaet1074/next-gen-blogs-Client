import { Carousel } from "flowbite-react";
import Banner from "./Banner/Banner";
import About from "./About/About";
import AllBlogsHome from "./AllBlogsHome/AllBlogsHome";
import FeaturedWriters from "./FeaturedWriter/FeaturedWriters";
import { motion, useScroll } from "framer-motion"
// import img1 from '../../assets/images.png'
// import img2 from '../../assets/colorful-abstract-textured-background-design.jpg'

const Home = () => {
  
  const { scrollYProgress } = useScroll();
  return (
    
   <div>
     {/* <motion.div style={{ scaleX: scrollYProgress }} />   */}
      
      <Banner></Banner>
      <About></About>
      <FeaturedWriters></FeaturedWriters>
      <AllBlogsHome></AllBlogsHome>
      
   
  {/* </motion.div> */}
   </div>
     
    
  );

};

export default Home;