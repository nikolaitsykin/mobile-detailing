import React from "react";
import BookButtons from "./UI/BookButtons";
import PriceTabs from "./UI/PriceTabs";

const Card = ({
  type,
  service,
  title,
  image,
  alt,
  description,
  services,
  price,
  suggestionHeader,
  suggestion,
  bookingLink,
  singleService,
  exteriorServices,
  interiorServices,
}) => {
  return (
    <div
      className={`mb-10 pb-5 max-w-5xl mx-auto text-black rounded-md shadow-md `}
    >
      {description && (
        <div className=" w-full px-4 pb-6 sm:pb-6 text-sm md:text-base">
          <p>{description}</p>
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 justify-between items-start w-full">
        <div>
          <div className="flex flex-col items-center justify-end">
            {title && <h3 className=" text-center py-1">{title}</h3>}
            {type && <h6 className="max-w-xl text-center pb-3">{type}</h6>}
          </div>

          <div
            className={`grid grid-cols-1 ${
              image ? "content-start h-full" : ""
            } items-center w-full max-w-xl`}
          >
            {singleService && image && (
              <img
                loading="lazy"
                className="object-cover w-full max-w-xl align-start mb-3 px-4 py-1 rounded-sm overflow-hidden"
                src={image}
                alt={alt}
              />
            )}
          </div>
          {service && (
            <div className="w-full px-4 max-w-xl">
              <PriceTabs service={service} card={true} />
            </div>
          )}
        </div>
        <div className="flex flex-col justify-around h-full">
          {services && (
            <div className="flex flex-col justify-between w-full max-w-xl h-full px-4">
              <ul className="h-full">
                {services.map((service, index) => (
                  <li
                    key={index}
                    className="text-start text-sm md:text-base list-none p-[2px] whitespace-pre-wrap"
                  >
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {exteriorServices && (
            <div className="flex flex-col justify-between w-full max-w-xl h-full px-4">
              <ul className="h-full">
                {exteriorServices.map((service, index) => (
                  <li
                    key={index}
                    className="text-start text-sm md:text-base p-[2px] whitespace-pre-wrap"
                  >
                    {"•"} {service.text}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {interiorServices && (
            <div className="flex flex-col justify-between w-full max-w-xl h-full px-4">
              <ul className="h-full">
                {interiorServices.map((service, index) => (
                  <li
                    key={index}
                    className="text-start text-sm md:text-base p-[2px] whitespace-pre-wrap"
                  >
                    {"•"} {service.text}
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
          {suggestion && (
            <div className="text-center sm:text-start text-sm md:text-base mt-2 p-4">
              <h6 className="text-start italic pb-2"> {suggestionHeader}</h6>
              <span>{suggestion} </span>
            </div>
          )}
          {singleService && (
            <div className="text-center sm:text-start text-sm md:text-base mt-2 p-4">
              {service.title !== "Ceramic Coating"
                ? "*Pricing may be subject to change based on the vehicles condition upon inspection at arrival. Additional services may be required. Examples include pet hair/sand, staining, excessive messes, etc."
                : ""}
            </div>
          )}
          <div className="mb-3">
            <BookButtons color={"secondary"} bookingLink={bookingLink} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
