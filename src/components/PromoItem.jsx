import React from "react";

const PromoItem = ({ title, image, description }) => {
  return (
    <div className="h-48 w-full mx-auto relative">
      <div className="mx-auto z-10 px-7 py-2 grid grid-cols-1 h-full absolute">
        <h2 className="text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] p-1 text-3xl md:text-4xl font-poppins font-semibold w-full self-end">
          {title}
        </h2>
        <p className="text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] p-1 font-poppins font-normal text-lg md:text-2xl self-start">
          {description}
        </p>
      </div>
      <div>
        <img
          src={image}
          alt={title}
          className="object-cover w-full mx-auto h-48 absolute top-0"
        />
      </div>
    </div>
  );
};

export default PromoItem;
