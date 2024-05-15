

function FeaturedWriter({writer}) {
  
  return (
    <section className="p-2 lg:p-8 dark:bg-gray-100 dark:text-gray-800">
     <div
        className="hero md:w-full md:h-96"
        style={{ backgroundImage: `url(${writer?.image_url})` }} // Dynamic background image URL
      >
  <div className="hero-overlay bg-opacity-70 hover:bg-opacity-50 w-full rounded-lg hover:text-green-500"></div>
  <div className="hero-content text-center text-neutral-content rounded-lg">
    <div className="max-w-md font-bold">
      <h1 className="mb-5 md:text-5xl  font-bold">{writer?.category}</h1>
      <p className="mb-5 ">{writer?.description}</p>
   
    </div>
  </div>
</div>
  </section>
  )
}

export default FeaturedWriter
