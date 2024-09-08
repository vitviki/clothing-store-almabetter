import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../components/firebase";
import { toast } from "react-toastify";

const Login = () => {

  const [email,setEmail] =useState("");
  const [password,setPassword] =useState("");
  const navigate = useNavigate();

  const handleSignUpNavigation = () => {
    navigate("/signUp");
  };

  const handleSubmit= async(e)=>{
   e.preventDefault();
   try {
     await signInWithEmailAndPassword(auth,email,password);
     console.log("User Logged in Successfully");
     navigate("/")
     toast.success("Welcome Back!", {
      autoClose: 3000,
      hideProgressBar: true,
      progress: undefined,
      className: "bg-green-600 text-white font-semibold", 
    });
   } catch (error) {
      toast.error(error.message, {
        autoClose: 3000,
        hideProgressBar: true,
        progress: undefined,
        className: "bg-red-500 text-white font-semibold", 
      });
   }

  }
  return (
    <form onSubmit={handleSubmit} className="bg-[#fdefe9] min-h-screen flex items-center">
      <div className="p-8 bg-white h-[500px] w-[400px] mx-auto">
        <p className="py-8 text-[#424553] text-2xl font-bold">Login</p>
        <input
          className="py-2 p-4 w-full border mb-4"
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          required
        />
        <br />
        <input
          className="py-2 p-4 w-full border"
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
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
          CONTINUE
        </button>
        <p className="py-3 w-full text-center max-sm:text-xs">
          Don't have an account?{" "}
          <span
            onClick={handleSignUpNavigation}
            className="cursor-pointer font-bold text-[#ff3f6c]"
          >
            Sign Up
          </span>
        </p>
      </div>
    </form>
  );
};

export default Login;