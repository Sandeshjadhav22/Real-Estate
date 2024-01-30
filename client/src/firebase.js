// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-42e3e.firebaseapp.com",
  projectId: "mern-estate-42e3e",
  storageBucket: "mern-estate-42e3e.appspot.com",
  messagingSenderId: "77416137056",
  appId: "1:77416137056:web:7d3fffef4612328f4a9e05"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);