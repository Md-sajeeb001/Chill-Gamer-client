import imgOne from "../assets/h1-gallery-img-1.jpg";
import imgTwo from "../assets/h2-gallery-img-3.jpg";
import imgThree from "../assets/h3-gallery-img-4.jpg";
import imgFour from "../assets/h4-gallery-img-2.jpg";
// import imgFive from "../assets/h5-gallery-img-1.jpg";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";

const Banner = () => {
  return (
    <div className="carousel h-screen w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={imgOne} className="w-full" />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide4" className="btn btn-circle">
            <FaArrowLeftLong></FaArrowLeftLong>
          </a>
          <a href="#slide2" className="btn btn-circle">
            <FaArrowRightLong></FaArrowRightLong>
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={imgTwo} className="w-full" />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide1" className="btn btn-circle">
            <FaArrowLeftLong></FaArrowLeftLong>
          </a>
          <a href="#slide3" className="btn btn-circle">
            <FaArrowRightLong></FaArrowRightLong>
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={imgThree} className="w-full" />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide2" className="btn btn-circle">
            <FaArrowLeftLong></FaArrowLeftLong>
          </a>
          <a href="#slide4" className="btn btn-circle">
            <FaArrowRightLong></FaArrowRightLong>
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={imgFour} className="w-full" />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide3" className="btn btn-circle">
            <FaArrowLeftLong></FaArrowLeftLong>
          </a>
          <a href="#slide1" className="btn btn-circle">
            <FaArrowRightLong></FaArrowRightLong>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
