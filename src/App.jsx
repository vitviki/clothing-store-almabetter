import { Routes, Route } from "react-router-dom";
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
} from "./pages";
import { Footer, Navbar } from "./components";


export default function App() {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp/>} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/products/:productId" element={<Product />} />
        <Route path="/profile/:profileId" element={<Profile />} />
        <Route path="/searchResults/:searchTerm" element={<SearchResults />} />
      </Routes>
      <Footer />
    </div>
  );
}