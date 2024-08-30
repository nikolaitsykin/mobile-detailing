import React from "react";
import {
  basicPackage,
  deluxePackage,
  primePackage,
  regularWash,
} from "../../constants";
import Package from "../Package";

const Services = () => {
  return (
    <section className="w-[75%] mx-auto mt-7">
      <h1 className="font-semibold text-xl text-center text-black my-3">
        Services
      </h1>
      <article className="text-sm md:text-base tracking-wide leading-6 text-start text-black">
        Washing a car may seem simple, but achieving a flawless finish requires
        more than just a quick rinse. If you're looking for a fast,
        budget-friendly wash, we might not be the right fit. At Prime, we take
        detailing to the next level, both inside and out. Our service goes
        beyond removing everyday dirt, grime, bird droppings, and dust—we use
        advanced washing and drying techniques that significantly reduce surface
        scratches. We also meticulously clean and condition every interior
        surface, ensuring your vehicle looks and feels pristine inside and out.
        Experience the Prime difference, where every detail counts.
      </article>
      <div className="bg-gray my-3 rounded-xl">
        <Package packageType={basicPackage} />
      </div>
      <div className="bg-gray my-3 rounded-xl">
        <Package packageType={primePackage} />
      </div>
      <div className="bg-gray my-3 rounded-xl">
        <Package packageType={deluxePackage} />
      </div>
      <div className="bg-gray my-3 rounded-xl">
        <Package packageType={regularWash} />
      </div>
    </section>
  );
};

export default Services;
