import React from "react";
import Services from "./Services";

const Hero = () => {
  return (
    <div className="w-full z-20 bg-white pb-8 font-poppins">
      <div className="relative">
        <section className="w-[90%] md:w-[80%] mx-auto my-5">
          <article className="text-black text-sm md:text-sm w-full flex flex-col justify-center">
            <h2 className="text-black text-2xl text-center p-3 font-syne font-semibold">
              We Bring Detailing to Your Doorstep
            </h2>
            <p>
              Whether you’re at home, your apartment, or the office, we bring
              our services directly to you. Our fully equipped mobile detailing
              unit has everything we need to provide top-notch care for your
              vehicle. We do require access to a power and water supply, but
              once that’s arranged, we’ll take care of the rest. We proudly
              serve Raleigh, Cary, Holly Springs, and the surrounding areas.
              While there may be some location-based limitations or criteria, we
              always do our best to accommodate your needs and fit you into our
              schedule.
            </p>
          </article>
        </section>
        <section className="w-[90%] md:w-[80%] mx-auto my-5">
          <h2
            id="services"
            className="text-black text-2xl text-center p-5 font-syne font-bold"
          >
            OUR SERVICES
          </h2>
          <Services />
        </section>
        <section className="w-[90%] md:w-[80%] mx-auto">
          <article className="text-black text-sm md:text-sm w-full flex flex-col justify-center">
            <h3
              id="how-we-do-it"
              className="text-black text-2xl text-center p-5 mt-5 font-syne font-bold"
            >
              Say Goodbye to Mess and Hello to a Healthier, Cleaner Car with
              Eco-Friendly Detailing
            </h3>
            <p>
              Sick and tired of dirt, stains, and spills wreaking havoc on your
              car’s interior? These things can be detrimental not only to the
              condition of your vehicle but also to your own physical health.
              Our detail service will make your car look, smell, and feel like
              new again, and disinfect it from unhealthy contaminants. To do
              this, we use less water consuming techniques and eco steam
              technology, the market’s most effective and environmentally
              friendly cleaning solution.
            </p>
          </article>
        </section>
      </div>
    </div>
  );
};

export default Hero;
