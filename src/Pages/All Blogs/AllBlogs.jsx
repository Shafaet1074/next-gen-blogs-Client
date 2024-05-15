import { Link, useLoaderData } from "react-router-dom";
import img from '../../assets/blogALif.png';
import { useQuery } from "@tanstack/react-query";
import { MdOutlineCategory } from "react-icons/md";
import { IoPersonSharp } from "react-icons/io5";
import { useContext, useState } from "react";
import { AuthContext } from "../../Firbease/FirebaseProvider";
import Swal from "sweetalert2";

const AllBlogs = () => {
  const { user } = useContext(AuthContext) || {};
  const [searchTerm, setSearchTerm] = useState('');
  
  const { data: blogs } = useQuery({
    queryKey: ['usersAllblogs'],
    queryFn: async () => {
      const res = await fetch('https://nextgen-blogs.vercel.app/addblogs');
      return res.json();
    }
  });

  const filteredBlogs = blogs?.filter(blog => {
    return blog.Title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const handleWishList = (userEmail, blog) => {
    fetch(`https://nextgen-blogs.vercel.app/wishblogs/${userEmail}`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(blog)
    })
    .then(res => res.json())
    .then(data => {
      if (data.insertedId) {
        Swal.fire({
          icon: "success",
          title: "Success!",
          showConfirmButton: "Cool",
          text: " Added to WishList Successfully"
        });
      }
    });
  }

  return (
    <div className="space-y-5 px-4 md:px-0">
      <img className="mx-auto mt-8 md:mt-20 w-full md:max-w-lg lg:max-w-xl" src={img} alt="" />
      <div className="">
        <h1 className="text-center text-4xl font-light text-gray-950">Explore the World of Ideas: AllBlogs</h1>
        <p className="text-center text-2xl text-gray-950 font-bold">Step into our AllBlogs section, where a tapestry of perspectives, ideas, and expertise awaits.</p>
      </div>
      <div className="p-4">
        <input 
          type="text" 
          placeholder="Search By Title Name" 
          className="input input-bordered input-success w-full" 
          value={searchTerm} 
          onChange={(e) => setSearchTerm(e.target.value)} 
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredBlogs?.map(blog => (
          <div className="p-4" key={blog._id}>
            <section className="text-black rounded-xl p-6 md:p-10">
              <div className="">
                <div className="">
                  <img className="w-full" src={blog.PhotoURL} alt="" />
                </div>
                <div className="flex flex-col p-4 md:p-6 bg-emerald-400 hover:bg-emerald-500">
                  <div className="md:flex  justify-between space-y-2">
                    <div className="flex items-center gap-2 text-lg">
                      <MdOutlineCategory />
                      <p>{blog.Category}</p>
                    </div>
                    <div className="flex items-center gap-2 text-lg">
                      <IoPersonSharp />
                      <p>{blog.OwnnerName}</p>
                    </div>
                  </div>
                  <h2 className="text-xl md:text-2xl font-semibold leading-tight">{blog.Title}</h2>
                  <p className="mt-2 md:mt-4 mb-4 text-sm md:text-base">{blog.ShortDescription}</p>
                  <div className="flex flex-col md:flex-row gap-2">
                    <Link to={`/blogdetails/id/${blog._id}`}>
                      <button className="px-2 py-2 rounded-lg bg-emerald-700 w-full md:w-auto text-white hover:bg-emerald-800">Read More</button>
                    </Link>
                    <button onClick={() => handleWishList(user?.email, blog)} className="px-2 py-2 rounded-lg bg-emerald-700 w-full md:w-auto text-white hover:bg-emerald-800">Wish List</button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllBlogs;
