import { MdOutlineCategory } from "react-icons/md";
import { IoPersonSharp } from "react-icons/io5";
import { SiWish } from "react-icons/si";
import { MdEdit } from "react-icons/md";
import { SiTeamviewer } from "react-icons/si";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const MyBlog = ({ blog }) => {
  const { Title, OwnnerName, Category, PhotoURL, LongDescription, ShortDescription, _id, email } = blog;

  return (
    <div className="md:flex">
      <div className="md:w-4/5">
        <div className="container md:w-full w-2/4 md:px-10 md:py-6 md:mx-auto rounded-lg shadow-sm bg-green-100">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center gap-2 mb-2 md:mb-0 md:text-xl">
              <MdOutlineCategory />
              <p>{Category}</p>
            </div>
            <div className="flex gap-2 items-center text-lg md:text-xl">
              <IoPersonSharp />
              <p>{OwnnerName}</p>
            </div>
          </div>
          <div className="mt-3">
            <a rel="noopener noreferrer" href="#" className="text-xl font-bold hover:underline">{Title}</a>
            <p className="mt-2">{ShortDescription}</p>
          </div>
        </div>
      </div>
      <div className="md:w-1/5 bg-green-400 md:py-10 md:px-4 md:space-y-6 flex flex-col justify-center font-extralight text-pretty">
        <Link to={`/updateBlogs/${_id}`}>
          <button className="flex gap-2 px-2 py-2 items-center bg-emerald-700 hover:bg-emerald-800 rounded-md text-white">
            <MdEdit />
            Update
          </button>
        </Link>
        <Link to={`/addblogs/id/${_id}`}>
          <button className="flex gap-2 px-2 py-2 items-center bg-emerald-700 hover:bg-emerald-800 rounded-md text-white">
            <SiTeamviewer />
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MyBlog;
