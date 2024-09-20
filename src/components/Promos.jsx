import React from "react";
import PromoItem from "./PromoItem";
import { permanentPromos, currentTemporaryPromo } from "../utils/promos";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import backgroundImage from "../assets/images/josep-martins-nAsdr5DC2Ss-unsplash.jpg";

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
    <div className="w-full ">
      <h2 className=" text-center text-black">Promo</h2>
      {/* <div className="bg-black w-full mx-auto h-48">
        <img
          src={backgroundImage}
          alt="background"
          className="object-cover w-full mx-auto h-48"
        />
      </div> */}
      <Slider {...settings} className="w-full h-56">
        {permanentPromos.map((item, index) => (
          <PromoItem
            key={index}
            title={item.title}
            description={item.description}
            image={item.image}
          />
        ))}
        <PromoItem
          key={currentTemporaryPromo.index}
          title={currentTemporaryPromo.title}
          description={currentTemporaryPromo.description}
          image={backgroundImage}
        />
      </Slider>
    </div>
  );
};

export default Promos;
