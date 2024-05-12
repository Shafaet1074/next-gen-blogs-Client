
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

const BlogDetails = () => {
  const{id}=useParams();
  console.log(id);
  const {data:blog} =useQuery({
    queryKey:['users'],
    queryFn: async()=>{
      const res = await fetch(`http://localhost:5004/addblogs/${id}`);
      return res.json();
    }
    
  })
  console.log(blog);
  return (
    <div>
      <h2>This is {blog.Title}</h2>
    </div>
  );
};

export default BlogDetails;