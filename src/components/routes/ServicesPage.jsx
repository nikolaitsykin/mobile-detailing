import React from "react";
import {
  basicPackage,
  deluxePackage,
  primePackage,
  regularWash,
} from "../../data";
import Package from "../Package";

const Services = () => {
  return (
    <div className="bg-white py-8">
      <section className="w-[80%] mx-auto">
        <h1 className="text-3xl text-center text-black my-3">Services</h1>
        <article className="text-sm md:text-base tracking-wide leading-6 text-start text-black">
          Washing a car may seem simple, but achieving a flawless finish
          requires more than just a quick rinse. If you're looking for a fast,
          budget-friendly wash, we might not be the right fit. At Prime, we take
          detailing to the next level, both inside and out. Our service goes
          beyond removing everyday dirt, grime, bird droppings, and dust—we use
          advanced washing and drying techniques that significantly reduce
          surface scratches. We also meticulously clean and condition every
          interior surface, ensuring your vehicle looks and feels pristine
          inside and out. Experience the Prime difference, where every detail
          counts.
        </article>
      </section>
      <section className="w-[80%] mx-auto">
        <div className="w-full mx-auto">
          <Package packageType={basicPackage} />
          <Package packageType={primePackage} />
          <Package packageType={deluxePackage} />
          <Package packageType={regularWash} />
        </div>
      </section>
    </div>
  );
};

export default Services;
