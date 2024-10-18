import React from "react";
import { Link } from "react-router-dom";
import Button from "./UI/Button";
import Menu from "./UI/Menu";
import { HashLink } from "react-router-hash-link";

const Card = ({
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
      className={`mb-10 py-5 w-full mx-auto text-black border border-gray rounded-sm ${background}`}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 justify-between items-start w-full">
        <div>
          <div
            className={`flex flex-col items-center justify-end ${
              bestValue && "min-h-28"
            }`}
          >
            <p className="text-lg font-medium text-blue animate-pulse">
              {bestValue}
            </p>
            {title && <h3 className=" text-center py-1">{title}</h3>}
            {type && <h6 className="max-w-xl text-center pb-3">{type}</h6>}
          </div>
          {service && (
            <div className="w-full px-4 max-w-xl">
              <Menu service={service} card={true} />
            </div>
          )}
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
              <div className="flex flex-col max-w-xl w-full px-4 pb-5 text-sm whitespace-pre-wrap">
                <p className="">{description}</p>
              </div>
            )}
          </div>
        </div>
        <div>
          {services && (
            <div className="flex flex-col justify-between w-full max-w-xl h-full px-4">
              <ul className="h-full">
                {services.map((service, index) => (
                  <li
                    key={index}
                    className="text-start text-sm list-none p-[2px] whitespace-pre-wrap"
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
      </div>
      {button && (
        <div className=" mt-4 flex justify-center items-end w-[100%]  px-4">
          <HashLink
            smooth
            className="w-full max-w-xl flex justify-center items-center"
            preventScrollReset={false}
            scroll={(el) =>
              el.scrollIntoView({ behavior: "auto", block: "end" })
            }
            to={`${link}`}
          >
            <Button children={button} color={"secondary"} />
          </HashLink>
        </div>
      )}
    </div>
  );
};

export default Card;
