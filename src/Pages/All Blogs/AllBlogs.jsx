import { useLoaderData } from "react-router-dom";
import img from '../../assets/blogALif.png'
import Allblog from "./Allblog";


const AllBlogs = () => {
  const blogs =useLoaderData();
  return (
    <div className="space-y-5">
      <img className="mx-auto mt-10 " src={img} alt="" />
      <div className="">
        <h1 className="text-center text-4xl font-light text-gray-950 "> Explore the World of Ideas: AllBlogs</h1>
        <p className="text-center  text-2xl text-gray-950 font-bold">Step into our AllBlogs section, where a tapestry of perspectives, ideas, and expertise awaits.  </p>

      </div>
      <div className="md:grid md:grid-cols-2 md:gap-5">
    {
      blogs?.map(blog=><Allblog
      key={blog._id}
      blog={blog}
      
      ></Allblog>)
    }
   </div>
    </div>

  );
};

export default AllBlogs;