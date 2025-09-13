import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { galleryImages } from "../utils/data";
import GalleryItem from "./GalleryItem";

const Gallery = () => {
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
  let slidesToShow = 1;

  if (windowWidth > 2000) {
    slidesToShow = 4;
  } else if (windowWidth > 1200) {
    slidesToShow = 3;
  } else if (windowWidth > 792) {
    slidesToShow = 2;
  }

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
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    centerPadding: "5px",
  };

  return (
    <div id="gallery" className="w-full mb-12">
      <h2 className="text-center text-black pt-16">Our Customers</h2>
      <Slider {...settings} className="w-full px-6">
        {galleryImages
          .sort(() => Math.random() - 0.5)
          .map((item, index) => (
            <GalleryItem key={index} item={item} />
          ))}
      </Slider>
    </div>
  );
};

export default Gallery;
