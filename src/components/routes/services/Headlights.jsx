import React from "react";
import headlightImage from "../../../assets/images/headlights_restoration.avif";
import Card from "../../Card";
import {
  basicHeadlightRestoration,
  primeHeadlightRestoration,
} from "../../../utils/services";

const Headlights = () => {
  return (
    <section id="headlights-restoration" className="bg-white  relative">
      <div className="bg-black">
        <img
          className="w-full object-cover opacity-60"
          src={headlightImage}
          alt="Auto detailing"
        />
      </div>
      <div className="w-[90%] mx-auto">
        <div className="w-full z-10 absolute top-10 md:top-32 left-1/2 -translate-x-1/2 text-center">
          <h1
            id="auto-detailing"
            className="text-white"
          >
            Headlights Restoration
          </h1>
        </div>
        <h2 className=" p-5">
          Auto Detailing
        </h2>
        <article>
          Washing a car may seem simple, but achieving a flawless finish
          requires more than just a quick rinse. At Prime, we take
          detailing to the next level, both inside and out. Our service goes
          beyond removing everyday dirt, grime, bird droppings, and dust—we use
          advanced washing and drying techniques that significantly reduce
          surface scratches. We also meticulously clean and condition every
          interior surface, ensuring your vehicle looks and feels pristine
          inside and out. Experience the Prime difference, where every detail
          counts.
        </article>
      </div>
      <section className="w-[90%] mx-auto">
        <h2 className="text-black text-2xl text-center p-5">
          Package Options
        </h2>
        <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-2">
          <Card
            title={basicHeadlightRestoration.title}
            description={basicHeadlightRestoration.description}
            image={basicHeadlightRestoration.image}
            services={basicHeadlightRestoration.services}
            border={"border"}
            price={basicHeadlightRestoration.price}
            
          />
          <Card
            title={primeHeadlightRestoration.title}
            description={primeHeadlightRestoration.description}
            image={primeHeadlightRestoration.image}
            services={primeHeadlightRestoration.services}
            border={"border"}
            price={primeHeadlightRestoration.price}
          />
        </div>
      </section>
    </section>
  );
};

export default Headlights;
