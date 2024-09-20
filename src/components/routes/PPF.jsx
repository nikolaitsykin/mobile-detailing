import React from "react";
import ppfImage from "../../assets/images/paint_protection.png";

const PPF = () => {
  return (
    <section className="bg-white relative">
      <div className="bg-black">
        <img
          className="w-full object-cover opacity-60"
          src={ppfImage}
          alt="Auto detailing"
        />
      </div>
      <div className="w-[80%] mx-auto">
        <div className="w-[80%] z-10 absolute top-10 md:top-32 left-1/2 -translate-x-1/2 text-center">
          <h1
            id="auto-detailing"
            className="text-white animate-slidein300 opacity-0 "
          >
            PPF
          </h1>
        </div>
        <h2 className="p-5  animate-slidein500 opacity-0">
          Auto Detailing
        </h2>
        <article className="">
          Washing a car may seem simple, but achieving a flawless finish
          requires more than just a quick rinse. If you're looking for a fast,
          budget-friendly wash, we might not be the right fit. At Detailing Guys, we take
          detailing to the next level, both inside and out. Our service goes
          beyond removing everyday dirt, grime, bird droppings, and dust—we use
          advanced washing and drying techniques that significantly reduce
          surface scratches. We also meticulously clean and condition every
          interior surface, ensuring your vehicle looks and feels pristine
          inside and out. Experience the difference, where every detail
          counts.
        </article>
      </div>
      <section className="w-[80%] mx-auto">
        <h2 className=" p-5 ">
          Package Options
        </h2>
        <div className="w-full mx-auto">
          
        </div>
      </section>
    </section>
  );
};

export default PPF;
