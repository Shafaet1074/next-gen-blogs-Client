import { useContext, useEffect, useState } from "react";
import AllBlogHome from "./AllBlogHome";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../../Firbease/FirebaseProvider";


const AllBlogsHome = () => {
  // const [blogs,setBlogs]=useState([])
  const {user} =useContext(AuthContext) || {};
  // useEffect(() =>{
  //   fetch('http://localhost:5004/addblogs')
  //   .then(res=>res.json())
  //   .then(data=>setBlogs(data))
    
  // },[])
  const {data:blogs} =useQuery({
    queryKey:['users'],
    queryFn: async()=>{
      const res = await fetch('http://localhost:5004/addblogs');
      return res.json();
    }
  })



 
  
  return (
    <div className="space-y-5">
    <h1 className="text-center text-4xl font-light text-gray-950 "> Explore the World of Ideas: AllBlogs</h1>
    <p className="text-center  text-2xl text-gray-950 font-bold">Step into our AllBlogs section, where a tapestry of perspectives, ideas, and expertise awaits.  </p>
    <div className="md:grid md:grid-cols-2 md:gap-4 grid grid-cols-1 gap-4">
      {
        blogs?.slice(0,6)?.map(blog=><AllBlogHome
        key={blog._id}
        blog={blog}
        email={user?.email}
        
        ></AllBlogHome>)
      }

    </div>

  </div>
  );
};

export default AllBlogsHome;