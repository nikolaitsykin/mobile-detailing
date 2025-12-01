import { Link } from "react-router-dom";
import { ReactComponent as Google } from "../assets/icons/google.svg";
import { ReactComponent as Star } from "../assets/icons/star.svg";
import {
  GOOGLE_BUSINESS_URL,
  GOOGLE_REVIEWS_URL,
  LEAVE_REVIEW_URL,
} from "../utils/constants";
import { ceramicReviews, fullBusinessName, reviews } from "../utils/data";
import ReviewItem from "./ReviewItem";
import Button from "./UI/Button";

const GoogleReview = () => {
  const stars = Array.from({ length: 5 }, (_, index) => <Star key={index} />);

  return (
    <div>
      <div id="testimonials">
        <h2 className="text-center">Make Your Car Look Brand New!</h2>
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <div className="basis-2/3">
            <div className="flex justify-center items-center flex-wrap bg-light-gray py-2 mb-5">
              <div className="flex items-center">
                <span className="px-2 font-semibold items-center">
                  Exellent
                </span>
                <Google className="px-2" />
              </div>
              <div className="flex items-center">
                <span className="px-2 font-semibold text-center">
                  200+ 5-star reviews
                </span>
                <span className="flex px-2">{stars}</span>
              </div>
            </div>
            <p className="text-sm lg:text-base ">
              At <strong>{fullBusinessName}</strong>, we don't just clean cars.{" "}
              <strong>We restore, protect, and preserve them </strong> with
              expert techniques and high-quality, eco-friendly professional
              products. Whether you want to make your vehicle look like new or
              keep it looking its best, our seasoned detailing team provides
              excellent results at your residence or on site. We possess the
              specialty equipment and tried-and-true techniques. We strive to
              exceed your expectations with every detail, leaving your car
              spotless. Contact us today to schedule our mobile or in-shop
              service.
            </p>
          </div>
          <div>
            <img
              loading="lazy"
              className="w-full max-w-2xl align-start mb-3 px-4 py-1 rounded-sm overflow-hidden"
              src="https://pub-a032091c79624619ade299caa8a7dbc6.r2.dev/people%202.png"
              alt={"Smiling Spotless Auto Detailing Team"}
            />
          </div>
        </div>
      </div>
      <div id="google_reviews" className="mt-10">
        <h2 className="pb-10 text-center">Spotless Reviews</h2>
        <div className="w-full flex justify-between">
          <div id="rating">
            <div className="flex items-center">
              <Google className="mr-2 w-[30%] sm:w-[50%]" />
            </div>
            <div className="flex">
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
        <div className="h-[290px] overflow-x-auto mt-5">
          <Link target={"_blank"} to={GOOGLE_BUSINESS_URL}>
            <div className="flex flex-row justify-between items-start">
              {ceramicReviews.map((item) => (
                <ReviewItem
                  name={item.name}
                  content={item.review}
                  rating={item.rating}
                  key={item.name}
                />
              ))}
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
    </div>
  );
};

export default GoogleReview;
