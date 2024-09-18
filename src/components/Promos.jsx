import React from "react";
import PromoItem from "./PromoItem";
import { permanentPromos, temporaryPromoNow } from "../utils/data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import backgroundImage from "../assets/images/pexels-elina-araja-1743227-3311382.jpg";

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
    <div className="w-full relative">
      <h2 className="text-2xl text-center text-black font-syne font-bold">
        Promo
      </h2>
      <div className="bg-black">
        <img
          src={backgroundImage}
          alt="background"
          className="object-cover w-full mx-auto h-48"
        />
      </div>
      <Slider {...settings} className="w-full absolute top-[92px] h-48">
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
