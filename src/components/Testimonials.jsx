import React from "react";
import { ReactComponent as Google } from "../assets/icons/google.svg";
import { ReactComponent as Star } from "../assets/icons/star.svg";
import { fullBusinessName } from "../utils/data";

const Testimonials = () => {
  const stars = Array.from({ length: 5 }, (_, index) => <Star key={index} />);

  return (
    <div id="testimonials">
      <h2 className="text-center">Make Your Car Look Brand New!</h2>
      <div className="flex flex-col md:flex-row gap-4 items-center">
        <div className="basis-2/3">
          <div className="flex justify-center items-center flex-wrap bg-light-gray py-2 mb-5">
            <div className="flex items-center">
              <span className="px-2 font-semibold items-center">Exellent</span>
              <Google className="px-2" />
            </div>
            <div className="flex items-center">
              <span className="px-2 font-semibold text-center">
                100+ 5-star reviews
              </span>
              <span className="flex px-2">{stars}</span>
            </div>
          </div>
          <p className="text-sm lg:text-base ">
            At <strong>{fullBusinessName}</strong>, we don't just clean cars.{" "}
            <strong>We restore, protect, and preserve them </strong> with expert
            techniques and high-quality, eco-friendly professional products.
            Whether you want to make your vehicle look like new or keep it
            looking its best, our seasoned detailing team provides excellent
            results at your residence or on site. We possess the specialty
            equipment and tried-and-true techniques. We strive to exceed your
            expectations with every detail, leaving your car spotless. Contact
            us today to schedule our mobile or in-shop service.
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
  );
};

export default Testimonials;
