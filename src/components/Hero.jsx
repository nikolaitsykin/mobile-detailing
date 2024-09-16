import React from "react";
import { useLocation } from "react-router-dom";
import Services from "./Services";

const Hero = () => {
  const location = useLocation();
  console.log(location);

  return (
    <div className="w-full z-20 bg-white font-poppins">
      <section>
        <h2 className="text-black text-2xl md:text-4xl text-center font-syne font-bold">
          Detailing to Your Doorstep
        </h2>
        <p className="text-sm md:text-base">
          Whether you’re at home, your apartment, or the office, we bring our
          services directly to you. Our fully equipped mobile detailing unit has
          everything we need to provide top-notch care for your vehicle. We do
          require access to a power and water supply, but once that’s arranged,
          we’ll take care of the rest. We proudly serve Raleigh, Cary, Holly
          Springs, and the surrounding areas. While there may be some
          location-based limitations or criteria, we always do our best to
          accommodate your needs and fit you into our schedule.
        </p>
      </section>
      <section>
        <h2
          id="services"
          className="text-2xl text-center text-black font-syne font-bold"
        >
          Services
        </h2>
        <Services />
      </section>
    </div>
  );
};

export default Hero;
