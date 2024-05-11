import { MdOutlineCategory } from "react-icons/md";
import { IoPersonSharp } from "react-icons/io5";


const Allblog = ({blog}) => {
  const {Title,OwnnerName,Category, PhotoURL, LongDescription,ShortDescription}=blog
  return (
   <div className="p-20 ">
    <section className="text-black rounded-xl p-10">
	<div className="">
		<div className=" " >
      <img className="w-full" src={PhotoURL} alt="" />
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
			<button className="px-2 py-2 text-2xl font-bold w-1/2 bg-emerald-700 text-white rounded-lg hover:bg-emerald-800">Read More</button>
		</div>
	</div>
</section>
   </div>
  );
};

export default Allblog;