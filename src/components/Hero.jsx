import React from "react";
import Services from "./Services";
import { fullBusinessName } from "../utils/data";
import { Link } from "react-router-dom";
import Button from "./UI/Button";
import { BOOKING_PAGE_PATH } from "../utils/constants";
import detailingVideo from "../assets/videos/6158070-hd_1920_1080_30fps.mp4";

const Hero = () => {
  return (
    <div className="w-full bg-white ">
      <div className="w-full bg-black">
        <video
          className="opacity-50 object-cover h-[450px] md:h-[550px] w-full mx-auto"
          autoPlay
          loop
          playsInline
          muted
          type="video/mp4"
          src={detailingVideo}
        />
      </div>
      <div className="w-full object-cover h-[300px] md:h-[450px] flex justify-center items-center absolute top-32 md:top-36">
        <div className="w-[90%] flex flex-col justify-center text-white">
          <h1 className="animate-slidein500 text-center opacity-0 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] ">
            Spotless Auto Detailing
          </h1>
          <p className="animate-slidein700 text-center opacity-0 text-xs md:text-lg pt-5 w-full drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
            Mobile Car Detailing in Raleigh & Surrounding Areas.
          </p>
          <p className="animate-slidein700 text-center opacity-0 text-xs md:text-lg pb-5 w-full drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
            Whether you want to protect your car or give it a clean look, we
            deliver top-quality service.
          </p>
          <div className="animate-slidein700 opacity-0  flex justify-center">
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
            At Spotless Auto Detailing, we offer a range of high-quality
            mobile detailing services that bring the car care to your doorstep.
            From exterior detailing like Quick Wash , Wash & Wax and Shine &
            Shield to deep interior cleaning such as ,Quick Clean, Wipe & Clean
            and Steam & Guard, we’ve got you covered. We also specialize in
            paint correction and ceramic coating for long-lasting protection and
            shine. Our fully equipped mobile detailing unit has everything we
            need to provide top-notch care for your vehicle. We do require
            access to a power and water supply, but once that’s arranged, we’ll
            take care of the rest. We proudly serve Raleigh and the surrounding
            areas. While there may be some location-based limitations or
            criteria, we always do our best to accommodate your needs and fit
            you into our schedule.
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
