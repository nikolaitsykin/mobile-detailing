import React from "react";
import { Outlet } from "react-router-dom";
import {
    detailingPackages,
    detailingServices,
  exteriorDetailingServices,
  mobileDetailingServices,
} from "../../../utils/detailingPackages";
import Addons from "../../Addons";
import Booking from "../../Booking";
import ServiceItem from "../../ServiceItem";
import ServiceTabs from "../../UI/ServiceTabs";

const MobileDetailing = () => {
  return (
    <div id="mobile-detailing" className="w-full z-20 bg-white font-poppins">
      <div className="w-full bg-black">
        <img
          loading="lazy"
          className="w-full object-cover h-[300px] md:h-[450px] mx-auto opacity-50"
          src="https://pub-47230ec8befa4d53953b33b120822d8f.r2.dev/AdobeStock_397247724.jpeg"
          alt="Auto detailing"
        />
      </div>
      <div className="w-full object-cover h-[300px] md:h-[450px] flex justify-center items-center absolute top-16 md:top-28">
        <div className="w-[90%] flex flex-col justify-center text-white">
          <h1 className=" text-center drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] ">
            Interior & Exterior Auto Detailing in Raleigh, NC
          </h1>
        </div>
      </div>
      <section>
        <article className="text-start text-black">
          <div className="flex flex-col md:flex-row mt-14">
            <span className="md:w-1/2 flex items-center">
              <img
                className="w-full object-cover object-right h-96 md:pr-5"
                src="https://pub-47230ec8befa4d53953b33b120822d8f.r2.dev/resize1.avif"
                alt=""
              />
            </span>
            <span className="md:w-1/2 flex flex-col justify-center">
              <h2 className="md:px-4 py-4 text-start">Exterior Detailing</h2>
              <p className="text-sm lg:text-base md:pl-5">
                If you want to ensure that your vehicle's exterior stays looking
                pristine, then it is important for them not only be cleaned
                regularly but also deep-cleaned on occasion. Scrapes and
                swirls can quickly wear away at the paint job over time while
                contaminants and chemical etching will leave dark spots in
                paint. Not to mention the strong Las Vegas sun can damage your
                cars paint. Ensure your car looks great with exterior auto
                detailing!
              </p>
            </span>
          </div>
          <div className="flex flex-col-reverse md:flex-row mt-10">
            <span className="md:w-1/2 flex flex-col justify-center">
              <h2 className="py-4 text-start">Interior Detailing</h2>
              <p className="text-sm lg:text-base md:pr-5">
                Car interiors are riddled with small cracks and crevices that
                become dirty over time. We specialize in the most difficult to
                reach places and will restore your interior to a level of clean
                you never knew was possible. We'll go over every inch of your
                interior so not one speck is left behind. With our steamers,
                extractors as well as professional staff who are experts at
                reconditioning, shampooing or deep cleaning any area--we have
                everything needed for an amazing job! Protect your cars interior
                by getting it detailed. Trust us when we say this will make
                driving more enjoyable.
              </p>
            </span>
            <span className="md:w-1/2">
              <img
                className="w-full object-cover h-96 md:pl-5"
                src="https://pub-47230ec8befa4d53953b33b120822d8f.r2.dev/resize2.avif"
                alt=""
              />
            </span>
          </div>
        </article>
      </section>
      <section className="w-[90%] md:w-[80%] mx-auto mt-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {mobileDetailingServices.map((item, index) => (
            <ServiceItem key={index} props={item} />
          ))}
          <Outlet />
        </div>
      </section>
      <div id="booking" className="scroll-mb-[750px]"></div>
      <Booking />
      <section className="w-[90%] md:w-[80%] mx-auto">
        <h2>{exteriorDetailingServices[0].type.split(" ")[0]} Addons</h2>
        <Addons type={exteriorDetailingServices[0].type} />
      </section>
      <section className="w-[90%] md:w-[80%] mx-auto pb-16">
        <article className=" w-full flex flex-col justify-center">
          <h2 id="how-we-do-it">
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
    </div>
  );
};

export default MobileDetailing;
