import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Google } from "../assets/icons/google.svg";
import { ReactComponent as Star } from "../assets/icons/star.svg";
import { GOOGLE_BUSINESS_URL, GOOGLE_REVIEWS_URL } from "../utils/constants";
import { reviews } from "../utils/data";
import ReviewItem from "./ReviewItem";
import Button from "./UI/Button";

const GoogleReview = () => {
  const stars = Array.from({ length: 5 }, (_, index) => <Star key={index} />);

  return (
    <div>
      <h2 className="pb-10">What our customers say</h2>
      <div className="w-full flex justify-between">
        <div>
          <div className="flex items-center">
            <Google className="mr-2" />
            <span>My reviews</span>
          </div>
          <div className="flex">
            <span className="py-2 pr-2">5.0</span>
            <span className="flex">{stars}</span>
          </div>
        </div>
        <div>
          <Link to={GOOGLE_REVIEWS_URL}>
            <Button children={"Leave a review"} color={"secondary"} />
          </Link>
        </div>
      </div>
      <Link to={GOOGLE_BUSINESS_URL}>
        <div className="flex flex-col items-center justify-start sm:flex-row md:justify-between sm:items-start">
          {reviews
            .sort(() => 0.5 - Math.random())
            .slice(0, 3)
            .map((item) => (
              <ReviewItem
                name={item.name}
                content={item.review}
                rating={item.rating}
                key={item.name}
              />
            ))}
        </div>
      </Link>
    </div>
  );
};

export default GoogleReview;
