import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth ,db } from "../components/firebase";
import { setDoc,doc } from "firebase/firestore";
import { toast } from "react-toastify";

const SignUp = () => {
  const [name,setName] =useState("");
  const [email,setEmail] =useState("");
  const [password,setPassword] =useState("");

  const navigate = useNavigate();
  //To handle login navigation
  const handleLoginNavigation = () => {
    navigate("/login");
  };
   // handle submit used to submit the form
  const handleSubmit= async (e)=>{
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password)
      const user =auth.currentUser;
      navigate("/login")
      //Toast messages to show notifications
      toast.success("Signup Successfull", {
        autoClose: 3000,
        hideProgressBar: true,
        progress: undefined,
        className: "bg-green-600 text-white font-semibold", 
      });
      if(user){
        await setDoc(doc(db,"Users",user.uid),{
          email:user.email,
          name:name,
        })
      }
    } catch (error) {
      toast.error(error.message, {
        autoClose: 3000,
        hideProgressBar: true,
        progress: undefined,
        className: "bg-red-600 text-white font-semibold", 
      });
    }
  }

  return (
    <form onSubmit={handleSubmit} className="bg-[#fdefe9] min-h-screen flex items-center">
      <div className="p-8 bg-white h-[500px] w-[400px] mx-auto">
        <p className="py-6 text-[#424553] text-2xl font-bold">Sign Up</p>
        <input
          className="py-2 p-4 w-full border mb-4"
          type="text"
          placeholder="Enter your Name"
          value={name}
          onChange={(e)=>{setName(e.target.value)}}
          required
        />
        <br />
        <input
          className="py-2 p-4 w-full border mb-4"
          type="email"
          placeholder="Enter your Email"
          value={email}
          onChange={(e)=>{setEmail(e.target.value)}}
          required
        />
        <input
          className="py-2 p-4 w-full border mb-4"
          type="password"
          placeholder="Enter your Password"
          value={password}
          onChange={(e)=>{setPassword(e.target.value)}}
          required
        />
        <p className="py-4 text-xs">
          By continuing, I agree to the{" "}
          <a
            href="https://www.myntra.com/termsofuse"
            className="font-bold text-[#ff3f6c]"
          >
            Terms of Use
          </a>{" "}
          &{" "}
          <a
            href="https://www.myntra.com/privacypolicy"
            className="font-bold text-[#ff3f6c]"
          >
            Privacy Policy
          </a>
        </p>
        <button
          type="submit"
          className="py-2 text-white bg-[#ff3f6c] w-full"
        >
          SIGN UP
        </button>
        <p className="py-3 w-full text-center max-sm:text-xs">
         Already have an account?{" "}
          <span
            onClick={handleLoginNavigation}
            className="cursor-pointer font-bold text-[#ff3f6c]"
          >
            Login
          </span>
        </p>
      </div>
    </form>
  );
};

export default SignUp;
