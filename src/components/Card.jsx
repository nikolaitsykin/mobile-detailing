import React from "react";
import { Link } from "react-router-dom";
import Button from "./UI/Button";
import Menu from "./UI/Menu";

const Card = ({
  name,
  service,
  title,
  image,
  description,
  services,
  price,
  button,
  link,
  border,
  background,
  duration,
}) => {
  return (
    <div
      className={`w-full flex flex-col items-center mx-auto text-black ${border} border-gray rounded-sm ${background}`}
    >
      {name && <h3 className=" text-center py-6">{name}</h3>}
      {service && (
        <div className="w-full px-4 max-w-xl">
          <Menu service={service} card={true} />
        </div>
      )}

      <h5 className="max-w-xl text-center">{title}</h5>
      <div className="grid grid-cols-1 justify-between items-center w-full max-w-xl">
        {image && (
          <img
            className="w-full max-w-xl align-start mb-3 px-4 rounded-sm overflow-hidden"
            src={image}
            alt="Car wash"
          />
        )}
        {description && (
          <div className="flex flex-col max-w-xl w-full px-4 text-sm whitespace-pre-wrap">
            <p className="">{description}</p>
          </div>
        )}
      </div>

      {services && (
        <div className="flex flex-col justify-between items-center w-full max-w-xl my-5 h-full px-4">
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
      {button && (
        <div className="mb-10 mt-4 flex justify-center items-end w-[100%]  px-4">
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

export default Card;
