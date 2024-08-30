import React from "react";
import PriceTable from "./PriceTable";

const Card = ({ title, image, services, price, discount, packageType }) => {
  return (
    <div className="w-full min-h-96 h-full flex flex-col items-center justify-between rounded-2xl p-3 mx-2 bg-gray text-black">
      <h3 className="text-center font-semibold ">{title}</h3>
      <img
        className="w-full max-w-80 align-start rounded-lg my-2"
        src={image}
        alt="Car wash"
      />
      <div className="flex flex-col w-full max-w-80 my-1">
        {services.map((service) => (
          <p key={service} className="text-start list-none text-sm p-1">
            {service}
          </p>
        ))}
      </div>
      {price && (
        <PriceTable
          packageType={packageType}
          price={price}
          discount={discount}
        />
      )}
    </div>
  );
};

export default Card;
