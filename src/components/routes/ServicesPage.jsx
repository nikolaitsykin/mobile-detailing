import React from "react";
import carImage from "../../assets/images/AdobeStock_198465715.jpeg";
import { sustainability } from "../../utils/data";
import Services from "../Services";

const ServicesPage = () => {
  return (
    <div className="w-full z-20 bg-white font-poppins pb-10">
      <div className="relative">
        <div className="w-[80%] mx-auto z-10 absolute top-40 md:top-40 left-1/2 -translate-x-1/2 text-center">
          <h1 className="text-white animate-slidein300 opacity-0 text-4xl sm:text-5xl md:text-6xl w-full flex justify-center tracking-widest font-syne font-bold">
            SERVICES
          </h1>
        </div>
        <div className="bg-black">
          <img
            className="w-full object-cover h-[450px] mx-auto opacity-40"
            src={carImage}
            alt="car"
          />
        </div>
      </div>
      <section className="w-[90%] md:w-[80%] mx-auto">
        <article className="text-black text-sm md:text-base w-full flex flex-col justify-center">
          <h2
            id="services"
            className="text-black text-2xl  text-center font-syne font-bold"
          >
            What we offer
          </h2>
          <div className="pt-5">
            <Services />
          </div>
        </article>
      </section>
      <section className="w-[90%] md:w-[80%] mx-auto">
        <article className="text-sm md:text-base text-start text-black">
          <h2
            id="embracing-sustainability"
            className="text-black text-2xl text-center p-5 font-syne font-bold"
          >
            Embracing Sustainability: Eco-Friendly Detailing for a Cleaner Car
            and a Greener Planet
          </h2>
          <p>
            In recent years, the demand for eco-friendly products has surged
            across industries, and the auto detailing world is no exception. At
            Detailing Guys, we’ve embraced this shift by prioritizing
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
              <h3 className="text-black text-lg font-syne font-semibold">
                {item.title}
              </h3>
              <p>{item.description}</p>
            </div>
          ))}
        </article>
      </section>
    </div>
  );
};

export default ServicesPage;
