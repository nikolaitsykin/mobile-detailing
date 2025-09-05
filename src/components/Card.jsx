import React from "react";
import { Link } from "react-router-dom";
import BookButtons from "./UI/BookButtons";
import { carsSizes } from "../utils/detailingPackages";
import {
  CERAMIC_COATING_PATH,
  PAINT_CORRECTION_PATH,
} from "../utils/constants";

const Card = ({
  service,
  image,
  alt,
  ceramicAdditionalService,
  paintCorrectionAdditionalService,
  description,
  services,
  bookingLink,
  singleService,
  exteriorServices,
  interiorServices,
}) => {
  return (
    <div className={`mb-10 pb-5 mx-auto text-black rounded-md shadow-md `}>
      {description && (
        <div className=" w-full pb-6 sm:pb-6 text-sm md:text-base">
          <p>{description}</p>
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 justify-between items-start w-full">
        <div>
          <div
            className={`grid grid-cols-1 ${
              image ? "content-start h-full" : ""
            } items-center w-full max-w-xl`}
          >
            {singleService && image && (
              <img
                loading="lazy"
                className="object-cover align-start mb-3 py-1 rounded-sm overflow-hidden"
                src={image}
                alt={alt}
              />
            )}
          </div>
          {service && (
            <div className="w-full max-w-xl">
              <div id="prices" className="py-5">
                <div className="font-montserrat mb-10 md:mb-0">
                  <h4 className="mb-1 text-center">Simple Pricing</h4>
                  <div className="flex justify-between">
                    <h5 className="px-2 w-4/5 text-start flex items-center bg-black text-white h-12">
                      Vehicle
                    </h5>
                    <h5 className="ml-0.5 px-2 w-1/5 flex justify-center items-center bg-black text-white h-12">
                      Price
                    </h5>
                  </div>
                  <div className="text-base md:text-lg font-medium">
                    <div className="flex justify-between">
                      <span className=" px-2 w-4/5 flex flex-col h-16 justify-center">
                        <span className="flex justify-start items-center">
                          {carsSizes[0].title}
                        </span>
                        <span className="flex justify-start items-center text-xs md:text-xs font-normal">
                          {carsSizes[0].description}
                        </span>
                      </span>
                      <span className="ml-1 px-2 w-1/5 text-center flex justify-center items-center">
                        {service.price[0]}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className=" px-2 w-4/5 flex flex-col h-16 justify-center">
                        <span className="flex justify-start items-center">
                          {carsSizes[1].title}
                        </span>
                        <span className="flex justify-start items-center text-xs md:text-xs font-normal">
                          {carsSizes[1].description}
                        </span>
                      </span>
                      <span className="ml-1  px-2 w-1/5 text-center flex justify-center items-center">
                        {service.price[1]}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className=" px-2 w-4/5 flex flex-col h-16 justify-center">
                        <span className="flex justify-start items-center">
                          {carsSizes[2].title}
                        </span>
                        <span className="flex justify-start items-center text-xs md:text-xs font-normal">
                          {carsSizes[2].description}
                        </span>
                      </span>
                      <span className="ml-1  px-2 w-1/5 text-center flex justify-center items-center">
                        {service.price[2]}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="flex flex-col justify-between h-full">
          <div>
            {services && (
              <div className="flex flex-col justify-between w-full max-w-xl h-full ">
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
              <div className="flex flex-col w-full max-w-xl px-4">
                <p className="font-semibold ml-3" >This package includes:</p>
                <ul>
                  {!singleService && (
                    <span className="font-semibold">For the exterior:</span>
                  )}
                  {exteriorServices.map((service, index) => (
                    <li
                      key={index}
                      className="ml-3 text-start text-sm md:text-base p-[2px] whitespace-pre-wrap"
                    >
                      {service.bold ? (
                        <strong>{service.text}</strong>
                      ) : (
                        service.text
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {paintCorrectionAdditionalService && (
              <div className="flex flex-col w-full px-4">
                <ul className="">
                  {paintCorrectionAdditionalService.map((item, index) => (
                    <Link to={CERAMIC_COATING_PATH}>
                      <li
                        key={index}
                        className="ml3  text-start text-sm md:text-base p-[2px] whitespace-pre-wrap text-blue underline font-semibold"
                      >
                        {item.text}
                      </li>
                    </Link>
                  ))}
                </ul>
              </div>
            )}
            {ceramicAdditionalService && (
              <div className="flex flex-col w-full max-w-xl px-4">
                <ul className="">
                  {ceramicAdditionalService.map((item, index) => (
                    <Link to={PAINT_CORRECTION_PATH}>
                      <li
                        key={index}
                        className="ml-3 text-start text-sm md:text-base p-[2px] whitespace-pre-wrap text-blue underline font-semibold"
                      >
                        {item.text}
                      </li>
                    </Link>
                  ))}
                </ul>
              </div>
            )}
            {interiorServices && (
              <div className="flex flex-col w-full max-w-xl h-full px-4">
                {exteriorServices ? (
                  ""
                ) : (
                  <p className="font-semibold ml-3">This package includes:</p>
                )}
                <ul className="h-full">
                  {!singleService && (
                    <span className="font-semibold">For the interior:</span>
                  )}
                  {interiorServices.map((service, index) => (
                    <li
                      key={index}
                      className=" ml-3 text-start text-sm md:text-base p-[2px] whitespace-pre-wrap"
                    >
                      {service.bold ? (
                        <strong>{service.text}</strong>
                      ) : (
                        service.text
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div className="text-center sm:text-start text-sm md:text-base mt-2 p-4">
              {service.type !== "Ceramic Coating" &&
              service.type !== "Paint Correction"
                ? "*Pricing may be subject to change based on the vehicles condition upon inspection at arrival. Additional services may be required. Examples include pet hair/sand, staining, excessive messes, etc."
                : "*Pricing may be subject to change based on the vehicles condition upon inspection at arrival. Additional services may be required. Examples include excessive bug, tar, tree sap etc."}
            </div>
          </div>

          <div className="mb-3">
            <BookButtons color={"secondary"} bookingLink={bookingLink} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
