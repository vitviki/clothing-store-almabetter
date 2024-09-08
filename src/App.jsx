import { Routes, Route, Navigate } from "react-router-dom";
import {
  Home,
  About,
  Cart,
  Login,
  Orders,
  Product,
  Profile,
  SearchResults,
  Checkout,
  Category,
  SignUp,
  Wishlist
} from "./pages";
import { Footer, Navbar } from "./components";
import { useEffect, useState } from "react";
import { auth } from "./components/firebase";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  
  const [user, setUser] = useState();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  }, []);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/:categoryId/:categoryType" element={<Category />} />
        <Route path="/products/:productId" element={<Product />} />
        <Route path="/profile/:profileId" element={<Profile />} />
        <Route path="/search/:searchTerm" element={<SearchResults />} /> 
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}
