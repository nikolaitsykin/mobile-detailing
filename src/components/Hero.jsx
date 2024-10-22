import React from "react";
import { Link } from "react-router-dom";
import detailingVideo from "../assets/videos/6158070-hd_1920_1080_30fps.mp4";
import { BOOKING_PAGE_PATH } from "../utils/constants";
import Services from "./Services";
import Button from "./UI/Button";

const Hero = ({ city }) => {
  return (
    <div className="w-full bg-white ">
      <div className="w-full bg-black">
        <video
          className="opacity-40 object-cover h-[450px] md:h-[550px] w-full mx-auto"
          autoPlay
          loop
          playsInline
          muted
          type="video/mp4"
          src={detailingVideo}
          preload="none"
          controls
        />
      </div>
      <div className="w-full object-cover h-[300px] md:h-[450px] flex justify-center items-center absolute top-32 md:top-36">
        <div className="w-[90%] flex flex-col justify-center text-white">
          <h1 className="text-xs sm:text-base text-center font-light font-poppins p-4">
            Top-Tier Service in {city}, NC
          </h1>
          <h1 className="text-center drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] ">
            Spotless Auto Detailing
          </h1>
          <p className=" text-center text-xs md:text-lg pt-5 w-full drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
            Mobile Auto Detailing in {city} & Surrounding Areas.
          </p>
          <p className="font-poppins font-light text-center text-xs md:text-lg pb-5 w-full drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
            Whether you want to protect your car or give it a clean look, we
            deliver top-quality service.
          </p>
          <div className=" flex justify-center">
            <div className="min-w-48">
              <Link to={BOOKING_PAGE_PATH}>
                <Button children={"BOOK NOW"} color={"primary"} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <section>
        <article>
          <h2>Detailing to Your Doorstep</h2>
          <p>
            At Spotless Auto Detailing, we offer a range of high-quality mobile
            detailing services that bring the car care to your doorstep. We also
            specialize in ceramic coating for long-lasting protection and shine.
            Our fully equipped mobile detailing unit has everything we need to
            provide top-notch care for your vehicle. We do require access to a
            power and water supply, but once that’s arranged, we’ll take care of
            the rest. We proudly serve {city} and the surrounding areas. While
            there may be some location-based limitations or criteria, we always
            do our best to accommodate your needs and fit you into our schedule.
          </p>
        </article>
      </section>
      <section>
        <h2 id="services" className="text-center">
          Services
        </h2>
        <Services />
      </section>
    </div>
  );
};

export default Hero;
