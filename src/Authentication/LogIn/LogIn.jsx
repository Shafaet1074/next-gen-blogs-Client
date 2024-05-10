
import { Link, useLocation, useNavigate } from 'react-router-dom';
import img from '../../assets/loogin.png'
import { useContext } from 'react';
import { AuthContext } from '../../Firbease/FirebaseProvider';


const LogIn = () => {
   const {LoginUser,googleLogIn} =useContext(AuthContext);
   const navigate =useNavigate();
	const location =useLocation();
  console.log(location);
	const from= location?.state || "/";
  console.log(from);
   const handleLogin = e =>{
		e.preventDefault();
		const form=e.target;
		const email=form.email.value;
		const password=form.password.value;
		console.log(email,password);
    LoginUser(email,password)
		.then(result =>{
			alert('Log in Done');
      navigate(from); 
		})
		.catch(error=>{
			alert(error.message)
			
		})
    form.reset();
   }
  return (
    <div className="md:flex">
    <div className="md:w-2/5">
     <img className='md:m-10 w-full' src={img} alt="" />
    </div>

    <div className='md:w-1/2 md:p-10 md:mt-20 shadow-2xl border-emerald-800 rounded-lg'>
    <div className="  p-8 space-y-3 rounded-xl dark:bg-violet-300 dark:text-gray-800 ">
<h1 className="md:text-4xl text-2xl font-bold text-center">Login</h1>
<form  onSubmit={handleLogin}  noValidate="" action="" className="space-y-6">
<div className="space-y-1 text-sm ">
  <label htmlFor="username" className="block text-xl dark:text-gray-600">Email</label>
  <input type="email" name="email" id="username" placeholder="Email" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
</div>
<div className="space-y-1 text-sm">
  <label htmlFor="password" className="block text-xl dark:text-gray-600">Password</label>
  <input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
  
</div>
<button className=" block w-full bg-emerald-500 hover:bg-emerald-700  text-white font-bold text-xl text-center rounded-lg px-2 py-1">Log in</button>
</form>
<div className="flex items-center pt-4 space-x-1">
<div className="flex-1 h-px sm:w-16 dark:bg-black"></div>
<p className="px-3 text-xl dark:text-gray-600 ">Login with social accounts</p>
<div className="flex-1 h-px sm:w-16 dark:bg-black"></div>
</div>
<div className="flex justify-center space-x-4">
<button onClick={()=>googleLogIn()} aria-label="Log in with Google" className="px-3 py-1 bg-emerald-600  rounded-lg border flex gap-3 items-center hover:bg-emerald-800">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current text-white">
    <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
  </svg>
  <h2 className='text-white justify-center items-center text-xl'>Google</h2>
</button>


</div>
<p className="text-xl text-center  sm:px-6 dark:text-gray-600">Don't have an account?
<Link to='/signup'><a rel="noopener noreferrer" href="#" className="text-green-500 text-2xl font-bold hover:text-green-700">Sign Up</a></Link>
</p>
</div>
    </div>
</div>
  );
};

export default LogIn;