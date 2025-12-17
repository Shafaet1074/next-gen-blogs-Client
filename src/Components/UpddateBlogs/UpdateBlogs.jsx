import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateBlogs = () => {
  const { id } = useParams();
  const {data:updatedblogs} =useQuery({
    queryKey:['Updateusers'],
    queryFn: async()=>{
      const res = await fetch(`https://nextgen-blogs.vercel.app/updateblogs/id/${id}`,{credentials:'include'});
      return res.json();
    }
  })
  // console.log(updatedblogs);

  const handleUpdate = e =>{
    e.preventDefault();
    const form=e.target
    const Title=form.Title.value;
    const OwnnerName=form.OwnnerName.value;
    const Category=form.Category.value;
    const ShortDescription=form.ShortDescription.value;
    const PhotoURL=form.PhotoURL.value;
    const LongDescription=form.LongDescription.value;
    const OwnerPhotoURL=form.OwnerPhotoURL.value;
  

    
    const Updatedinfo={Title,OwnnerName,Category, PhotoURL, LongDescription,ShortDescription,OwnerPhotoURL}

    fetch(`https://nextgen-blogs.vercel.app/updateblogs/id/${id}`,{
      method:'PUT',
      headers:{
        'content-type' : 'application/json'
      },
      body:JSON.stringify(Updatedinfo)
    })
    .then(res=>res.json())
    .then(data =>{
      // console.log(data);
      if(data.modifiedCount > 0){
        Swal.fire({
          
          icon: "success",
          title: "Success!",
          showConfirmButton: "Cool",
          text:"Blog updated Successfully"
        });
      }
    })
    
  }


  // const {Title,OwnnerName,Category, PhotoURL, LongDescription,ShortDescription,_id,email}=blog
  return (
    <div className='lg:p-20 p-5'>
    <div className=" shadow-2xl border-emerald-800 rounded-lg p-24 space-y-4 ">
  <div className="mb-10"> 
  <h2 className="text-5xl  text-center font-extralight text-green-700 ">Update Blog</h2>
  </div>
   <form onSubmit={handleUpdate}>
   {/* form name and quantity row */}
    <div className="md:flex md:gap-5 mb-8">
    <div className="md:w-1/2">
     <label className="label">
     <span className="label-text text-xl">Title </span>
     </label>
    <label className="flex items-center gap-2">

<input type="text" name="Title" className="input input-bordered w-full " placeholder="Title" defaultValue={updatedblogs?.Title} />
</label>
    </div>
    <div className="md:w-1/2">
     <label className="label">
     <span className="label-text text-xl">Ownner Name </span>
     </label>
    <label className="flex items-center gap-2">

<input type="text" name="OwnnerName" className="input input-bordered w-full "   defaultValue={updatedblogs?.OwnnerName}    placeholder="Ownner Name" />
</label>
    </div>
    </div>



     {/* form category and details row */}
     <div className="md:flex md:gap-5 mb-8">
    <div className="md:w-1/2">
     <label className="label">
     <span className="label-text text-xl">Category</span>
     </label>
    <label className="flex items-center gap-2">
   


<input list="Category" name="Category" className="input input-bordered w-full " placeholder="Category" defaultValue={updatedblogs?.Category} />
<datalist id="Category">
<option value="Technology"></option>
<option value="Entertainment"></option>
<option value="Sports"></option>
<option value="InterNational Affairs"></option>

</datalist>
</label>
    </div>
    <div className="md:w-1/2">
     <label className="label">
     <span className="label-text text-xl">Short Description</span>
     </label>
    <label className="flex items-center gap-2">

<input type="text" name="ShortDescription" className="input input-bordered w-full " placeholder="Short Description" defaultValue={updatedblogs?.ShortDescription} />
</label>
    </div>
    
    </div>
    <div className="md:w-full">
     <label className="label">
     <span className="label-text text-xl">Owner PhotoURL</span>
     </label>
    <label className="flex items-center gap-2">

<input type="text" name="OwnerPhotoURL" className="input input-bordered w-full " placeholder="Owner PhotoURL"  defaultValue={updatedblogs?.OwnerPhotoURL}/>
</label>
    </div>

    


     {/* form  photo url row */}
     <div className="mb-8">
    <div className="md:w-full">
     <label className="label">
     <span className="label-text text-xl"> Photo URL </span>
     </label>
    <label className="flex items-center gap-2">

<input type="text" name="PhotoURL" className="input input-bordered w-full " placeholder="Photo URL" defaultValue={updatedblogs?.PhotoURL} />
</label>
    </div>
   
    </div>

    <div className="mb-8">
    <div className="md:w-full">
     <label className="label">
     <span className="label-text text-xl">Long Description</span>
     </label>
    <label className="flex items-center gap-2">

{/* <input type="text" name="ShortDescription" className="input input-bordered w-full " placeholder="Short Description" /> */}
<textarea name="LongDescription" id="" cols="70"  rows="5" defaultValue={updatedblogs?.LongDescription}></textarea>
</label>
    </div>
   
    </div>
    
    
    <input type="submit" value="Update Blogs"  className="btn btn-block bg-emerald-500 text-white hover:bg-emerald-700 hover:text-white mt-5"/>

   </form>
 </div>
  </div>
  );
};

export default UpdateBlogs;