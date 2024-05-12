

const Wishlist = ({blog}) => {
  const {Title,OwnnerName,Category, PhotoURL, LongDescription,ShortDescription,_id,email}=blog
  

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
      <button className="px-2 py-2 text-2xl font-bold w-1/2 bg-emerald-700 text-white rounded-lg hover:bg-emerald-800">Read More</button>
      <button className="px-2 py-2 text-2xl font-bold w-1/2 bg-emerald-700 text-white rounded-lg hover:bg-emerald-800">Delete</button>
      </div>
		</div>
	</div>
</div>
    </div>
  );
};

export default Wishlist;