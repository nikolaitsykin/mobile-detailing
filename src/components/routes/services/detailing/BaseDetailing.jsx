import React from "react";
import { Link } from "react-router-dom";
import { COMPLETE_DETAILING_PATH } from "../../../../utils/constants";
import { baseDetail } from "../../../../utils/detailingPackages";
import Addons from "../../../Addons";
import Booking from "../../../Booking";
import Card from "../../../Card";
import ContactForm from "../../../ContactForm";
import Gallery from "../../../Gallery";
import GoogleReview from "../../../ReviewsWidget";

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
              Restore your car’s beauty with our professional full exterior and
              interior detailing services.
            </h3>
            <Card
              title={service.title}
              type={service.type}
              service={service}
              services={service.services}
              description={service.description}
              exteriorServices={service.exteriorServices}
              interiorServices={service.interiorServices}
              steps={service.steps}
              image={service.image}
              alt={service.alt}
              singleService
              duration={service.duration}
              link={service.link}
              bestValue={service.bestValue}
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
              Our Full Exterior and Interior Detailing package is all about
              quality. While we may not be the cheapest option, we offer
              exceptional value for our price. We don’t just "wash" your car—our
              detailing brings out a rich, long-lasting shine using premium
              products and meticulous attention, ensuring your car looks and
              feels its absolute best.
              <br />
              <br />
              Our skilled team handles it all, from dirt, grime, bird droppings,
              and bug stains on the exterior to dust, pet hair, and stains
              inside, leaving your car looking its absolute best.
              <br />
              <br />
              If you’re ready to take your car’s shine to the next level, try
              our{" "}
              <Link
                className="underline text-blue font-semibold"
                to={COMPLETE_DETAILING_PATH}
              >
                Complete Detailing
              </Link>{" "}
              full detailing service, which adds clay bar treatment and wax
              application for up to 1 month of protection for exterior services
              and trunk vacuuming, steam treatment to seats and interior
              services. Book now for an exterior car wash experience that truly
              stands out!
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
          <h2>Addons</h2>
          <Addons full />
        </section>
        <div id="booking" className="scroll-mb-[750px]"></div>
        <Booking />
      </div>
    </div>
  );
};

export default BaseDetailing;
