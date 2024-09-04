// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyBURDK1yg7Bte9LjSZd0BUbzqRwazCjpXY",
  authDomain: "myntra-clone-13736.firebaseapp.com",
  projectId: "myntra-clone-13736",
  storageBucket: "myntra-clone-13736.appspot.com",
  messagingSenderId: "631045921380",
  appId: "1:631045921380:web:9216dba1d78d722c86dd71"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth()
export const db=getFirestore(app);

export default app;