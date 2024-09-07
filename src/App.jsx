import { Routes, Route, Navigate } from "react-router-dom";
import {
  Home,
  About,
  Cart,
  Login,
  SignUp,
  Orders,
  Product,
  Profile,
  SearchResults,
  Checkout,
  Category,
} from "./pages";
import { Footer, Navbar } from "./components";
import { useEffect, useState } from "react";
import { auth } from "./components/firebase";


export default function App() {

  const [user,setUser]=useState();
  useEffect(()=>{
    auth.onAuthStateChanged((user)=>{
      setUser(user)
    })
  })
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/login" element={user? <Navigate to="/"/>:<Login />} /> */}
        <Route path="/signUp" element={<SignUp/>} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/:categoryId/:categoryType" element={<Category />} />
        <Route path="/products/:productId" element={<Product />} />
        <Route path="/profile/:profileId" element={<Profile />} />
        <Route path="/search/:searchTerm" element={<SearchResults />} />
      </Routes>
      <Footer />
    </div>
  );
}
