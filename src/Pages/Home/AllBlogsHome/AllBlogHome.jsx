import { MdOutlineCategory } from "react-icons/md";
import { IoPersonSharp } from "react-icons/io5";
import {  useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../../Firbease/FirebaseProvider";
import { Link } from "react-router-dom";


const AllBlogHome = ({blog}) => {
  const {user} =useContext(AuthContext) || {};
  const userEmail=user?.email;
    

  const [items,setItem] =useState();

  const {Title,OwnnerName,Category, PhotoURL, LongDescription,ShortDescription,_id}=blog
  
  // console.log(email);
  
  // console.log(blog);
  const modifiedBlog = { ...blog, userEmail };
  
   console.log(modifiedBlog);
  const handleWishList = () =>{

    
    
          
    fetch(`https://nextgen-blogs.vercel.app/wishblogs/${userEmail}`,{
      method: 'POST',
      headers:{
        'content-type' : 'application/json'
      },
      body:JSON.stringify(modifiedBlog)
    })
    .then(res=>res.json())
    .then(data =>{
      console.log(data);
      if(data.insertedId){
        Swal.fire({
          
          icon: "success",
          title: "Success!",
          showConfirmButton: "Cool",
          text:" Added to WishList Successfully"
        });
      }
    })
  }
  return (
<div className="md:p-20 p-5">
<div className="diff aspect-[16/9]">
  <div className="diff-item-1">
    <div className="bg-emerald-600  lg:text-5xl text-black p-4 lg:p-20 lg:space-y-5">
    <div className="flex justify-between">
    <div className="flex items-center gap-2 mb-4 text-xl">
      <MdOutlineCategory />
      <p>{Category}</p>
      </div>
      <div className="flex gap-2 items-center text-xl">
      <IoPersonSharp />
      <p>{OwnnerName}</p>
      </div>

    </div>

    
   <h2 >{Title}</h2>
   <p className="mt-4 mb-8 text-sm">{ShortDescription}</p>
			
    

    </div>
   
  </div>

  <div className="diff-item-2">
    <div className="bg-base-200 text-9xl font-black grid place-content-center">
      <img className="w-full" src={PhotoURL} alt="" />
    </div>
  </div>
  <div className="diff-resizer"></div>
</div>
<Link to={`/blogdetails/id/${_id}`}><button className="px-2 py-2 text-2xl font-bold w-full mt-1 bg-slate-200 text-black rounded-lg hover:bg-slate-300">Read More</button></Link>
<button  onClick={()=>handleWishList()} className="px-2 py-2 text-2xl font-bold w-full mt-1 bg-slate-200 text-black rounded-lg hover:bg-slate-300">Wish List</button>



</div>
  );
};

export default AllBlogHome;