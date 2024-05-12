// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-e26ea.firebaseapp.com",
  projectId: "mern-blog-e26ea",
  storageBucket: "mern-blog-e26ea.appspot.com",
  messagingSenderId: "710309137077",
  appId: "1:710309137077:web:dee00e284fdbbaf7764cfc"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

