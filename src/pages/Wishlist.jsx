import React, { useEffect, useState } from "react";
import { auth, db } from "../components/firebase";
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import ProductCard from "../components/ProductCard";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { CiCircleRemove } from "react-icons/ci";
import { Title } from "../components";

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchWishlist = async () => {
      if (auth.currentUser) {
        const userId = auth.currentUser.uid;
        const wishlistRef = collection(db, "Users", userId, "wishlist");
        try {
          const querySnapshot = await getDocs(wishlistRef);
          const items = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setWishlistItems(items);
        } catch (error) {
          toast.error("Error fetching wishlist items: " + error.message, {
            autoClose: 3000,
            hideProgressBar: true,
            className: "bg-red-600 text-white font-semibold",
          });
        }
      }
    };

    fetchWishlist();
  }, []);

  const handleRemove = async (productId) => {
    if (auth.currentUser) {
      const userId = auth.currentUser.uid;
      const wishlistRef = doc(db, "Users", userId, "wishlist", productId);
      try {
        await deleteDoc(wishlistRef);
        setWishlistItems((prevItems) =>
          prevItems.filter((item) => item.id !== productId)
        );
        toast.success("Item removed from wishlist", {
          autoClose: 3000,
          hideProgressBar: true,
          className: "bg-green-600 text-white font-semibold",
        });
      } catch (error) {
        toast.error("Error removing item: " + error.message, {
          autoClose: 3000,
          hideProgressBar: true,
          className: "bg-red-600 text-white font-semibold",
        });
      }
    }
  };

  const addToBag = async () => {
    if (!size) {
      toast.error("Please select a size before adding to the cart.");
      return;
    }

    if (auth.currentUser) {
      const userId = auth.currentUser.uid;
      const cartRef = doc(db, "Users", userId, "cart", productData.data.asin);

      try {
        await setDoc(cartRef, {
          ...productData.data,
          selectedSize: size,
        });
        toast.success("Added To Bag", {
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
    } else {
      toast.error("You need to be logged in to add items to the cart.");
    }
  };

  return (
    <div className="h-max flex flex-col items-center justify-center p-4">
      {wishlistItems.length === 0 ? (
        <>
          <div className="mt-[200px] mb-[20px] font-bold text-lg">
            YOUR WISHLIST IS EMPTY
          </div>
          <p className="md:w-[28%] text-[#9498b8] mb-[20px] text-lg">
            Add items that you like to your wishlist. Review them anytime and
            easily move them to the bag.
          </p>
          <button
            onClick={() => navigate("/")}
            className="mb-[50px] md:mb-[120px] p-3 text-lg px-12 rounded-md border border-[#3466e8] text-[#3466e8] font-bold"
          >
            CONTINUE SHOPPING
          </button>
        </>
      ) : (
        <>
          <Title className="" text1={"WISHLIST"} size={"text-3xl"} />
          <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 gap-y-6">
            {wishlistItems.map((item) => (
              <div key={item.id} className="relative">
                <ProductCard
                  asin={item.asin}
                  title={item.product_title}
                  price={item.product_price}
                  original_price={item.original_price}
                  image={item.product_photo}
                  rating={Math.ceil(item.product_star_rating)}
                  rating_num={item.product_num_ratings}
                />

                <CiCircleRemove
                  onClick={() => handleRemove(item.id)}
                  className=" cursor-pointer absolute top-2 right-2 h-10 w-10  text-black rounded"
                />
                <button
                  onClick={addToBag}
                  className="w-full py-2 border-2 text-[#ff3e6c] font-bold mt-3 "
                >
                  MOVE TO BAG
                </button>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Wishlist;
