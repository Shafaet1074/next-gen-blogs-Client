

const AddBlogs = () => {
  return (
    <div className='lg:p-20 p-5'>
    <div className=" shadow-2xl border-emerald-800 rounded-lg p-24 space-y-4 ">
  <div className="mb-10"> 
  <h2 className="text-5xl  text-center font-extralight text-green-700 ">Add Blogs</h2>
  </div>
   <form>
   {/* form name and quantity row */}
    <div className="md:flex md:gap-5 mb-8">
    <div className="md:w-1/2">
     <label className="label">
     <span className="label-text text-xl">Painting Name </span>
     </label>
    <label className="flex items-center gap-2">

<input type="text" name="paintingname" className="input input-bordered w-full " placeholder="PaintingName" />
</label>
    </div>
    <div className="md:w-1/2">
     <label className="label">
     <span className="label-text text-xl">Subcategory Name </span>
     </label>
    <label className="flex items-center gap-2">

<input type="text" name="SubcategoryName" className="input input-bordered w-full " placeholder="Subcategory Name" />
</label>
    </div>
    </div>

     {/* form supplier and taste row */}
     <div className="md:flex md:gap-5 mb-8">
    <div className="md:w-1/2">
     <label className="label">
     <span className="label-text text-xl">Price</span>
     </label>
    <label className="flex items-center gap-2">

<input type="text" name="price" className="input input-bordered w-full " placeholder="Price" />
</label>
    </div>
    <div className="md:w-1/2">
     <label className="label">
     <span className="label-text text-xl">Rating</span>
     </label>
    <label className="flex items-center gap-2">

<input type="text" name="Rating" className="input input-bordered w-full " placeholder="Rating" />
</label>
    </div>
    </div>

     {/* form category and details row */}
     <div className="md:flex md:gap-5 mb-8">
    <div className="md:w-1/2">
     <label className="label">
     <span className="label-text text-xl">Customizatin</span>
     </label>
    <label className="flex items-center gap-2">
   


<input list="Customization" name="Customization" className="input input-bordered w-full " placeholder="Customization" />
<datalist id="Customization">
<option value="Yes"></option>
<option value="No"></option>

</datalist>
</label>
    </div>
    <div className="md:w-1/2">
     <label className="label">
     <span className="label-text text-xl">Processing Time</span>
     </label>
    <label className="flex items-center gap-2">

<input type="text" name="ProcessingTime" className="input input-bordered w-full " placeholder="Processing Time" />
</label>
    </div>
    </div>


     {/* form  photo url row */}
     <div className="mb-8">
    <div className="md:w-full">
     <label className="label">
     <span className="label-text text-xl">Photo URL </span>
     </label>
    <label className="flex items-center gap-2">

<input type="text" name="photo" className="input input-bordered w-full " placeholder="Photo URL" />
</label>
    </div>
   
    </div>

    <div className="mb-8">
    <div className="md:w-full">
     <label className="label">
     <span className="label-text text-xl">Short Description</span>
     </label>
    <label className="flex items-center gap-2">

{/* <input type="text" name="ShortDescription" className="input input-bordered w-full " placeholder="Short Description" /> */}
<textarea name="ShortDescription" id="" cols="70" rows="5"></textarea>
</label>
    </div>
   
    </div>
    
    
    <input type="submit" value="Add Paintings"  className="btn btn-block bg-emerald-500 text-white hover:bg-emerald-700 hover:text-white mt-5"/>

   </form>
 </div>
  </div>
  );
};

export default AddBlogs;