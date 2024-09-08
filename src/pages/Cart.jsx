import React, { useState, useEffect } from "react";
import { auth, db } from "../components/firebase";
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { CiCircleRemove } from "react-icons/ci";
import { Navigate, useNavigate } from "react-router-dom";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();
  // Function to Fetch cart items from firestore 
  useEffect(() => {
    const fetchCartItems = async () => {
      if (auth.currentUser) {
        const userId = auth.currentUser.uid;
        const cartCollectionRef = collection(db, "Users", userId, "cart");
        const cartSnapshot = await getDocs(cartCollectionRef);
        const items = cartSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setCartItems(items);
      }
    };

    fetchCartItems();
  }, []);
//function to remove items from cart and in firestore too
  const handleRemove = async (productId) => {
    if (auth.currentUser) {
      const userId = auth.currentUser.uid;
      const cartRef = doc(db, "Users", userId, "cart", productId);

      try {
        await deleteDoc(cartRef);
        setCartItems(cartItems.filter((item) => item.id !== productId));
        toast.success("Removed from Cart", {
          autoClose: 3000,
          hideProgressBar: true,
          className: "bg-green-600 text-white font-semibold",
        });
      } catch (error) {
        toast.error(error.message, {
          autoClose: 3000,
          hideProgressBar: true,
          className: "bg-red-600 text-white font-semibold",
        });
      }
    }
  };
  //function to handle navigation to wishlist 
  const handleNavigate = () => {
    navigate("/wishlist");
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 md:px-8 lg:px-16">
      {cartItems.length === 0 ? (
        <div className=" text-center">
          <h1 className="text-lg font-bold mt-[30px] md:mt-[200px]">
            Hey, It's feels so light
          </h1>
          <p className="text-[#9498b8] text-lg mt-4">
            There is nothing in your bag. Let's add some items.
          </p>
          <button
            onClick={handleNavigate}
            className=" mt-8 p-3 text-lg px-12 rounded-md border border-[#ff3f6c] text-[#ff3f6c] font-bold"
          >
            Add Items From Wishlist
          </button>
        </div>
      ) : (
        <div className="max-w-screen-lg mx-auto">
          <h2 className="text-2xl font-bold mb-6">Shopping Cart</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center border-b border-gray-200 py-4"
              >
                <img
                  src={item.product_photo}
                  alt={item.product_title}
                  className="w-24 h-24 object-cover mr-4"
                />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold">
                    {item.product_title}
                  </h3>
                  <p className="text-gray-600">₹{item.product_price}</p>
                  <p className="text-gray-500">
                    Size: {item.selectedSize.value}
                  </p>
                </div>
                <button
                  onClick={() => handleRemove(item.id)}
                  className="text-red-600 hover:text-red-800"
                >
                  <CiCircleRemove size={30} className="text-black" />
                </button>
              </div>
            ))}
          </div>
          <div className="mt-8 text-right">
            <button className=" text-[#3466e8] px-6 py-2 rounded-md font-semibold border border-[#3466e8]">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
