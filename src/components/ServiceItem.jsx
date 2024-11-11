import React from "react";
import { Link } from "react-router-dom";
import Button from "./UI/Button";
import Menu from "./UI/Menu";

const ServiceItem = ({
  type,
  service,
  title,
  image,
  description,
  services,
  price,
  button,
  link,
  background,
  duration,
  bestValue,
}) => {
  return (
    <div
      className={`flex flex-col justify-between items-start pb-5 w-full mx-auto text-black border border-gray rounded-sm ${background}`}
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
          {title && <h3 className="text-xl text-center p-3">{title}</h3>}
          {type && <h6 className="max-w-xl text-center pb-3">{type}</h6>}
        </div>
        {service && (
          <div className="w-full px-4 max-w-xl">
            <Menu service={service} card={true} />
          </div>
        )}
        <div
          className={`flex flex-col justify-start items-center w-full `}
        >
          {image && (
            <img
              loading="lazy"
              className="w-full w-lg align-start mb-3 px-4 py-1 rounded-sm overflow-hidden"
              src={image}
              alt="Auto detailing"
            />
          )}
          {description && (
            <div className="flex flex-col max-w-xl w-full px-4 pb-5 text-xs md:text-base whitespace-pre-wrap">
              <p className="">{description}</p>
            </div>
          )}
        </div>

        {services && (
          <div className="flex flex-col justify-between w-full max-w-xl h-full px-4">
            <ul className="h-full">
              {services.map((service, index) => (
                <li
                  key={index}
                  className="text-start text-xs md:text-base list-none p-[2px] whitespace-pre-wrap"
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>
        )}
        {price && (
          <div className="flex justify-center items-end w-full">
            <h4 className="p-5"> {price}</h4>
          </div>
        )}
        {duration && (
          <div className="text-center text-sm mt-2 p-4">{duration}</div>
        )}
      </div>
      {button && (
        <div className="flex justify-center items-end w-[100%] px-4">
          <Link
            className="w-full max-w-xl flex justify-center items-center"
            preventScrollReset={false}
            to={`${link}`}
          >
            <Button children={button} color={"secondary"} />
          </Link>
        </div>
      )}
    </div>
  );
};

export default ServiceItem;
