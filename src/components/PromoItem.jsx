import React from "react";

const PromoItem = ({ title, image, description }) => {
  return (
    <div className="h-56 w-full mx-auto relative font-poppins">
      <div className="mx-auto z-10 px-7 py-2 grid grid-cols-1 h-full absolute">
        <h2 className="text-white text-start drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] p-1 font-medium text-3xl md:text-5xl w-full self-end">
          {title}
        </h2>
        <p className="text-white text-start drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] p-1 font-normal text-lg md:text-2xl self-start">
          {description}
        </p>
      </div>
      <div>
        <img
          loading="lazy"
          src={image}
          alt={title}
          className="object-cover w-full mx-auto h-56 absolute top-0"
        />
      </div>
    </div>
  );
};

export default PromoItem;
