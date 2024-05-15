import { useContext } from "react";
import { AuthContext } from "../../Firbease/FirebaseProvider";
import { useQuery } from "@tanstack/react-query";
import MyBlog from "./MyBlog";


const MyBlogs = () => {
  const {user} =useContext(AuthContext) || {};
  const {data:blogs} =useQuery({
    queryKey:['users'],
    queryFn: async()=>{
      const res = await fetch(`http://localhost:5004/addblogs/${user?.email}`,{credentials:"include"});
      return res.json();
    }
  })
  return (
    <div>
        <div className="p-20">
        <h1 className="text-center text-4xl font-light text-gray-950 "> Explore Your Blogs</h1>
        <p className="text-center  text-2xl text-gray-950 font-bold">Step into You Blogs where a tapestry of perspectives, ideas, and expertise awaits.  </p>

        <div className="p-10 grid grid-cols-2 gap-4">
         {
           blogs?.map(blog=><MyBlog
           key={blog._id}
           blog={blog}
           
           ></MyBlog>)
         }
        </div>

      </div>
    </div>
  );
};

export default MyBlogs;