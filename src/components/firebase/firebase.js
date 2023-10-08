// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// import firebase from 'firebase/app';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2ZtsvtI4sDCvYVK1Js_PCE2si866mIik",
  authDomain: "linkedin-47895.firebaseapp.com",
  projectId: "linkedin-47895",
  storageBucket: "linkedin-47895.appspot.com",
  messagingSenderId: "187243618095",
  appId: "1:187243618095:web:fba25f15ebe2c5a3888bda"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);

// export  const auth= getAuth();