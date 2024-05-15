import { Outlet } from "react-router-dom";

import Footer from "../Components/Footer/Footer";
import Header from "../Components/Navbar/Header";

// import img2 from '../assets/stacked-waves-haikei.svg'
const Root = () => {
  return (
    <div>
     <div className="min-h-screen bg-cover "  style={{backgroundImage:`url(/stacked-waves-haikei.svg)`}}>
     <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
     </div>
     
     
    </div>
  );
};

export default Root;