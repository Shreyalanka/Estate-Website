// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-9c8e9.firebaseapp.com",
  projectId: "mern-estate-9c8e9",
  storageBucket: "mern-estate-9c8e9.appspot.com",
  messagingSenderId: "344414661732",
  appId: "1:344414661732:web:511108960e652acaccc371"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);