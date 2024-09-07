import { useGetDataQuery } from "../redux/services/rapidAPICore";
import { useEffect, useState } from "react";
import { Title, ProductCard } from "../components";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

const Collections = ({ searchString, titleText1, titleText2 }) => {
  const [minPriceValue, setMinPriceValue] = useState(0);
  const [maxPriceValue, setMaxPriceValue] = useState(0);
  const [priceValue, setPriceValue] = useState(0);
  const [showFilter, setShowFilter] = useState(false);
  const [sortType, setSortType] = useState("relevance");
  const [products, setProducts] = useState([]);

  const { data, isFetching, error } = useGetDataQuery(searchString);

  const handlePriceChange = (e) => {
    setPriceValue(e.target.value);
  };

  const getProductPrice = (product) => {
    return Number(product?.product_price?.replace(/[!@,#$%^&₹*]/g, ""));
  };

  const getAllProductsPrices = () => {
    console.log(products?.length);
    return products?.length > 0
      ? products?.map((p) =>
          Number(p.product_price.replace(/[!,@#$%^&₹*]/g, ""))
        )
      : [];
  };

  const sortProducts = () => {
    let productsCopy = products.slice();
    switch (sortType) {
      case "low-high":
        setProducts(
          productsCopy.sort((a, b) => getProductPrice(a) - getProductPrice(b))
        );
        break;
      case "high-low":
        setProducts(
          productsCopy.sort((a, b) => getProductPrice(b) - getProductPrice(a))
        );
        break;
      default:
        setProducts(data?.data?.products);
        break;
    }
  };

  useEffect(() => {
    sortProducts();
  }, [sortType]);

  useEffect(() => {
    // const prices = getAllProductsPrices();
    // setMinPriceValue(Math.min(...prices));
    // setMaxPriceValue(Math.max(...prices));
    // setPriceValue(Math.max(...prices));
  }, [products]);

  useEffect(() => {
    setProducts(data?.data?.products);
  }, [data, isFetching]);

  if (isFetching) {
    return <div className="text-3xl mt-10 text-center">Loading...</div>;
  }
  return (
    <div className="flex flex-col lg:flex-row gap-1 sm:gap-10 py-10 border-t px-4 md:px-[5vw] lg:px-[7vw]">
      {/* FILTER OPTIONS */}
      <div className="min-w-40 xl:w-60 lg:w-50 w-40">
        <h3
          className="my-2 text-xl flex items-center cursor-pointer gap-2"
          onClick={() => setShowFilter(!showFilter)}
        >
          FILTERS
          {showFilter ? (
            <IoMdArrowDropup className={`lg:hidden`} />
          ) : (
            <IoMdArrowDropdown className={`lg:hidden`} />
          )}
        </h3>

        {/* Price Filter */}
        <div
          className={`border border-gray-300 px-5 py-3 mt-6 rounded-md lg:flex flex-col gap-2 ${
            showFilter ? "" : "hidden"
          }`}
        >
          <h4 className="mb-3 text-sm font-medium">PRICE</h4>
          <p>₹{priceValue}</p>
          <input
            type="range"
            id="price"
            name="price"
            min={minPriceValue}
            max={maxPriceValue}
            value={priceValue}
            onChange={(e) => setPriceValue(e.target.value)}
            step={5}
          />
        </div>
      </div>

      {/* PRODUCTS */}
      <div className="flex-1">
        <div className="flex justify-between mb-4">
          <Title text1={titleText1} text2={titleText2} size={"text-3xl"} />
          {/* sort order */}
          <select
            className="border-2 border-gray-500 text-sm px-2 bg-white"
            onChange={(e) => setSortType(e.target.value)}
          >
            <option value="relevance">Sort by: Relevance</option>
            <option value="low-high">Sort by: Low-High</option>
            <option value="high-low">Sort by: High-Low</option>
          </select>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5 gap-y-8">
          {products?.map((product) => {
            return (
              <ProductCard
                key={product.asin}
                asin={product.asin}
                title={product.product_title}
                price={product.product_price}
                original_price={product.original_price}
                image={product.product_photo}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Collections;
