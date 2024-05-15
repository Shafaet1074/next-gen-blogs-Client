import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { useContext } from "react";
import { IoPersonRemove } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Firbease/FirebaseProvider";

const Header = () => {
  const {LogOut,user} = useContext(AuthContext)
  console.log(user);
  console.log(user?.photoURL)
  return (
    
    // "
        <Navbar className="bg-slate-100  shadow-emerald-400 shadow-xl">
      <Navbar.Brand href="https://flowbite-react.com">
        
       <Link to='/'> <span className="self-center whitespace-nowrap text-2xl font-semibold px-2 py-1 bg-gradient-to-r from-green-600 via-green-400 to-emerald-900 text-white rounded-lg">NextGenBlogs</span></Link>
      </Navbar.Brand>
      
      <div className="flex md:order-2 gap-5">
    
      {user ?
      <div className="dropdown dropdown-hover">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src={user?.photoURL}
        
 />
        </div>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li>
        <p>{user?.displayName}</p>
        </li>
        <button onClick={LogOut}> <li><a>Logout</a></li></button>
      </ul>
      </div>

     :
    <>
      <Link to='/login'><button className="text-emerald-700 font-extrabold hover:text-emerald-900 text-xl" >Log In</button></Link>
     <Link to='/signup'><button className="text-emerald-700 font-extrabold hover:text-emerald-900 text-xl" >Sign Up</button></Link>
     
    </>

    
    }
        
        <Navbar.Toggle />
       
      </div>
     
      <Navbar.Collapse>
      <NavLink to='/' className={({isActive})=> isActive?' border-2 border-emerald-800 px-2 py-1  font-bold   text-xl rounded-lg' : 'font-bold text-xl text-green-950 '}><li><a>Home</a></li></NavLink>
      <NavLink to='/addblogs' className={({isActive})=> isActive?' border-2 border-emerald-800 px-2 py-1  font-bold   text-xl rounded-lg' : 'font-bold text-xl text-green-950 '}><li><a>Add Blog</a></li></NavLink>
      <NavLink to='/allblogs' className={({isActive})=> isActive?' border-2 border-emerald-800 px-2 py-1  font-bold   text-xl rounded-lg' : 'font-bold text-xl text-green-950 '}><li><a>AllBlogs</a></li></NavLink>
      <NavLink to='/featuredblogs' className={({isActive})=> isActive?' border-2 border-emerald-800 px-2 py-1  font-bold   text-xl rounded-lg' : 'font-bold text-xl text-green-950 '}><li><a>Featured Blogs</a></li></NavLink>
      <NavLink to='/MyBlogs' className={({isActive})=> isActive?' border-2 border-emerald-800 px-2 py-1  font-bold   text-xl rounded-lg' : 'font-bold text-xl text-green-950 '}><li><a>My Blogs</a></li></NavLink>
      <NavLink to='/wishlists' className={({isActive})=> isActive?' border-2 border-emerald-800 px-2 py-1  font-bold   text-xl rounded-lg' : 'font-bold text-xl text-green-950 '}><li><a>Wish Lists</a></li></NavLink>

      

    
        
      </Navbar.Collapse>
    </Navbar>
      
     
    
  );
};

export default Header;