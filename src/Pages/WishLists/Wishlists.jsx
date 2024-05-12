import { useContext } from "react";
import { AuthContext } from "../../Firbease/FirebaseProvider";
import { useQuery } from "@tanstack/react-query";
import img from '../../assets/Wishlist-removebg-preview.png'
import Wishlist from "./Wishlist";


const Wishlists = () => {
  const {user} =useContext(AuthContext) || {};
  console.log(user);
  const {data:blogs,isLoading, isError, refetch } =useQuery({
    queryKey:['users'],
    queryFn: async()=>{
      const res = await fetch(`http://localhost:5004/wishblogs/${user?.email}`);
      return res.json();
    },
    refetchInterval: 1000,
  })
 console.log(blogs);
  return (
    <div className="space-y-5">
     <img className="mx-auto mt-10 " src={img} alt="" />
      <div className="">
        <h1 className="text-center text-4xl font-light text-gray-950 "> Where Dreams Take Shape: Explore Your Wishlist</h1>
        <p className="text-center  text-2xl text-gray-950 font-bold">Step into a realm where aspirations find expression and dreams begin to unfold.  </p>

        <div className="md:grid  md:grid-cols-2 ">
          {blogs?.map(blog=><Wishlist
           key={blog._id}
           blog={blog}
           
          
          ></Wishlist>)}
        </div>

      </div>
    </div>
  );
};

export default Wishlists;