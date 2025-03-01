import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "./Firebase.config";
import axios from "axios";



export const AuthContext= createContext(null)
var provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account'
});


const FirebaseProvider = ({children}) => {

 
  const [user,setUser] =useState(null);
  const[loading,setLoading]=useState(true);

  // create user and password
  const SignUpUser =(email,password)=>{
    setLoading(true);
    return  createUserWithEmailAndPassword(auth,email,password)
  }

   //login User
   const LoginUser=(email,password) =>{
    setLoading(true);
    return signInWithEmailAndPassword(auth,email,password)
  }
   //google Login
   const googleLogIn =() =>{
  
        setLoading(true);
        return signInWithPopup(auth,provider)
       
       
  }

  //logout
  const LogOut =async () =>{
    setLoading(true);

    setUser(null)
   const {data}= await axios('https://nextgen-blogs.vercel.app/logout',{withCredentials:true})
  //  console.log(data);
    
    signOut(auth)
    .then(()=>{
      alert('log Out Done')
    })
  }

  //Update User
     const updateUserProfile =(name,image) =>{
      return updateProfile(auth.currentUser,{
        displayName: name,
        photoURL: image
      })
    }

  //Observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
    const userEmail = currentUser?.email || user?.email;
    const loggedUser = { email: userEmail };
    setUser(currentUser);
    console.log('current user', currentUser);
    setLoading(false);
    // if user exists then issue a token
    if (currentUser?.email) {
    axios.post('https://nextgen-blogs.vercel.app/jwt', loggedUser, { withCredentials: true })
    .then(res => {
    console.log('token response', res.data);
    })
    }
    else {
    axios.post('https://nextgen-blogs.vercel.app/logout', loggedUser, {
    withCredentials: true
    })
    .then(res => {
    console.log(res.data);
    })
    }
    });
    return () => {
    return unsubscribe();
    }
    }, [])

  const userInfo={
   SignUpUser,
   LoginUser,
   googleLogIn,
   LogOut,
   updateUserProfile,
   user,
   loading
  }
  return (
    <AuthContext.Provider value={userInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default FirebaseProvider;