import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "./Firebase.config";
import axios from "axios";



export const AuthContext= createContext(null)
const googleProvider = new GoogleAuthProvider();


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
  
    
        return signInWithPopup(auth,googleProvider)
       
       
  }

  //logout
  const LogOut =async () =>{
    setLoading(true);

    setUser(null)
   const {data}= await axios('http://localhost:5004/logout',{withCredentials:true})
   console.log(data);
    
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
  useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth, (user) => {
      if (user) {
         setUser(user)
         
      } 
      setLoading(false);
    });

    return ()=> unsubscribe();
    
  },[])

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