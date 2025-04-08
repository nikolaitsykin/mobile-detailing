import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { permanentPromos } from "../utils/promos";
import PromoItem from "./PromoItem";

const Promos = () => {
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
    <div className="w-full mb-12">
      <h1 className="text-center text-black pt-5">Specials on Detailing Services</h1>
      <Slider {...settings} className="w-full h-56 pt-5">
        {permanentPromos.map((item, index) => (
          <PromoItem
            key={index}
            title={item.title}
            description={item.description}
            image={item.image}
          />
        ))}
      </Slider>
    </div>
  );
};

export default Promos;
