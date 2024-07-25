// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDczyeZgKqO5VmZPqu0r9WLtFBaE5lBDo",
  authDomain: "mern-estate-cde25.firebaseapp.com",
  projectId: "mern-estate-cde25",
  storageBucket: "mern-estate-cde25.appspot.com",
  messagingSenderId: "255716964621",
  appId: "1:255716964621:web:3c68022bc7eec899d5d844"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);