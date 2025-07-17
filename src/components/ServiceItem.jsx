import { Link } from "react-router-dom";
import { BOOKING_PAGE_PATH } from "../utils/constants";
import Button from "./UI/Button";

const ServiceItem = ({ props }) => {
  return (
    <div
      className={`bg-white hover:opacity-90 flex flex-col justify-between items-start rounded-sm shadow-md hover:outline-gray hover:outline duration-100 px-8 pb-5 w-full mx-auto z-100 border border-gray`}
    >
      <div className="w-full">
        <div className={`flex flex-col justify-start items-center w-full`}>
          {props.image && (
            <img
              loading="lazy"
              className="h-64 mt-4 object-cover w-full align-start rounded-sm overflow-hidden "
              src={props.image}
              alt="Auto detailing"
            />
          )}
          {props.title && (
            <h3 className="text-2xl text-center p-2 my-2 font-poppins text-black">
              {props.title.toUpperCase()}
            </h3>
          )}
          <div className="w-full">
            {props.suggestionHeader && (
              <h6 className="max-w-xl font-semibold text-start pb-1">
                {props.suggestionHeader}
              </h6>
            )}
            {props.suggestion && (
              <div className="flex flex-col pb-2 text-sm md:text-base whitespace-pre-wrap">
                <p className="">{props.suggestion}</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center w-[100%] mt-3">
        <Link
          target={"_blank"}
          className="w-full flex justify-center items-center py-0.5"
          preventScrollReset={false}
          to={`${props.link}`}
        >
          <Button children={"Explore"} color={"tertiary"} width={"w-full"} />
        </Link>
        <Link
          target={"_blank"}
          className="w-full flex justify-center items-center  py-0.5"
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