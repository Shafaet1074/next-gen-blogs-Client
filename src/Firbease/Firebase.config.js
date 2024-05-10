// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBN4znlPnXvVvPrQTx_A6iHdmp3wq3JLls",
  authDomain: "nextgenblogs-6e55f.firebaseapp.com",
  projectId: "nextgenblogs-6e55f",
  storageBucket: "nextgenblogs-6e55f.appspot.com",
  messagingSenderId: "310674543724",
  appId: "1:310674543724:web:6a9213d945325f9a75b449"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;