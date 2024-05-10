import { Link, useLocation, useNavigate } from 'react-router-dom';
import img from '../../assets/Mobile-login-Cristina-removebg-preview.png'
import { useContext } from 'react';
import { AuthContext } from '../../Firbease/FirebaseProvider';

const SignUp = () => {
  const { SignUpUser,updateUserProfile} =useContext(AuthContext)
  const navigate =useNavigate();
	const location =useLocation();
	const from= location?.state || "/";
  const handleSignup = e =>{
    e.preventDefault();
		const form=e.target;
		const email=form.email.value;
		const password=e.target.Password.value;
		const photoUrl=e.target.photoUrl.value;
		const name=e.target.name.value;
		
		console.log(email,password,name,photoUrl);
    SignUpUser(email,password)
    .then(result=>{
      updateUserProfile(name,photoUrl)
      
      .then(()=>{

      })
      console.log(result.user);
      navigate(from);  
      alert('Sigup Successfully')

    })
    .catch(error=>{
			alert(error.message)
		})
  }
  

  return (
    <div className="flex gap-10 ">
        <div className="w-2/5">
         <img className='mt-6 w-full' src={img} alt="" />
        </div>

        <div className='md:w-1/2 mt-20 shadow-2xl border-emerald-800 rounded-lg'>
        <div className="w-full  p-8 space-y-3 rounded-xl dark:bg-violet-300 dark:text-gray-800">
	<h1 className="text-4xl font-bold text-center">Sign Up</h1>
	<form onSubmit={handleSignup}  noValidate="" action="" className="space-y-6">
  <div className="space-y-1 text-sm">
			<label  className="block text-xl dark:text-gray-600">Name</label>
			<input type="text" name="name"  placeholder="Name" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
		</div>
		<div className="space-y-1 text-sm">
			<label  className="block text-xl dark:text-gray-600">Email</label>
			<input type="email" name="email"  placeholder="Username" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
		</div>
		<div className="space-y-1 text-sm">
			<label  className="block text-xl dark:text-gray-600">Password</label>
			<input type="password" name="Password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
			
		</div>
		<div className="space-y-1 text-sm">
			<label  className="block text-xl dark:text-gray-600">PhotoURL</label>
			<input type="text" name="photoUrl" id="password" placeholder="PhotoURL" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
			
		</div>
		<button className=" block w-full bg-emerald-500 hover:bg-emerald-700  text-white font-bold text-xl text-center rounded-lg px-2 py-1 ">
Sign Up</button>
	</form>

	
	<p className="text-xl text-center  sm:px-6 dark:text-gray-600">Already Have An Account?Please Go.
		<Link to='/login'><a rel="noopener noreferrer" href="#" className="text-green-500 text-2xl font-bold">Log In</a></Link>
	</p>
</div>
        </div>
    </div>
  );
};

export default SignUp;