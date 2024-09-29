import React from "react";
import Services from "./Services";

const Hero = () => {
  return (
    <div className="w-full bg-white font-poppins ">
      <section>
        <h2 className="">Detailing to Your Doorstep</h2>
        <p className="">
          Whether you’re at home, your apartment, or the office, we bring our
          services directly to you. Our fully equipped mobile detailing unit has
          everything we need to provide top-notch care for your vehicle. We do
          require access to a power and water supply, but once that’s arranged,
          we’ll take care of the rest. We proudly serve Triangle and the
          surrounding areas. While there may be some location-based limitations
          or criteria, we always do our best to accommodate your needs and fit
          you into our schedule.
        </p>
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
