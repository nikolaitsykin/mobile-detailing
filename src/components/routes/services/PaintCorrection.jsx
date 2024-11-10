import React from "react";
import { businessName } from "../../../utils/data";
import {
  oneStepPaintCorrection,
  twoStepPaintCorrection
} from "../../../utils/services";
import Card from "../../Card";

const Polish = () => {
  return (
    <section id="paint-correction" className="bg-white  relative">
      <div className="bg-black">
        <img
          loading="lazy"
          className="w-full object-cover opacity-60"
          src="https://pub-47230ec8befa4d53953b33b120822d8f.r2.dev/AdobeStock_406854263.avif"
          alt="Auto detailing"
        />
      </div>
      <div className="w-[80%] mx-auto">
        <div className="w-[80%] z-10 absolute top-10 md:top-32 left-1/2 -translate-x-1/2 text-center">
          <h1 id="auto-detailing" className="text-white">
            PAINT CORRECTION
          </h1>
        </div>
        <h2>Paint correction</h2>
        <article className="">
          Washing a car may seem simple, but achieving a flawless finish
          requires more than just a quick rinse. At {businessName}, we take
          detailing to the next level, both inside and out. Our service goes
          beyond removing everyday dirt, grime, bird droppings, and dust—we use
          advanced washing and drying techniques that significantly reduce
          surface scratches. We also meticulously clean and condition every
          interior surface, ensuring your vehicle looks and feels pristine
          inside and out. Experience the difference, where every detail counts.
        </article>
      </div>
      <section className="w-[80%] mx-auto">
        <h2 className=" p-5 ">Package Options</h2>
        <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-2">
          <Card
            title={oneStepPaintCorrection.title}
            image={oneStepPaintCorrection.image}
            description={oneStepPaintCorrection.description}
            button={"BOOK NOW"}
            link={"booking"}
          />
          <Card
            title={twoStepPaintCorrection.title}
            image={twoStepPaintCorrection.image}
            description={twoStepPaintCorrection.description}
            button={"BOOK NOW"}
            link={"booking"}
          />
        </div>
      </section>
    </section>
  );
};

export default Polish;
