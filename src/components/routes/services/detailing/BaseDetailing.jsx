import React from "react";
import { Link } from "react-router-dom";
import { DEEP_CLEANING_PATH } from "../../../../utils/constants";
import { baseDetail } from "../../../../utils/detailingPackages";
import Addons from "../../../Addons";
import Booking from "../../../Booking";
import Card from "../../../Card";

const BaseDetailing = () => {
  const service = baseDetail;

  return (
    <div
      id="exterior-detailing"
      className=" z-20 bg-white font-poppins w-full mx-auto"
    >
      <div className="w-full bg-black h-[250px] flex justify-center items-center mx-auto text-white">
        <h1 className="text-center drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] ">
          {service.title}{" "}
        </h1>
      </div>
      <div className="mx-auto">
        <section className="mt-12">
          <article className=" text-start text-black">
            <h3 className="text-center mb-10">
              Restore your car’s beauty with our professional exterior detailing
              services.
            </h3>
            <Card
              title={service.title}
              type={service.type}
              service={service}
              steps={service.steps}
              image={service.image}
              singleService
              duration={service.duration}
              link={service.link}
              bestValue={service.bestValue}
            />
          </article>
        </section>
        <section>
          <div className="text-xs md:text-sm">
            <p>
              Tired of scratches and swirls on your car, even after all those $5
              car washes? Those drive-thru machines can actually harm your paint
              instead of helping it. Our exterior car wash is a better choice,
              giving your car the care it really needs.
              <br />
              <br />
              While we may not be the cheapest option, we offer top-notch
              quality for our price. We don’t just “wash” your car—our exterior
              detailing is designed to bring out a deep, lasting shine with
              premium products and expert care.
              <br />
              <br />
              Our skilled team tackles everything from dirt and grime to bird
              droppings and bug stains, leaving your car looking its best.
              <br />
              <br />
              If you’re ready to take your car’s shine to the next level, try
              our{" "}
              <Link
                className="underline text-blue font-semibold"
                to={DEEP_CLEANING_PATH}
              >
                Deep Cleaning
              </Link>{" "}
              exterior service, which adds clay bar treatment and wax
              application for up to 1 month of protection for exterior services and trunk vacuuming, steam treatment to seats and interior services. Book now for an exterior car wash experience that truly
              stands out!
            </p>
          </div>
        </section>
        <section className="w-[90%] md:w-[80%] mx-auto pb-10">
          <h2>{service.type.split(" ")[0]} Addons</h2>
          <Addons type={service.type} />
        </section>
        <div id="booking" className="scroll-mb-[750px]"></div>
        <Booking />
      </div>
    </div>
  );
};

export default BaseDetailing;
