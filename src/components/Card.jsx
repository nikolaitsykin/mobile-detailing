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
      className={`w-full h-full flex flex-col items-center justify-between p-4  mx-auto text-black ${border}`}
    >
      <img
        className="w-full max-w-xl hover:scale-105 duration-700 align-start mb-3"
        src={image}
        alt="Car wash"
      />
      <h5 className="max-w-xl text-center">{title}</h5>
      {description && (
        <div className="flex flex-col w-full max-w-xl my-3">
          <p className="">{description}</p>
        </div>
      )}
      {services && (
        <div className="flex flex-col w-full max-w-xl my-1 h-full ">
          <ul>
            {services.map((service) => (
              <li
                key={service}
                className="text-start list-none  p-[2px] whitespace-pre-wrap"
              >
                {service}
              </li>
            ))}
          </ul>
        </div>
      )}
      {price && (
        <div className="p-1 text-center font-syne font-semibold text-xl">
          {price}
        </div>
      )}
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
