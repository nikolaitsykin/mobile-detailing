import React from "react";
import { sustainability } from "../../utils/sustainability";
import Services from "../Services";
import image from "../../assets/images/AdobeStock_198465715.jpeg";
import { businessName } from "../../utils/data";

const ServicesPage = () => {
  return (
    <div className="w-full z-20 bg-white font-poppins pb-10">
      <div className="w-full bg-black">
        <img
          className="w-full object-cover h-[300px] md:h-[450px] mx-auto opacity-50"
          src={image}
          alt="car"
        />
      </div>
      <div className="w-full object-cover h-[300px] md:h-[450px] flex justify-center items-center absolute top-16 md:top-28">
        <div className="w-[90%] flex flex-col justify-center text-white">
          <h1 className="animate-slidein500 text-center opacity-0 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] ">
            Services
          </h1>
        </div>
      </div>
      <section className="w-[90%] md:w-[80%] mx-auto">
        <article className="">
          <h2 id="services" className="">
            What we offer
          </h2>
          <div className="pt-5">
            <Services />
          </div>
        </article>
      </section>
      <section className="w-[90%] md:w-[80%] mx-auto">
        <article className="px-5 py-0">
          <h2 id="embracing-sustainability" className="px-5 ">
            Embracing Sustainability: Eco-Friendly Detailing for a Cleaner Car
            and a Greener Planet
          </h2>
          <p>
            In recent years, the demand for eco-friendly products has surged
            across industries, and the auto detailing world is no exception. At
            {businessName}, we’ve embraced this shift by prioritizing
            sustainability in everything we do. Eco-friendly detailing supplies
            have become the go-to choice for car owners and professionals who
            care about reducing their environmental footprint. From
            biodegradable cleaners to reusable towels, the industry now offers a
            wide range of eco-conscious options that deliver exceptional results
            without harm. Let us introduce you to some of the best sustainable
            vehicle detailing products and techniques we use to keep your car
            looking great—while protecting the planet.
          </p>
          {sustainability.map((item, index) => (
            <div className="my-4" key={index}>
              <h5 className="">{item.title}</h5>
              <p>{item.description}</p>
            </div>
          ))}
        </article>
      </section>
    </div>
  );
};

export default ServicesPage;
