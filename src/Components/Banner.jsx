import imgOne from "../assets/h1-gallery-img-1.jpg";
import imgTwo from "../assets/h2-gallery-img-3.jpg";
import imgThree from "../assets/h3-gallery-img-4.jpg";
import imgFour from "../assets/h4-gallery-img-2.jpg";
import imgFive from "../assets/h5-gallery-img-6.jpg";
import imgSix from "../assets/h6-gallery-img-5.jpg";
// import { FaArrowLeftLong } from "react-icons/fa6";
// import { FaArrowRightLong } from "react-icons/fa6";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
// import "./styles.css";
import { Scrollbar } from "swiper/modules";
import Heading from "../Shared/Heading";

const Banner = () => {
  return (
    <Swiper
      scrollbar={{
        hide: true,
      }}
      modules={[Scrollbar]}
      className="mySwiper sm:h-[500px] mt-24 w-full"
    >
      <SwiperSlide className="w-full">
        <img src={imgTwo} className="w-full h-full" alt="" />
      </SwiperSlide>
      <div>
        <SwiperSlide className="w-full">
          <img src={imgOne} className="w-full h-full" alt="" />
        </SwiperSlide>
        <Heading></Heading>
      </div>

      <SwiperSlide className="w-full">
        <img src={imgThree} className="w-full h-full" alt="" />
      </SwiperSlide>
      <SwiperSlide className="w-full">
        <img src={imgFour} className="w-full h-full" alt="" />
      </SwiperSlide>
      <SwiperSlide className="w-full">
        <img src={imgFive} className="w-full h-full" alt="" />
      </SwiperSlide>
      <SwiperSlide className="w-full">
        <img src={imgSix} className="w-full h-full" alt="" />
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
