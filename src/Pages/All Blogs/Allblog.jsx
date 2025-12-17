import { MdOutlineCategory } from "react-icons/md";
import { IoPersonSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../Firbease/FirebaseProvider";
import Swal from "sweetalert2";


const Allblog = ({blog}) => {
  const {Title,OwnnerName,Category, PhotoURL, LongDescription,ShortDescription,_id}=blog
  const {user} =useContext(AuthContext) || {};
  const userEmail=user?.email;
  // const [items,setItem] =useState();
  const modifiedBlog = { ...blog, userEmail };
  const handleWishList = (userEmail) =>{

    
    
          
    fetch(`https://nextgen-blogs.vercel.app/wishblogs/${userEmail}`,{
      method: 'POST',
      headers:{
        'content-type' : 'application/json'
      },
      body:JSON.stringify(modifiedBlog)
    })
    .then(res=>res.json())
    .then(data =>{
      // console.log(data);
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
   <div className="md:p-20 ">
        

      
    <section className="text-black rounded-xl p-10">
	<div className="">
		<div className=" " >
      <img className="md:w-full" src={PhotoURL} alt="" />
    </div>
		<div className="flex flex-col w-full p-6  bg-emerald-400 hover:bg-emerald-500 lg:p-10  md:p-8 ">
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
			<h2 className="text-3xl font-semibold leading-none">{Title}</h2>
			<p className="mt-4 mb-8 text-sm">{ShortDescription}</p>
		<div className="flex flex-col gap-2">
    <Link to={`/blogdetails/id/${_id}`}>	<button className="px-2 py-2 text-2xl font-bold w-1/2 bg-emerald-700 text-white rounded-lg hover:bg-emerald-800">Read More</button></Link>
    <button  onClick={()=>handleWishList(userEmail)}  className="px-2 py-2 text-2xl font-bold w-1/2 bg-emerald-700 text-white rounded-lg hover:bg-emerald-800">Wish List</button>
    </div>
			
		</div>
	</div>
</section>
   </div>
  );
};

export default Allblog;