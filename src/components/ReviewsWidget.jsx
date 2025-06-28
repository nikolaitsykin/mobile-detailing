import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Google } from "../assets/icons/google.svg";
import { ReactComponent as Star } from "../assets/icons/star.svg";
import {
  GOOGLE_BUSINESS_URL,
  GOOGLE_REVIEWS_URL,
  LEAVE_REVIEW_URL,
} from "../utils/constants";
import { reviews } from "../utils/data";
import ReviewItem from "./ReviewItem";
import Button from "./UI/Button";

const GoogleReview = () => {
  const stars = Array.from({ length: 5 }, (_, index) => <Star key={index} />);

  return (
    <div id="google_reviews" >
      <h2 className="pb-10 text-center">Spotless Reviews</h2>
      <div className="w-full flex justify-between">
        <div id="rating">
          <div className="flex items-center">
            <Google className="mr-2 w-[30%] sm:w-[50%]" />
          </div>
          <div  className="flex">
            <span className="py-2 pr-2 font-semibold">5.0</span>
            <span className="flex">{stars}</span>
          </div>
        </div>
        <div id="check_reviews_button_desktop">
          <Link target={"_blank"} to={GOOGLE_REVIEWS_URL}>
            <span className="hidden md:block underline text-blue text-center">
              Check out our Google Business Reviews for more!{" "}
            </span>
          </Link>
        </div>
        <div id="leave_review_button">
          <Link target={"_blank"} to={LEAVE_REVIEW_URL}>
            <Button children={"Leave a review"} color={"secondary"} />
          </Link>
        </div>
      </div>
      <div id="check_reviews_button_mobile">
        <Link target={"_blank"} to={GOOGLE_REVIEWS_URL}>
          <span className="md:hidden block underline text-blue text-center mt-5">
            Check out our Google Business Reviews for more!{" "}
          </span>
        </Link>
      </div>
      <div className="h-[290px] overflow-x-auto no-scrollbar mt-5">
        <Link target={"_blank"} to={GOOGLE_BUSINESS_URL}>
          <div className="flex flex-row justify-between items-start">
            {reviews
              .sort(() => 0.5 - Math.random())
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
    </div>
  );
};

export default GoogleReview;
