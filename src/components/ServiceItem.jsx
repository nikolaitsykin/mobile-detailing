import React from "react";
import { Link } from "react-router-dom";
import { BOOKING_PAGE_PATH } from "../utils/constants";
import Button from "./UI/Button";
import Menu from "./UI/Menu";

const ServiceItem = ({
  type,
  service,
  title,
  image,
  description,
  button,
  link,
  background,
  bestValue,
}) => {
  return (
    <div
      className={`flex flex-col justify-between items-start pb-16 md:pb-5 w-full mx-auto text-black border-gray rounded-sm ${background}`}
    >
      <div className=" w-full">
        <div
          className={`flex flex-col items-center justify-end ${
            bestValue && "min-h-28"
          }`}
        >
          <p className="text-lg font-medium text-blue animate-pulse">
            {bestValue}
          </p>
        </div>
        {service && (
          <div className="w-full px-4 max-w-xl">
            <Menu service={service} card={true} />
          </div>
        )}
        <div className={`flex flex-col justify-start items-center w-full `}>
          {image && (
            <img
              loading="lazy"
              className="w-full max-w-lg align-start rounded-sm overflow-hidden"
              src={image}
              alt="Auto detailing"
            />
          )}
          {title && (
            <h3 className="text-2xl text-center p-2 mt-2 font-poppins text-dark-gray">
              {title.toUpperCase()}
            </h3>
          )}
          {type && <h6 className="max-w-xl text-center pb-3">{type}</h6>}
          {description && (
            <div className="flex flex-col max-w-lg w-full px-2 pb-2 text-xs md:text-base whitespace-pre-wrap">
              <p className="">{description}</p>
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col justify-center items-center w-[100%]">
        <Link
          className="w-full flex justify-center items-center max-w-lg px-2 py-0.5"
          preventScrollReset={false}
          to={`${link}`}
        >
          <Button children={"Explore"} color={"tertiary"} width={"w-full"} />
        </Link>
        <Link
          className="w-full  flex justify-center items-center max-w-lg px-2 py-0.5"
          preventScrollReset={false}
          to={BOOKING_PAGE_PATH}
        >
          <Button children={"Book Now"} color={"secondary"} width={"w-full"} />
        </Link>
      </div>
    </div>
  );
};

export default ServiceItem;
