import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  useGetDataQuery,
  useGetProductDetailsQuery,
} from "../redux/services/rapidAPICore";
import { FaStar } from "react-icons/fa6";
import { FaCartPlus } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { IoMdHeart } from "react-icons/io";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { ProductCard, Title } from "../components";
import { auth, db } from "../components/firebase";
import { doc, getDoc, setDoc, deleteDoc } from "firebase/firestore";
import { toast } from "react-toastify";

// Component to display related products
const RelatedProducts = ({ name }) => {
  const { data: relatedProductsData, isFetching } = useGetDataQuery(name);

  if (isFetching) {
    return <div className="text-3xl mt-10 text-center">Loading...</div>;
  }

  return relatedProductsData?.data.products.length > 0 ? (
    <div className="my-24">
      <div className="text-center text-3xl py-2">
        <Title text1={"RELATED"} text2={"PRODUCTS"} size={"text-3xl"} />
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 gap-y-6 ">
        {relatedProductsData?.data.products.slice(0, 4).map((item) => (
          <ProductCard
            key={item.asin}
            asin={item.asin}
            title={item.product_title}
            price={item.product_price}
            original_price={
              item.original_price !== null ? item.originalPrice : ""
            }
            image={item.product_photo}
            rating={Math.ceil(Number(item.product_star_rating))}
            rating_num={item.product_num_ratings}
          />
        ))}
      </div>
    </div>
  ) : null;
};

