import React from "react";
import { Link } from "react-router-dom";
import {
  CERAMIC_COATING_PATH
} from "../../../../utils/constants";
import { ultimateFullDetail } from "../../../../utils/detailingPackages";
import Addons from "../../../Addons";
import Booking from "../../../Booking";
import Card from "../../../Card";
import ContactForm from "../../../ContactForm";
import Gallery from "../../../Gallery";
import GoogleReview from "../../../ReviewsWidget";

const UltimateFullDetailing = () => {
  const service = ultimateFullDetail;

  return (
    <div
      id="exterior-detailing"
      className=" z-20 bg-white font-poppins w-full mx-auto"
    >
      <div className="w-full bg-black h-[250px] md:h-[450px] flex justify-center items-center mx-auto text-white top-20">
        <h1 className="text-center drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] mt-28">
          Ultimate Full Detailing
        </h1>
      </div>
      <div className="mx-auto">
        <section className="">
          <article className=" text-start text-black">
            <h3 className="text-center mx-auto my-5 max-w-5xl">
              Complete car rejuvenation, exterior and interior detailing, 5-6
              hours, top-of-the-line products.
            </h3>
            <Card
              // title={service.title}
              // type={service.type}
              service={service}
              services={service.services}
              description={service.description}
              exteriorServices={service.exteriorServices}
              interiorServices={service.interiorServices}
              image={service.image}
              singleService
              duration={service.duration}
              link={service.link}
              bookingLink={service.bookingLink}
            />
          </article>
        </section>
        <section>
          <div className="text-sm md:text-base">
            <p>
              Tired of scratches and swirls on your car, even after all those $5
              car washes? Those drive-thru machines can actually harm your paint
              instead of helping it. Struggling with dirt, stains, and lingering
              odors inside your car? Quick vacuuming or basic cleaning often
              misses the details that matter most. Over time, spills, crumbs,
              pet hair, and daily wear can build up, making your car’s interior
              feel less inviting.
              <br />
              <br />
              Our Full Exterior package is all about quality. While we may not
              be the cheapest option, we offer exceptional value for our price.
              We don’t just "wash" your car—our detailing brings out a rich,
              long-lasting shine using premium products and meticulous
              attention, ensuring your car looks and feels its absolute best.
              Want more protection? Upgrade to{" "}
              <Link
                target={"_blank"}
                className="underline text-blue font-semibold"
                to={CERAMIC_COATING_PATH}
              >
                24 Months Graphene Ceramic Coating
              </Link>{" "}
              application for just $150.
              <br />
              <br />
              Our skilled team handles it all, from dirt, grime, bird droppings,
              and bug stains on the exterior to dust, pet hair, and tough stains
              inside, leaving your car looking its absolute best.
              <br />
              <br />
            </p>
          </div>
        </section>
        <div className=" w-[90%] md:w-[80%] mx-auto">
          <ContactForm />
        </div>
        <div className="w-[90%] md:w-[80%] mx-auto">
          <GoogleReview />
        </div>
        <div className="pt-10 w-[90%] md:w-[80%] mx-auto">
          <Gallery />
        </div>
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

export default UltimateFullDetailing;
