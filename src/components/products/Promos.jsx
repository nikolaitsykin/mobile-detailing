import React from "react";
import PromoItem from "./PromoItem";
import { permanentPromos, currentTemporaryPromo } from "../../utils/promos";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import backgroundImage from "../../assets/images/andrej-lisakov-qURnsLMPHrk-unsplash.jpg";

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
    <div className="w-full pb-5 mt-5">
      <h2 className="text-center text-black">Detailing Deals</h2>
      <Slider {...settings} className="w-full h-56 pt-5">
        {permanentPromos.map((item, index) => (
          <PromoItem
            key={index}
            title={item.title}
            description={item.description}
            image={item.image}
          />
        ))}
        {/* <PromoItem
          key={currentTemporaryPromo.index}
          title={currentTemporaryPromo.title}
          description={currentTemporaryPromo.description}
          image={backgroundImage}
        /> */}
      </Slider>
    </div>
  );
};

export default Promos;
