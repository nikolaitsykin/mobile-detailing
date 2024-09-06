import React from "react";
import ceramicImage from "../../assets/images/ceramic_coating.png";
import {
  basicCeramicCoating,
  primeCeramicCoating
} from "../../utils/data";
import Card from "../Card";

const Ceramic = () => {
  return (
    <section className="bg-white pb-8 relative">
      <div className="bg-black">
        <img
          className="w-full object-cover opacity-60"
          src={ceramicImage}
          alt="Auto detailing"
        />
      </div>
      <div className="w-[80%] mx-auto">
        <div className="w-[80%] z-10 absolute top-10 md:top-32 left-1/2 -translate-x-1/2 text-center">
          <h1
            id="auto-detailing"
            className="text-white animate-slidein300 opacity-0 text-2xl md:text-3xl lg:text-5xl w-full flex justify-center tracking-widest font-syne font-bold"
          >
            Ceramic Coating
          </h1>
        </div>
        <h2 className="text-black text-2xl text-center p-5 font-syne font-bold animate-slidein500 opacity-0">
          Auto Detailing
        </h2>
        <article className="text-sm md:text-base tracking-wide leading-6 animate-slidein700 opacity-0 text-start text-black">
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
      </div>
      <section className="w-[90%] mx-auto">
        <h2 className="text-black text-2xl text-center p-5 font-syne font-bold">
          Package Options
        </h2>
        <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-2">
          <Card
            title={basicCeramicCoating.title}
            description={basicCeramicCoating.description}
            image={basicCeramicCoating.image}
            services={basicCeramicCoating.services}
            border={"border"}
            price={basicCeramicCoating.price}
            
          />
          <Card
            title={primeCeramicCoating.title}
            description={primeCeramicCoating.description}
            image={primeCeramicCoating.image}
            services={primeCeramicCoating.services}
            border={"border"}
            price={primeCeramicCoating.price}
          />
        </div>
      </section>
    </section>
  );
};

export default Ceramic;
