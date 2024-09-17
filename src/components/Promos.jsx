import React from "react";
import PromoItem from "./PromoItem";
import { permanentPromos, temporaryPromoNow } from "../utils/data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Promos = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    centerPadding: "10px",
  };

  return (
    <div className="w-full">
      <h2 className="text-2xl text-center text-black font-syne font-bold">
        Promo
      </h2>
      <Slider {...settings} className="w-full mx-1">
        {permanentPromos.map((item, index) => (
          <PromoItem
            key={index}
            title={item.title}
            description={item.description}
          />
        ))}

        <PromoItem
          key={temporaryPromoNow.index}
          title={temporaryPromoNow.title}
          description={temporaryPromoNow.description}
        />
      </Slider>
    </div>
  );
};

export default Promos;
