import { useQuery } from '@tanstack/react-query';
import { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { AuthContext } from '../../Firbease/FirebaseProvider';
import Swal from 'sweetalert2';
import { MdEdit } from "react-icons/md";
import { GoComment } from "react-icons/go";
import axios from 'axios';

const BlogDetails = () => {
  const { user } = useContext(AuthContext) || {};
  // const LoginUserEmail=user.email
  
  const [comments, setComments] = useState([]);
  const { id } = useParams();
  
  console.log(id);
  const { data: blog, isLoading: blogLoading, error: blogError } = useQuery({
    queryKey: ['usersDetails'],  
    queryFn: async () => {
      try {
        const response = await axios.get(`http://localhost:5004/blogdetails/id/${id}`, {
          withCredentials: true 
        });
        return response.data;
      } catch (error) {
        console.error('Error fetching blog data:', error);
        throw error;
      }
    }
  });
  
  console.log(blog);

  useEffect(() => {
    if (blog) {
      fetch(`http://localhost:5004/addcomment/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setComments(data);
        })
        .catch((error) => {
          console.error('Error fetching comments:', error);
        });
    }
  }, [id, blog]);
// console.log(blog);
  const handleComments = (e) => {
    e.preventDefault();
    const form = e.target;
    const UserName = user?.displayName;
    const UserPhoto = user?.photoURL;
    const BlogID = blog?._id;
    const Comment = form.userComment.value;
    const info = { UserName, BlogID, Comment, UserPhoto };

    fetch(`http://localhost:5004/addcomment/${BlogID}`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(info)
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            icon: 'success',
            title: 'Success!',
            showConfirmButton: 'Cool',
            text: 'Comment added successfully'
          });

          // Update comments state after adding the comment
          setComments([...comments, info]);
        }
      });

    form.reset();
  };

  if (blogLoading) return <p>Loading blog...</p>;
  if (blogError) return <p>Error: {blogError.message}</p>;
  const isBlogOwner = user?.email === blog?.writerEmail
  ;
  return (
    <section className="py-6 ">
  
      <div className="grid grid-cols-1 p-5 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
        
    <div className="py-6 md:py-0 md:px-6">
      <img className='w-full' src={blog?.PhotoURL} alt="" />
    </div>
    <div className='p-5 space-y-5'>
      <h1 className="text-3xl font-light md:text-5xl group-hover:underline group-focus:underline text-emerald-800 ">{blog?.Category}</h1>
      <hr className="h-1 text-black bg-black" />
      <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline text-emerald-800">{blog?.Title}</h3>
      <p className="text-gray-900 text-2xl font-extralight">{blog?.ShortDescription}</p>
      <p className="px-4 py-1 bg-green-400 border rounded-lg text-black font-semibold items-center">Owner Name: {blog?.OwnnerName}</p>
    </div>
  </div>

  <div>
    <div className='space-y-2 p-10'>
      <p className="text-5xl text-center">Let's Know More</p>
      <h2 className='p-2 text-3xl'>{blog?.LongDescription}</h2>
    </div>
  </div>

      <div>
        <div className="space-y-4 p-10">
          <h2 className="text-xl font-bold">Comments</h2>
          {comments?.map((comment) => (
            <div key={comment._id} className="border p-4 rounded-lg bg-green-50">
             <div className='flex gap-2 items-center '>
          <img src={comment.UserPhoto} className='w-10 h-10 rounded-full' alt="" />
             <p className="text-xl font font-bold text-green-500">{comment.UserName}</p>
             </div>
              <div className='flex px-10 gap-2 items-center ' >
             <div className=''> 
             <GoComment/>
             </div>

              <p className="text-black text-xl font-extralight">{comment.Comment}</p>
             
              </div>
            </div>
          ))}
        </div>
      </div>
        

      {isBlogOwner ? (
        <div className="p-10 space-y-4">
          <h2 className="text-xl font-bold">Can not comment on own blog</h2>

          <Link to={`/updateBlogs/${id}`}><button className="flex gap-2 px-2 py-2 items-center bg-emerald-700 hover:bg-emerald-800        rounded-md text-white">
         <MdEdit />
         Update 

         </button></Link>
        </div>
       
       

      ) : (  
      <div className="p-10 space-y-4">
        <h2 className="text-xl font-bold">Add Comment</h2>
        <form onSubmit={handleComments}>
          <label className="flex items-center gap-2">
            <textarea name="userComment" cols="120" rows="3" />
          </label>
          <input
            type="submit"
            value="Add Comment"
            className="bg-emerald-500 text-white hover:bg-emerald-700 hover:text-white mt-5 px-2 py-1 rounded-lg text-xl"
          />
        </form>
      </div>
      )}
    </section>
  );
};

export default BlogDetails;
