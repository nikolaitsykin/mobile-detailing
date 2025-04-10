import React from "react";
import { Link } from "react-router-dom";
import { EXPRESS_EXTERIOR_PATH, ULTIMATE_EXTERIOR_PATH } from "../../../../utils/constants";
import { expressExterior } from "../../../../utils/detailingPackages";
import Addons from "../../../Addons";
import Booking from "../../../Booking";
import Card from "../../../Card";
import ContactForm from "../../../ContactForm";
import Gallery from "../../../Gallery";
import GoogleReview from "../../../ReviewsWidget";
import SEO from "../../../SEO";

const ExpressExterior = () => {
  const service = expressExterior;

  return (
    <div
      id="exterior-detailing"
      className=" z-20 bg-white font-poppins w-full mx-auto"
    >
      <SEO
        type="ServicesPage"
        name="Express Exterior Detailing"
        title="Express Exterior Car Detailing | Spotless Auto Detailing"
        description="Quick and efficient exterior car detailing in Raleigh. Our express service includes a hand wash, wax, and rim cleaning for a spotless shine."
        canonical={EXPRESS_EXTERIOR_PATH}
      />
      <div className="w-full bg-black h-[450px] flex justify-center items-center mx-auto text-white top-20">
        <h1 className="text-center drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] ">
          {service.title}
        </h1>
      </div>
      <div className="mx-auto">
        <section className="">
          <article className=" text-start text-black">
            <h3 className="text-center mx-auto my-5 max-w-5xl">
              {service.shortDescription}
            </h3>
            <Card
              // title={service.title}
              // type={service.type}
              service={service}
              services={service.services}
              description={service.description}
              exteriorServices={service.exteriorServices}
              steps={service.steps}
              image={service.image}
              singleService
              duration={service.duration}
              link={service.link}
            />
          </article>
        </section>
        <section>
          <div className="text-sm md:text-base">
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
                target={"_blank"}
                className="underline text-blue font-semibold"
                to={ULTIMATE_EXTERIOR_PATH}
              >
                Ultimate Exterior
              </Link>{" "}
              exterior service, which adds clay bar treatment, gloss enhancement
              and ceramic sealant application for up to 6 month of protection
              for an unbeatable finish. Book now for an exterior car detailing
              experience that truly stands out!
            </p>
          </div>
        </section>
        <div className=" w-[90%] md:w-[80%] mx-auto">
          <ContactForm />
        </div>
        <div className=" w-[90%] md:w-[80%] mx-auto">
          <GoogleReview />
        </div>
        <div className="pt-10 w-[90%] md:w-[80%] mx-auto">
          <Gallery />
        </div>
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

export default ExpressExterior;
