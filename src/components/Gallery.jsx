import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { galleyImages } from "../utils/data";
import GalleryItem from "./GalleryItem";

const Gallery = () => {
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    let cb = function () {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", cb);

    return () => {
      window.removeEventListener("resize", cb);
    };
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: windowWidth > 792 ? 2 : 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    centerPadding: "10px",
  };

  return (
    <div className="w-full mb-12">
      <h2 className="text-center text-black pt-0">Our work</h2>
      <Slider {...settings} className="w-full pt-5">
        {galleyImages.map((item, index) => (
          <GalleryItem key={index} image={item.image} />
        ))}
      </Slider>
    </div>
  );
};

export default Gallery;
