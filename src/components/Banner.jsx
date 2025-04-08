import React from "react";

const Banner = ({ image, header, alt }) => {
  return (
    <div>
      <div className="w-full bg-black">
        <img
          loading="lazy"
          className="w-full object-cover h-[300px] md:h-[450px] mx-auto opacity-50"
          src={image}
          alt={alt}
        />
      </div>
      <div className="w-full object-cover h-[300px] md:h-[450px] flex justify-center items-center absolute top-6">
        <div className="w-[90%] flex flex-col justify-center text-white">
          <h1 className=" text-center drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] ">
            {header}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Banner;
