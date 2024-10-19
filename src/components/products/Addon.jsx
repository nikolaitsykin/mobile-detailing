import React from "react";

const Addon = ({ service, title, image, description, price, duration }) => {
  return (
    <div className="pb-5 w-full flex flex-col items-center mx-auto text-black  rounded-sm border border-gray">
      {title && <h3 className=" text-center py-3">{title}</h3>}
      <div
        className={`grid grid-cols-1 ${
          image ? "content-start h-full" : ""
        } items-center w-full max-w-xl`}
      >
        {image && (
          <img
            className="w-full max-w-xl align-start mb-3 px-4 py-1 rounded-sm overflow-hidden"
            src={image}
            alt="Car wash"
          />
        )}
        {description && (
          <div className=" max-w-xl w-full p-4 text-sm whitespace-pre-wrap">
           {description}
          </div>
        )}
      </div>
      {price && (
        <div className="flex justify-center items-end w-full">
          <h4 className=""> {price}</h4>
        </div>
      )}
      {duration && (
        <div className="text-center text-sm mt-2 p-4">{duration}</div>
      )}
    </div>
  );
};

export default Addon;
