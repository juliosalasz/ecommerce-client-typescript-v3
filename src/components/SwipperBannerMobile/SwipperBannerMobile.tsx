import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectFade } from "swiper";

import slide1 from "../../assets/slide1.jpg";
import slide2 from "../../assets/slide2.jpg";

// Import Swiper styles
import "./SwipperBannerMobileStyles.css";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

const SwipperBannerMobile = () => {
  return (
    <div className="swipperContainerMobile">
      <div className="swipperSizeMobile">
        <Swiper
          navigation={true}
          modules={[Navigation, Pagination, EffectFade]}
          loop={true}
          pagination={{
            clickable: true,
          }}
          className="swiper-pagination-custom"
        >
          <SwiperSlide>
            <img src={slide1} alt="slide 1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide2} alt="slide 1" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default SwipperBannerMobile;

/*
<Swiper navigation={true} modules={[Navigation]} className="swiper-pagination-custom">

*/
