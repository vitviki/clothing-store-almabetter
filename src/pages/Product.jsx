import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  useGetDataQuery,
  useGetProductDetailsQuery,
} from "../redux/services/rapidAPICore";
import { FaStar } from "react-icons/fa6";
import { FaCartPlus } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { ProductCard, Title } from "../components";

const RelatedProducts = ({ category, name }) => {
  const {
    data: relatedProductsData,
    isFetching,
    error,
  } = useGetDataQuery(`${name}`);

  if (isFetching) {
    return <div className="text-3xl mt-10 text-center">Loading...</div>;
  }

  return relatedProductsData?.data.products.length > 0 ? (
    <div className="my-24">
      <div className="text-center text-3xl py-2">
        <Title text1={"RELATED"} text2={"PRODUCTS"} size={"text-3xl"} />
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 gap-y-6 ">
        {relatedProductsData?.data.products.slice(0, 4).map((item, idx) => (
          <ProductCard
            key={item.asin}
            asin={item.asin}
            title={item.product_title}
            price={item.product_price}
            original_price={item.original_price}
            image={item.product_photo}
          />
        ))}
      </div>
    </div>
  ) : (
    <></>
  );
};

const Product = () => {
  const { productId } = useParams();
  const [mainImage, setMainImage] = useState("");
  const [stars, setStars] = useState(0);
  const [size, setSize] = useState("");

  // Get product details
  const {
    data: productData,
    isFetching,
    error,
  } = useGetProductDetailsQuery(productId);

  // Get related products

  const calculateDiscountPercentage = (amount1, amount2) => {
    amount1 = Number(amount1.replace(/[!,@#$%^&₹*]/g, ""));
    amount2 = Number(amount2.replace(/[!,@#$%^&₹*]/g, ""));
    return Math.floor(((amount2 - amount1) / ((amount1 + amount2) / 2)) * 100);
  };

  useEffect(() => {
    setMainImage(productData?.data.product_photos[0]);
    setStars(Math.ceil(Number(productData?.data.product_star_rating)));
  }, [productData, isFetching]);

  if (isFetching) {
    return <div className="text-3xl mt-10 text-center">Loading...</div>;
  }
  return (
    <div className="pt-10 transition-opacity ease-in duration-500 opacity-100 border-t-2 px-4 md:px-[5vw] lg:px-[7vw]">
      {/* PRODUCT DATA */}
      <div className="flex gap-12 flex-col sm:flex-row">
        {/* Product Images */}
        <div className="flex flex-1 flex-col-reverse sm:flex-row gap-3 xl:border-r-2 ">
          <div className="flex sm:flex-col gap-2 overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productData?.data?.product_photos.slice(0, 4).map((image, idx) => (
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
            <span className="font-light text-xl ml-1">
              MRP{" "}
              <span className="line-through">
                {productData?.data.product_original_price}
              </span>
            </span>{" "}
            <span className="text-xl ml-1 text-orange-600">
              (
              {calculateDiscountPercentage(
                productData?.data?.product_price,
                productData?.data.product_original_price
              )}
              % OFF){" "}
            </span>
          </p>
          <p className="mt-5 text-gray-500 md:w-4/5">
            {productData?.data.product_description}
          </p>

          <div className="flex flex-col gap-4 my-8">
            <p className="text-gray-600">Select Size</p>
            <div className="flex gap-5">
              {productData?.data.product_variations.size.map((item) => (
                <button
                  key={item.asin}
                  className={`border py-2 px-3  rounded-full bg-gray-100 text-sm ${
                    item === size ? "border-orange-500 text-orange-500" : ""
                  } flex items-center justify-center`}
                  onClick={() => setSize(item)}
                >
                  {item.value}
                </button>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="bg-pink-600 text-white px-8 py-3 text-sm font-semibold active:bg-gray-700 flex items-center gap-2 rounded-md">
              <FaCartPlus size={20} className="text-white" />
              ADD TO BAG
            </button>
            <button className="flex items-center gap-2 rounded-md px-8 py-3 text-sm font-semibold bg-white text-black border">
              <CiHeart size={20} className="text-black" />
              WISHLIST
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
