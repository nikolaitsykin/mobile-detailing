import React from "react";
import { ReactComponent as Google } from "../assets/icons/google.svg";
import { ReactComponent as Star } from "../assets/icons/star.svg";
import { fullBusinessName } from "../utils/data";

const Testimonials = () => {
  const stars = Array.from({ length: 5 }, (_, index) => <Star key={index} />);

  return (
    <div
      id="testimonials"
      className="flex flex-col md:flex-row gap-4 items-center"
    >
      <div className="basis-2/3">
        <h3 className="text-center">Make Your Car Look Brand New!</h3>
        <div className="flex justify-center items-center flex-wrap bg-light-gray py-2 mb-5">
          <div className="flex items-center">
            <span className="px-2 font-semibold items-center">Exellent</span>
            <Google className="px-2" />
          </div>
          <div className="flex items-center">
            <span className="px-2 font-semibold text-center">80+ 5-star reviews</span>
            <span className="flex px-2">{stars}</span>
          </div>
        </div>
        <p className="text-sm lg:text-base">
          At <strong>{fullBusinessName}</strong>, we don’t just clean cars — {" "}
          <strong>we restore, protect, and preserve them </strong> using expert
          techniques and premium, eco-friendly products. Whether you’re looking
          to bring your vehicle back to a like-new condition or maintain its
          showroom shine, our skilled detailing team delivers exceptional
          results at your home or on-site. Equipped with specialized tools and
          advanced methods, we’re committed to exceeding your expectations with
          every detail. Contact us today to schedule mobile or in-shop service.
        </p>
      </div>
      <div>
        <img
          loading="lazy"
          className="w-full max-w-xl align-start mb-3 px-4 py-1 rounded-sm overflow-hidden"
          src="https://pub-a032091c79624619ade299caa8a7dbc6.r2.dev/people%202.png"
          alt={"Smiling people"}
        />
      </div>
    </div>
  );
};

export default Testimonials;
