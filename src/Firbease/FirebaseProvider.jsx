import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "./Firebase.config";



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
    setLoading(true);
        return signInWithPopup(auth,googleProvider)
        .then(()=>{
          alert('log In Succesfully')
        })
  }

  //logout
  const LogOut = () =>{

    setUser(null)
    
    signOut(auth)
    .then(()=>{
      toast.success('log Out Done')
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