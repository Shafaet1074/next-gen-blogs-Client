import  { useContext } from 'react';

import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Firbease/FirebaseProvider';

const PrivateRoute = ({children}) => {
  
  const {user,loading}=useContext(AuthContext)
  const location =useLocation();
  console.log(location.pathname);
  if(loading){
    return <div className="text-center flex justify-center items-center">
      <span className="justify-center text-center loading loading-bars loading-lg"></span>
    </div>
      
    
  }
  if(!user){
    return <Navigate to='/login' state={location?.pathname}></Navigate>
  }
  return (
    <div>
      {children}
    </div>
  );
};

export default PrivateRoute;