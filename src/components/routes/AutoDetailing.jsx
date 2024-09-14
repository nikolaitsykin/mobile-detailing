import React from "react";
import detailingImage from "../../assets/images/autodetailing.png";
import {
  essentialPackage,
  // deluxePackage,
  primePackage,
} from "../../utils/data";
import Package from "../Package";
import Addons from "./Addons";

const AutoDetailing = () => {
  return (
    <section className="bg-white pb-8 relative font-poppins">
      <div className="bg-black">
        <img
          className="w-full object-cover opacity-60 h-[450px]"
          src={detailingImage}
          alt="Auto detailing"
        />
      </div>
      <div className="w-[90%] md:w-[80%] mx-auto">
        <div className="w-[90%] md:w-[80%] mx-auto z-10 absolute top-32 md:top-32 left-1/2 -translate-x-1/2 text-center">
          <h1
            id="mobile-detailing"
            className="text-white animate-slidein300 opacity-0 text-3xl sm:text-4xl md:text-6xl w-full flex justify-center tracking-widest font-syne font-bold"
          >
            Mobile Detailing: Professional Car Care, Wherever You Are
          </h1>
        </div>
        <h2 className="text-black text-2xl text-center p-5 font-syne font-bold animate-slidein500 opacity-0 mt-2">
          Exterior and Interior Detailing
        </h2>
        <article className=" text-start text-black">
          <p className="text-sm md:text-base">
            Whether you’re at home, your apartment, or the office, we bring our
            services directly to you. Our fully equipped mobile detailing unit
            has everything we need to provide top-notch care for your vehicle.
            We do require access to a power and water supply, but once that’s
            arranged, we’ll take care of the rest. We proudly serve Raleigh,
            Cary, Holly Springs, and the surrounding areas. While there may be
            some location-based limitations or criteria, we always do our best
            to accommodate your needs and fit you into our schedule.
          </p>
          <p className="text-sm md:text-base">
            Washing a car might seem simple, but achieving a flawless finish
            requires more than just a quick rinse. If you're looking for a fast,
            budget-friendly wash, Detailing Guys might not be the right fit. We
            take detailing to the next level, both inside and out. Our advanced
            washing and drying techniques go beyond removing everyday dirt,
            grime, bird droppings, and dust—while minimizing surface scratches.
            <br />
            Inside, we use only safe, eco-friendly detergents, ensuring that
            every surface is thoroughly cleaned and conditioned. Our products
            are not just tough on messes but gentle enough for you, your kids,
            and your pets. With Detailing Guys, you get a pristine vehicle that
            looks and feels fresh, without compromising safety or quality.
            Experience detailing where every detail counts—because your family’s
            well-being matters.
          </p>
        </article>
      </div>
      <section className="w-[90%] md:w-[80%] mx-auto">
        <h2 className="text-black text-2xl text-center p-5 font-syne font-bold">
          Package Options
        </h2>
        <div className="w-full mx-auto">
          <Package packageType={essentialPackage} />
          <Package packageType={primePackage} />
          {/* <Package packageType={deluxePackage} /> */}
          {/* <Package packageType={regularWash} /> */}
        </div>
      </section>
      <section className="w-[90%] md:w-[80%] mx-auto">
        <h2 className="text-black text-2xl text-center p-5 font-syne font-bold">
          Addons
        </h2>
        <Addons />
      </section>
      <section className="w-[90%] md:w-[80%] mx-auto">
        <article className="text-black text-sm md:text-base w-full flex flex-col justify-center my-16">
          <h2
            id="how-we-do-it"
            className="text-black text-xl md:text-2xl text-center p-5 font-syne font-bold"
          >
            Say Goodbye to Mess and Hello to a Healthier, Cleaner Car with
            Eco-Friendly Detailing
          </h2>
          <p>
            Sick and tired of dirt, stains, and spills wreaking havoc on your
            car’s interior? These things can be detrimental not only to the
            condition of your vehicle but also to your own physical health. Our
            detail service will make your car look, smell, and feel like new
            again, and disinfect it from unhealthy contaminants. To do this, we
            use less water consuming techniques and eco steam technology, the
            market’s most effective and environmentally friendly cleaning
            solution.
          </p>
        </article>
      </section>
    </section>
  );
};

export default AutoDetailing;
