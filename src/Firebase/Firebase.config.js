// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYzkIVBsvHfgUIb2TXdiqR5jE2lX1p2js",
  authDomain: "appstore-a9.firebaseapp.com",
  projectId: "appstore-a9",
  storageBucket: "appstore-a9.firebasestorage.app",
  messagingSenderId: "404321059613",
  appId: "1:404321059613:web:bdb7387f8ffa18b57ed7f4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);