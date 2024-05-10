import person from '../../../assets/pexels-tranmautritam-245032.jpg'
import parts from '../../../assets/pexels-pixabay-262508.jpg'

const About = () => {
  return (
    <div>
       <div className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row">
                <div className='lg:w-1/2 relative'>
                    <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
                    <img src={parts} className="w-1/2 absolute right-5 top-1/2 rounded-lg border-8 border-white shadow-2xl" />
                </div>
                <div className='lg:w-1/2 space-y-5 p-4'>
                    <h3 className='text-3xl text-green-800 font-extrabold'>About Us</h3>
                    <h1 className="text-5xl font-bold">Crafting Connections, Inspiring Minds.</h1>
                    <p className="py-6">Embark on a journey through the heart of <span className='bg-gradient-to-r from-green-600 via-green-400 to-emerald-900 py-1 text-white rounded-lg px-2'>NextGenBlogs</span>. We started with a vision and a passion for knowledge, and today, we stand as a beacon of inspiration in the digital landscape. </p>
                    <p className="py-6">With every article, every interaction, we strive to ignite curiosity, spark conversations, and foster a community bound by a shared love for learning. Join us as we navigate the realms of knowledge and imagination, together shaping a future rich in insight and possibility." </p>
                    <button className="btn btn-accent">Join US</button>
                </div>
            </div>
        </div>
    </div>
  );
};

export default About;