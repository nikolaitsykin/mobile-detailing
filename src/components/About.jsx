import React from "react";
import { Link } from "react-router-dom";
import { ABOUT_PATH } from "../utils/constants";
import { businessName, fullBusinessName } from "../utils/data";
import BookButtons from "./UI/BookButtons";
import Button from "./UI/Button";
const About = ({ city }) => {
  return (
    <section className="w-full">
      <article className="text-black w-full">
        <h2 id="about-us">About {fullBusinessName}</h2>
        <div className="">
          <h4 className="">Who we are?</h4>
          <p className="text-sm md:text-base">
            {fullBusinessName} is honored to serve {city}, NC, and the nearby
            communities. We offer environmentally friendly car detailing
            services that make your car appear fantastic and are gentle on the
            environment. We bring high-quality mobile detailing right to you.
          </p>
        </div>
        <div className="pt-5">
          <h4 className="">Our mission</h4>
          <p className="text-sm md:text-base">
            It is our goal to offer premium car detailing and protection
            services using eco-friendly and safe products. Spotless Detailing
            makes it a point to think not just about your car but also about the
            environment, providing quality results using environmentally
            friendly options.{" "}
          </p>
        </div>
        <div className="pt-5">
          <h4 className="">Our values</h4>
          <p className="text-sm md:text-base">
            Having ranged from family vehicles to luxury and performance cars,
            we specialize in enhancing your driving experience and keeping your
            car's value. We are committed to sustainability and ensuring each
            detail is aligned with our eco-friendly values.
          </p>
        </div>
        <div className="my-5 pt-5">
          <Link to={ABOUT_PATH} target={"_blank"}>
            <Button color="secondary" children="Learn More" />
          </Link>
        </div>
        <h2 id="what-is-detailing">What is Car Detailing </h2>
        <div className="pt-5">
          <h4>More Than a Simple Wash & Polish</h4>
          <p className="text-sm md:text-base">
            Car detailing goes beyond a basic wash. It involves advanced,
            eco-friendly techniques to thoroughly clean, restore, and protect
            your vehicle inside and out. Our detailing process enhances both the
            look and longevity of your car by using safe,
            environmentally-friendly products.
          </p>
        </div>
        <div className="pt-5">
          <h4>Our approach</h4>
          <p className="text-sm md:text-base">
            At {businessName}, we partner with leading brands known for their
            innovative, high-performance products that respect the environment.
            Our eco-friendly, pH-balanced solutions ensure that your vehicle
            receives premium care without harming the planet. Every product we
            use is selected for its effectiveness and eco-conscious formulation.
          </p>
        </div>
        <p className="text-black text-lg md:text-xl text-center my-10 font-medium">
          Choose {businessName} for high-quality, eco-friendly detailing that
          protects both your car and the environment.
        </p>
        <div className="pb-10">
          <div className="min-w-48">
            <BookButtons color={"secondary"} />
          </div>
        </div>
        <p className="text-white text-[1px]">
          Ceramic Coating Raleigh / Ceramic Coating Apex / Ceramic Coating Cary/
          Ceramic Coating Holly Springs/ Ceramic Coating Garner / Paint
          Protection Film Raleigh / PPF Raleigh / PPF Apex / PPF Cary / PPF
          Holly Springs / PPF Garner / Modesta / Ceramic Coating / LLumar / STEK
          / GTechniq / Majestic Solutions / Detailing /{businessName} / Mobile
          Detailing Raleigh / Mobile Detailing Apex / Mobile Detailing Cary /
          Mobile Detailing Holly Springs / Mobile Detailing Garner / / Auto
          Detailing / Auto Detailing Raleigh / Auto Detailing Apex / Auto
          Detailing Cary / Auto Detailing / mobile detailing near me / apex
          mobile detailing /
        </p>
      </article>
    </section>
  );
};

export default About;
