import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

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

export const auth = getAuth();
export const db = getFirestore(app);

// Listen to auth state changes to get the userId and store it in local storage
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, get the userId (uid)
    const userId = user.uid;
    // Store it in local storage
    // Comment Needs to be removed  to set id in local storage
    localStorage.setItem("userId", userId);                                            
  } else {
    // User is signed out
    // console.log("No user signed in");
  }
});

export default app;



// LOGOUT SECTION
// Comment Needs to be removed and to be used in profile to logout

// async  function handlelogout(){
//   try {
//     await auth.signOut();                                                           
//     localStorage.removeItem("userId");
//     window.location.href="/login";
//   } catch (error) {
    
//   }
// }