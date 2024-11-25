import React from "react";
import { ReactComponent as Star } from "../assets/icons/star.svg";

const ReviewItem = ({ name, content, rating }) => {
  return (
    <div className="flex flex-col items-center text-xs sm:text-base w-[80%] sm:w-1/3 p-5">
      <p className="text-lg font-medium">{name}</p>
      <span className="flex items-start p-1">
        {Array.from({ length: rating }, (_, index) => (
          <Star key={index} />
        ))}
      </span>
      <p className="w-full text-xs md:text-base">{content}</p>
    </div>
  );
};

export default ReviewItem;
