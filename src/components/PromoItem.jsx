import React from "react";
import backgroundImage from "../assets/images/pexels-elina-araja-1743227-3311382.jpg";

const PromoItem = ({ title, image, description }) => {
  return (
    <div className=" h-48 w-full mx-auto ">
      <div className="mx-auto z-10  px-4 py-2 grid grid-cols-1 h-full ">
        <h2 className="text-white p-1 text-3xl md:text-4xl font-poppins font-semibold w-full self-end">
          {title}
        </h2>
        <p className="text-white p-1 font-poppins font-normal text-xl md:text-2xl self-start">
          {description}
        </p>
      </div>
      <div>
        <img
          src={backgroundImage}
          alt={title}
          className="object-cover w-full mx-auto"
        />
      </div>
    </div>
  );
};

export default PromoItem;
