// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyCMebViJrqfYXbmBR0xHGOcoohavUbg8cM",
  authDomain: "react-udemy-0723.firebaseapp.com",
  projectId: "react-udemy-0723",
  storageBucket: "react-udemy-0723.appspot.com",
  messagingSenderId: "526172347417",
  appId: "1:526172347417:web:5a0a2548eb558c0fbade88",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDb = getFirestore(FirebaseApp);
