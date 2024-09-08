import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import { assets, banner_ads } from "../assets";
import { Autoplay, Pagination } from "swiper/modules";
import { Title, ProductCard } from "../components";

import "swiper/css";
import "swiper/css/pagination";
import { useGetBestSellersQuery } from "../redux/services/rapidAPICore";

const Home = () => {
  const {
    data: bestSellersData,
    isFetching,
    error,
  } = useGetBestSellersQuery("apparel");

  const optimizeImage = (imageURL) => {
    // https://images-eu.ssl-images-amazon.com/images/I/71x4rLhMkML._AC_UL900_SR900,600_.jpg
    // Will remove the "_AC_UL900_SR900,600_" portion of the URL
    return imageURL.replace("_AC_UL900_SR900,600_.", "");
  };

  return (
    <>
      <section className="flex items-center flex-col gap-5 border">
        <div className="w-full ">
          <img  src={assets.sale_banner_01} alt="sales banner" />
        </div>
        <Swiper
          direction={"horizontal"}
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 20 },
            640: { slidesPerView: 1.2, spaceBetween: 30 },
            768: { slidesPerView: 1.4, spaceBetween: 30 },
            1024: {
              slidesPerView: 1.7,
              spaceBetween: 30,
            },
          }}
          speed={800}
          autoplay={{ delay: 1000, disableOnInteraction: true }}
          className="w-full z-0"
        >
          {banner_ads.map((banner) => (
            <SwiperSlide key={banner._id} className="">
              <img className="" src={banner.banner} alt="banner" />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Best seller section */}
      <section className="mt-24 px-4 md:px-[5vw] lg:px-[7vw]">
        <Title text1={"BEST"} text2={"SELLERS"} size={"text-3xl"} />
        {isFetching ? (
          <div className="text-3xl mt-10 text-gray-800">Loading...</div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 gap-y-6">
            {bestSellersData.data.best_sellers.slice(0, 10).map((item) => (
              <ProductCard
                key={item.asin}
                asin={item.asin}
                title={item.product_title}
                price={item.product_price}
                image={optimizeImage(item.product_photo)}
                rating={Math.ceil(Number(item.product_star_rating))}
                rating_num={item.product_num_ratings}
              />
            ))}
          </div>
        )}
      </section>

      <section className="mt-24 w-full">
        <Link to="/">
          <img src={assets.mobile_store} alt="mobile store" />
        </Link>
      </section>
    </>
  );
};

export default Home;
