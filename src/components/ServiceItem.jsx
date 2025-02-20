import React from "react";
import { Link } from "react-router-dom";
import { BOOKING_PAGE_PATH } from "../utils/constants";
import Button from "./UI/Button";
import PriceTabs from "./UI/PriceTabs";

const ServiceItem = ({props}) => {
  return (
    <div
      className={`bg-white hover:opacity-90 flex flex-col justify-between items-start rounded-sm shadow-md hover:outline-gray hover:outline duration-100 pb-5 w-full mx-auto z-100`}
    >
      <div className="w-full">
        {props.service && (
          <div className="w-full px-4 max-w-xl">
            <PriceTabs service={props.service} card={true} />
          </div>
        )}
        <div className={`flex flex-col justify-start items-center w-full `}>
          {props.image && (
            <img
              loading="lazy"
              className="w-full p-2 max-w-lg align-start rounded-sm overflow-hidden"
              src={props.image}
              alt="Auto detailing"
            />
          )}
          {props.title && (
            <h3 className="text-2xl text-center p-2 mt-2 font-poppins text-dark-gray">
              {props.title.toUpperCase()}
            </h3>
          )}
          {props.type && <h6 className="max-w-xl text-center pb-3">{props.type}</h6>}
          {props.shortDescription && (
            <div className="flex flex-col max-w-lg w-full px-2 pb-2 text-sm md:text-base whitespace-pre-wrap">
              <p className="">{props.shortDescription}</p>
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col justify-center items-center w-[100%] mt-3">
        <Link
          target={"_blank"}
          className="w-full flex justify-center items-center max-w-lg px-2 py-0.5"
          preventScrollReset={false}
          to={`${props.link}`}
        >
          <Button children={"Explore"} color={"tertiary"} width={"w-full"} />
        </Link>
        <Link
          target={"_blank"}
          className="w-full flex justify-center items-center max-w-lg px-2 py-0.5"
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
