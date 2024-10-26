import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const Gallery = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    centerPadding: "10px",
  };

  return (
    <div id="gallery" className="bg-white py-8">
      <section className="w-[80%] mx-auto">
        <h1 className="text-3xl text-center text-black my-3">Gallery</h1>
        <article className="text-sm md:text-base tracking-wide leading-6 text-start text-black">
          <p className=" text-center">Chapter is coming soon!</p>
        </article>
      </section>
    </div>
  );
};

export default Gallery;