const Product = () => {
  const navigate = useNavigate();
  const { productId } = useParams();
  const [mainImage, setMainImage] = useState("");
  const [stars, setStars] = useState(0);
  const [size, setSize] = useState("");
  const [inWishList, setInWishList] = useState(false);
  const [inCart, setInCart] = useState(false);

  // Fetch product details
  const { data: productData, isFetching } =
    useGetProductDetailsQuery(productId);

  // Function to calculate discount percentage
  const calculateDiscountPercentage = (currentPrice, originalPrice) => {
    const amount1 = Number(currentPrice.replace(/[!,@#$%^&₹*]/g, ""));
    const amount2 = Number(originalPrice.replace(/[!,@#$%^&₹*]/g, ""));
    return Math.floor(((amount2 - amount1) / ((amount1 + amount2) / 2)) * 100);
  };

  useEffect(() => {
    if (productData?.data) {
      setMainImage(productData.data.product_photos[0]);
      setStars(Math.ceil(Number(productData.data.product_star_rating)));
      if (auth.currentUser) {
        const userId = auth.currentUser.uid;
        const wishlistRef = doc(
          db,
          "Users",
          userId,
          "wishlist",
          productData.data.asin
        );
        const cartRef = doc(db, "Users", userId, "cart", productData.data.asin);

        // Fetch the wishlist to see if this product already is there.
        fetchWishListItemsAndCheckIfProductExists(wishlistRef);

        // Fetch the cart to see if this product already is in there.
        fetchCartItemsAndCheckIfProductExists(cartRef);
      }
    }
  }, [productData]);

  async function fetchWishListItemsAndCheckIfProductExists(wishlistRef) {
    try {
      const snap = await getDoc(wishlistRef);
      if (snap.exists()) {
        setInWishList(true);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchCartItemsAndCheckIfProductExists(cartRef) {
    try {
      const snap = await getDoc(cartRef);
      if (snap.exists()) {
        setInCart(true);
      }
    } catch (error) {
      console.log(error);
    }
  }

  // Function to add product to cart
  const goAddToBag = async () => {
    if (inCart) {
      navigate("/cart");
      return;
    }

    if (!size) {
      toast.error("Please select a size.", {
        autoClose: 1000,
        hideProgressBar: true,
        position: "bottom-right",
        className: "bg-red-600 text-white font-semibold",
      });
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
        setInCart(true);
        toast.success("Added To Bag", {
          autoClose: 1000,
          hideProgressBar: true,
          position: "bottom-right",
          className: "bg-green-600 text-white font-semibold",
        });
      } catch (error) {
        toast.error(error.message, {
          autoClose: 1000,
          hideProgressBar: true,
          position: "bottom-right",
          className: "bg-red-600 text-white font-semibold",
        });
      }
    } else {
      toast.error("You need to be logged in to add items to the cart.", {
        autoClose: 1000,
        hideProgressBar: true,
        position: "bottom-right",
        className: "bg-red-600 text-white font-semibold",
      });
    }
  };

  // Function to add product to wishlist
  const addRemoveToWishlist = async () => {
    if (auth.currentUser) {
      const userId = auth.currentUser.uid;
      const wishlistRef = doc(
        db,
        "Users",
        userId,
        "wishlist",
        productData.data.asin
      );

      // Check to see if the product is already in the wishlist.
      // If it is, then remove it, otherwise add it to the wishlist.
      try {
        if (inWishList) {
          await deleteDoc(wishlistRef);
          setInWishList(false);
          toast.success("Removed from Wishlist", {
            autoClose: 1000,
            hideProgressBar: true,
            position: "bottom-right",
            className: "bg-green-600 text-white font-semibold",
          });
        } else {
          await setDoc(wishlistRef, productData.data);
          setInWishList(true);
          toast.success("Added To Wishlist", {
            autoClose: 1000,
            hideProgressBar: true,
            position: "bottom-right",
            className: "bg-green-600 text-white font-semibold",
          });
        }
      } catch (error) {
        toast.error(error.message, {
          autoClose: 1000,
          hideProgressBar: true,
          position: "bottom-right",
          className: "bg-red-600 text-white font-semibold",
        });
      }
    } else {
      toast.error("You need to be logged in to add items to the wishlist.");
    }
  };

  if (isFetching) {
    return <div className="text-3xl mt-10 text-center">Loading...</div>;
  }

  return (
    <div className="pt-10 transition-opacity ease-in duration-500 opacity-100 border-t-2 px-4 md:px-[5vw] lg:px-[7vw]">
      {/* PRODUCT DATA */}
      <div className="flex gap-12 flex-col sm:flex-row">
        {/* Product Images */}
        <div className="flex flex-1 flex-col-reverse sm:flex-row gap-3 xl:border-r-2 ">
          <div className="flex sm:flex-col gap-2 hide-scrollbar overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productData?.data.product_photos.slice(0, 4).map((image, idx) => (
              <img
                src={image}
                key={idx}
                alt={image}
                className="w-[24%] sm:w-full flex-shrink-0 cursor-pointer border border-gray-100"
                onClick={() => setMainImage(image)}
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <img src={mainImage} alt="main image" className="w-full h-auto" />
          </div>
        </div>

        {/* Product Info */}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2 text-gray-800">
            {productData?.data.product_title}
          </h1>
          <div className="flex items-center gap-1 mt-2">
            {Array(5)
              .fill(0)
              .map((_, idx) => (
                <FaStar
                  key={idx}
                  size={20}
                  className={`${
                    stars > idx ? "text-orange-700" : "text-gray-300"
                  }`}
                  title={productData?.data.product_star_rating}
                />
              ))}
            <p className="pl-2">({productData?.data.product_num_ratings})</p>
          </div>
          <p className="mt-5 text-3xl font-medium mb-2">
            ₹{productData?.data.product_price}{" "}
            {productData?.data.product_original_price !== null ? (
              <span className="font-light text-xl ml-1">
                MRP{" "}
                <span className="line-through">
                  {productData?.data.product_original_price}
                </span>
              </span>
            ) : (
              <></>
            )}
            <span className="text-xl ml-1 text-orange-600">
              (
              {productData?.data?.product_original_price !== null &&
              productData?.data?.product_price !== null
                ? calculateDiscountPercentage(
                    productData?.data.product_price,
                    productData?.data.product_original_price
                  )
                : ""}
              % OFF){" "}
            </span>
          </p>
          <p className="mt-5 text-gray-500 md:w-4/5">
            {productData?.data.product_description}
          </p>

          <div className="flex flex-col gap-4 my-8">
            <p className="text-gray-600">Select Size</p>
            <div className="flex gap-5">
              {productData?.data.product_variations.length !== 0 ? (
                productData?.data.product_variations.size.map((item) => (
                  <button
                    key={item.asin}
                    className={`border py-2 px-3  rounded-full bg-gray-100 text-sm ${
                      item === size ? "border-orange-500 text-orange-500" : ""
                    } flex items-center justify-center`}
                    onClick={() => setSize(item)}
                  >
                    {item.value}
                  </button>
                ))
              ) : (
                <></>
              )}
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={goAddToBag}
              className="bg-pink-600 text-white px-8 py-3 text-sm font-semibold active:bg-gray-700 flex items-center gap-2 rounded-md"
            >
              {inCart ? (
                <>
                  <MdOutlineArrowRightAlt size={20} className="text-white" />
                  GO TO BAG
                </>
              ) : (
                <>
                  <FaCartPlus size={20} className="text-white" />
                  ADD TO BAG
                </>
              )}
            </button>
            <button
              onClick={addRemoveToWishlist}
              className="flex items-center gap-2 rounded-md px-8 hover:border-black py-3 text-sm font-semibold bg-white text-black border"
            >
              {inWishList ? (
                <>
                  <IoMdHeart size={20} className="text-black" />
                  WISHLISTED
                </>
              ) : (
                <>
                  <CiHeart size={20} className="text-black" />
                  WISHLIST
                </>
              )}
            </button>
          </div>
          <hr className="mt-8 sm:w-4/5" />
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-2">
            <p>100% Original Product</p>
            <p>COD available</p>
            <p>{productData?.data.delivery}</p>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <RelatedProducts
        name={productData?.data.product_information["Generic Name"]}
      />
    </div>
  );
};

export default Product;
