import { MdOutlineCategory } from "react-icons/md";
import { IoPersonSharp } from "react-icons/io5";
import { SiWish } from "react-icons/si";
import { MdEdit } from "react-icons/md";
import { SiTeamviewer } from "react-icons/si";
import Swal from "sweetalert2";
const MyBlog = ({blog}) => {

  
  const {Title,OwnnerName,Category, PhotoURL, LongDescription,ShortDescription,_id,email}=blog

  console.log(blog);
  
  const handleWishList=(email)=>{
    fetch(`http://localhost:5004/wishblogs`,{
      method: 'POST',
      headers:{
        'content-type' : 'application/json'
      },
      body:JSON.stringify(blog)
    })
    .then(res=>res.json())
    .then(data =>{
      console.log(data);
      if(data.insertedId){
        Swal.fire({
          
          icon: "success",
          title: "Success!",
          showConfirmButton: "Cool",
          text:"Blogs Added Successfully"
        });
      }
    })
  }


  

  return (
    <div className="flex">
      <div className="w-4/5">
	<div className="container  w-full px-10 py-6 mx-auto rounded-lg shadow-sm bg-green-100 ">
		<div className="flex items-center justify-between">
			<div className="flex items-center gap-2 mb-4 text-xl">
      <MdOutlineCategory />
      <p>{Category}</p>
      </div>
      <div className="flex gap-2 items-center text-xl">
      <IoPersonSharp />
      <p>{OwnnerName}</p>
      </div>
		
		</div>
		<div className="mt-3">
			<a rel="noopener noreferrer" href="#" className="text-2xl font-bold hover:underline">{Title}</a>
			<p className="mt-2">{ShortDescription}</p>
		</div>
	
	</div>
</div>
<div className="w-1/5 bg-green-400 py-10 px-4 space-y-6 flex flex-col justify-center font-extralight text-pretty">
 <button onClick={()=>handleWishList(email)} className="flex gap-2 px-2 py-2 items-center bg-emerald-700 hover:bg-emerald-800   rounded-md text-white">
 <SiWish />
  AddWishLists

 </button>
 <button className="flex gap-2 px-2 py-2 items-center bg-emerald-700 hover:bg-emerald-800        rounded-md text-white">
 <MdEdit />
  Update 

 </button>
 <button className="flex gap-2 px-2 py-2 items-center bg-emerald-700 hover:bg-emerald-800        rounded-md text-white">
 <SiTeamviewer />
  View Details

 </button>
</div>
    </div>
  );
};

export default MyBlog;