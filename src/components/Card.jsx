import React from "react";
import { Link } from "react-router-dom";
import PriceTable from "./PriceTable";
import Button from "./UI/Button";

const Card = ({
  title,
  image,
  description,
  services,
  price,
  priceTable,
  discount,
  packageType,
  button,
  link,
  border,
}) => {
  return (
    <div
      className={`w-full h-full max-w-md flex flex-col items-center justify-between p-4 m-1 mx-auto text-black ${border}`}
    >
      <img
        className="w-full hover:scale-105 duration-700 align-start my-2"
        src={image}
        alt="Car wash"
      />
      <h3 className="text-center font-syne font-bold">{title}</h3>
      {description && (
        <div className="flex flex-col w-full my-1">
          <p className="text-sm">{description}</p>
        </div>
      )}
      {services && (
        <div className="flex flex-col w-full my-1 h-full">
          <ul>
            {services.map((service) => (
              <li
                key={service}
                className="text-start list-none text-sm p-[2px]"
              >
                {service}
              </li>
            ))}
          </ul>
        </div>
      )}
      {priceTable && (
        <PriceTable
          packageType={packageType}
          price={priceTable}
          discount={discount}
        />
      )}
      {price && <div className="text-sm">{price}</div>}
      {button && (
        <div className="my-1 flex justify-center w-[100%]">
          <Link
            className="w-[80%] flex justify-center items-center"
            preventScrollReset={false}
            to={`/${link}`}
          >
            <Button children={button} color={"secondary"} />
          </Link>
        </div>
      )}
    </div>
  );
};

export default Card;
