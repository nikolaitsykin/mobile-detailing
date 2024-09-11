import React from "react";
import { Link } from "react-router-dom";
import Button from "./UI/Button";

const Card = ({
  title,
  image,
  description,
  services,
  price,
  button,
  link,
  border,
}) => {
  return (
    <div
      className={`w-full h-full max-w-xl flex flex-col items-center justify-between p-4 m-1 mx-auto text-black ${border}`}
    >
      <img
        className="w-full hover:scale-105 duration-700 align-start my-2"
        src={image}
        alt="Car wash"
      />
      <h3 className="text-center font-syne font-bold">{title}</h3>
      {description && (
        <div className="flex flex-col w-full my-1">
          <p className=" text-xs md:text-sm">{description}</p>
        </div>
      )}
      {services && (
        <div className="flex flex-col w-full my-1 h-full ">
          <ul>
            {services.map((service) => (
              <li
                key={service}
                className="text-start list-none text-xs md:text-sm p-[2px] whitespace-pre-wrap"
              >
                {service}
              </li>
            ))}
          </ul>
        </div>
      )}
      {price && <div className="text-xs md:text-sm">{price}</div>}
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
