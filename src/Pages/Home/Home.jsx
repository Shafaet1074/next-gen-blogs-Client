import { Carousel } from "flowbite-react";
import Banner from "./Banner/Banner";
import About from "./About/About";
import AllBlogsHome from "./AllBlogsHome/AllBlogsHome";
// import img1 from '../../assets/images.png'
// import img2 from '../../assets/colorful-abstract-textured-background-design.jpg'

const Home = () => {
  return (
    
     <div className="">
      
       <Banner></Banner>
       <About></About>
       <AllBlogsHome></AllBlogsHome>
    
     </div>
    
  );
};

export default Home;