import React from "react";
import Services from "./Services";

const Hero = () => {
  return (
    <main className="w-full z-20 bg-white pb-8 font-poppins">
      <div className="relative">
        <section className="w-[90%] mx-auto my-5">
          <article className="text-black text-sm md:text-sm w-full flex flex-col justify-center">
            <h2 className="text-black text-2xl text-center p-3 font-syne ">
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
        <section className="w-[90%] mx-auto my-5">
          <h2
            id="services"
            className="text-black text-2xl text-center p-5 font-syne font-bold"
          >
            OUR SERVICES
          </h2>
          <Services />
        </section>
      </div>
    </main>
  );
};

export default Hero;
