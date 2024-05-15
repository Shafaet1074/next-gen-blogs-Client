import { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Wishlist = ({ blog }) => {
  const { Title, OwnnerName, Category, PhotoURL, LongDescription, ShortDescription, _id, email } = blog;
  const [deleted, setDeleted] = useState(false);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://nextgen-blogs.vercel.app/delete/${id}`, {
          method: "DELETE",
        })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            Swal.fire(
              "Deleted!",
              "Your coffee has been deleted.",
              "success"
            );
            // Update state to indicate deletion
            setDeleted(true);
          }
        })
        .catch((error) => {
          console.error("Error deleting:", error);
        });
      }
    });
  };

  // Render null if the item is deleted
  if (deleted) {
    return null;
  }

  return (
    <div>
      <div className="p-5 mx-auto sm:p-10 md:p-16 dark:bg-gray-100 dark:text-gray-800">
        <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
          <img src={PhotoURL} alt="" className="w-full h-60 sm:h-96 dark:bg-gray-500" />
          <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md bg-green-400">
            <div className="space-y-2">
              <a rel="noopener noreferrer" href="#" className="inline-block text-2xl font-semibold sm:text-3xl">{Title}</a>
              <p className="text-xs dark:text-gray-600">By
                <a rel="noopener noreferrer" href="#" className="text-xs hover:underline">{OwnnerName}</a>
              </p>
            </div>
            <div className="dark:text-gray-800">
              <p>{ShortDescription}</p>
            </div>
            <div className="flex gap-2">
              <button onClick={() => handleDelete(_id)} className="px-2 py-2 text-2xl font-bold w-1/2 bg-emerald-700 text-white rounded-lg hover:bg-emerald-800">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
