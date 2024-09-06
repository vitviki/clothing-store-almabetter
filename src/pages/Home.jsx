import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import { assets, banner_ads } from "../assets";
import { Mousewheel } from "swiper/modules";

import "swiper/css";

const Home = () => {
  return (
    <section className="flex items-center flex-col gap-5">
      <div className="w-full ">
        <img src={assets.sale_banner_01} alt="sales banner" />
      </div>
      <Swiper
        direction={"horizontal"}
        mousewheel={{ enabled: true, sensitivity: 3 }}
        modules={[Mousewheel]}
        slidesPerView={1.7}
        className="w-full px-10 -z-10"
      >
        {banner_ads.map((banner) => (
          <SwiperSlide key={banner._id} className="">
            <Link to={`/${banner._id}`}>
              <img src={banner.banner} alt="banner" />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Home;
