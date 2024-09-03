import React from "react";
import { Link } from "react-router-dom";
import detailingVideo from "../assets/videos/6158070-hd_1920_1080_30fps.mp4";
import Services from "./Services";
import Button from "./UI/Button";

const Hero = () => {
  return (
    <main className="w-full z-10 bg-white pb-8">
      <div className="relative">
        <div className="bg-black">
          <video
            className="opacity-40 object-cover min-h-[450px] w-full mx-auto"
            autoPlay
            loop
            playsInline
            muted
            type="video/mp4"
            src={detailingVideo}
          />
        </div>
        <div className="absolute top-28 md:top-32 lg:top-56 left-1/2 -translate-x-1/2 text-center w-[80%]">
          <h1 className="text-white text-xl md:text-4xl w-full flex justify-center">
            Mobile detailing service in Triagle area
          </h1>
          <p className="text-xs  md:text-sm text-white pt-5 w-full flex justify-center">
            Whether you want to protect your car or give it a clean look, we
            deliver top-quality service at the best prices. Trust us to enhance
            and safeguard your vehicle with the care it deserves.
          </p>
          <div className="pt-2 md:pt-5 flex flex-col xs:flex-row justify-center items-center">
            <span className="p-2 md:p-5">
              <Link to="/booking">
                <Button children={"BOOK NOW"} color={"primary"} />
              </Link>
            </span>
            <span className="md:p-2">
              <a href="tel:2673106864" className="flex">
                <Button children={"CALL NOW"} color={"primary"} />
              </a>
            </span>
          </div>
        </div>
        <section className="w-[80%] mx-auto py-5  my-5">
          <article className="text-black text-sm md:text-sm w-full flex flex-col justify-center">
            <h2 className="text-black text-2xl text-center p-5">
              We Bring Detailing to Your Doorstep
            </h2>
            Whether you’re at home, your apartment, or the office, we bring our
            services directly to you. Our fully equipped mobile detailing unit
            has everything we need to provide top-notch care for your vehicle.
            We do require access to a power and water supply, but once that’s
            arranged, we’ll take care of the rest. We proudly serve Raleigh,
            Cary, Holly Springs, and the surrounding areas. While there may be
            some location-based limitations or criteria, we always do our best
            to accommodate your needs and fit you into our schedule.
          </article>
        </section>
        <section className="w-[80%] mx-auto my-5 px-2 py-5 rounded-xl">
          <h2 className="text-black text-2xl text-center p-5">What we offer</h2>
          <div className="mx-auto">
            <Services />
          </div>
        </section>
      </div>
    </main>
  );
};

export default Hero;
