import React from "react";
import { Link } from "react-router-dom";
import { SPOTLESS_FINISH_PATH } from "../../../../utils/constants";
import { deepCleaning } from "../../../../utils/detailingPackages";
import Addons from "../../../Addons";
import Booking from "../../../Booking";
import Card from "../../../Card";

const DeepCleaning = () => {
  const service = deepCleaning;

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
              Restore your car’s beauty with our professional full exterior and
              interior detailing services.
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
              Our Full Exterior and Interior Detailing package is all about
              quality. While we may not be the cheapest option, we offer
              exceptional value for our price. We don’t just "wash" your car—our
              detailing brings out a rich, long-lasting shine using premium
              products and meticulous attention, ensuring your car looks and
              feels its absolute best. <br />
              <br />
              Our skilled team handles it all, from dirt, grime, bird droppings,
              and bug stains on the exterior to dust, pet hair, and tough stains
              inside, leaving your car looking its absolute best.
              <br />
              <br />
              If you’re ready to take your car’s shine to the next level, try
              our{" "}
              <Link
                className="underline text-blue font-semibold"
                to={SPOTLESS_FINISH_PATH}
              >
                Spotless Finish
              </Link>{" "}
              exterior service, which adds clay bar treatment, gloss enhancment
              and ceramic coating application for up to 6 month of protection
              for exterior services and full vacuuming, steam cleaning,
              conditioning and UV protection to interior services. Book now for
              an exterior car wash experience that truly stands out!
            </p>
          </div>
        </section>
        <section className="w-[90%] md:w-[80%] mx-auto pb-10">
          <h2>Addons</h2>
          <Addons full />
        </section>
        <div id="booking" className="scroll-mb-[750px]"></div>
        <Booking />
      </div>
    </div>
  );
};

export default DeepCleaning;
