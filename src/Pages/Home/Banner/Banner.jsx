

const Banner = () => {
  return (
    <div>
       <div className="flex flex-col justify-center text-center items-center md:pt-72 pt-14  md:gap-6  gap-2" >
         <h2 className=" text-green-950 font-extrabold lg:text-5xl text-2xl ">Welcome to Our Next-Gen Blog Experience</h2>
         <p className="md:text-2xl font-black text-green-700">Dive into captivating articles, engage with our vibrant community, and unlock the power of learning like never before.Discover a world of insights.</p>

        <button className="btn btn-accent">Sign Up Now</button>
    </div>
    </div>
  );
};

export default Banner;