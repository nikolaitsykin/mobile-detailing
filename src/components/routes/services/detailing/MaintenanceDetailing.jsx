import React from "react";
import { Link } from "react-router-dom";
import {
  EXPRESS_FULL_DETAILING_PATH,
  ULTIMATE_FULL_DETAILING_PATH,
} from "../../../../utils/constants";
import { maintenanceFullDetail } from "../../../../utils/detailingPackages";
import Addons from "../../../Addons";
import Booking from "../../../Booking";
import Card from "../../../Card";
import ContactForm from "../../../ContactForm";
import Gallery from "../../../Gallery";
import GoogleReview from "../../../ReviewsWidget";

const MaintenanceDetailing = () => {
  const service = maintenanceFullDetail;

  return (
    <div
      id="exterior-detailing"
      className=" z-20 bg-white font-poppins w-full mx-auto"
    >
      <div className="w-full bg-black h-[250px] md:h-[450px] flex justify-center items-center mx-auto text-white top-20">
        <h1 className="text-center drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] mt-28">
          Maintenance Full Detailing{" "}
        </h1>
      </div>
      <div className="mx-auto">
        <section className="mt-12">
          <article className=" text-start text-black">
            <h3 className="text-center mx-auto mb-10 max-w-5xl">
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
              image={service.image}
              alt={service.alt}
              singleService
              duration={service.duration}
              link={service.link}
              bookingLink={service.bookingLink}
              suggestionHeader={service.suggestionHeader}
              suggestion={service.suggestion}
            />
          </article>
        </section>
        <section>
          <div className="text-sm md:text-base">
            <p>
              Monthly Detailing That Actually Protects — Inside and Out. Tired
              of seeing scratches and swirls after every $5 drive-thru wash?
              Those quick fixes can actually damage your paint. And on the
              inside, no matter how often you vacuum, the crumbs, odors, and pet
              hair just keep coming back.
              <br />
              <br />
              Our Maintenance Full Detailing package is designed for drivers who
              want their car consistently clean, fresh, and protected — every
              month. We’re not just wiping it down — we restore, refresh, and
              protect your vehicle using high-quality products and proven
              techniques.
              <br />
              <br />
              Exterior: Foam hand wash, clay bar treatment, and premium wax for
              up to 1 month of paint protection. <br />
              Interior: Full vacuum (including trunk), wipe-downs, steam-treated
              seats, and detailed vents and surfaces. <br />
              Every month: Stay ahead of buildup, wear, and grime — no more
              “catch-up cleaning.” It’s the perfect maintenance detail to keep
              your car looking and feeling its best, all year round. Ready to
              treat your car right? Let’s get your monthly spot booked.
              <br />
              <br />
              If you’re ready to take your car’s shine to the next level, try
              our{" "}
              <Link
                className="underline text-blue font-semibold"
                to={ULTIMATE_FULL_DETAILING_PATH}
              >
                Ultimate Full Detailing
              </Link>{" "}
              package, which adds clay bar treatment and ceramic sealant
              application for up to 6 months of protection for exterior services
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

export default MaintenanceDetailing;
