import React from "react";
import { Link } from "react-router-dom";
import { STEAM_AND_GUARD_PATH } from "../../../../utils/constants";
import { fullBusinessName } from "../../../../utils/data";
import { wipeAndClean } from "../../../../utils/detailingPackages";
import { setCanonical } from "../../../../utils/helpers";
import Addons from "../../../Addons";
import Booking from "../../../Booking";
import Card from "../../../Card";
import ContactForm from "../../../ContactForm";
import Gallery from "../../../Gallery";
import GoogleReview from "../../../ReviewsWidget";

const WipeAndClean = () => {
  const service = wipeAndClean;
  setCanonical(service.link);

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
          <div className="text-start text-black mt-12 w-[90%] md:w-[80%] mx-auto">
            <h3 className="text-center mb-10">
              Restore your car’s beauty with our professional interior detailing
              services.
            </h3>
            <Card
              title={service.title}
              type={service.type}
              service={service}
              services={service.services}
              description={service.description}
              interiorServices={service.interiorServices}
              steps={service.steps}
              image={service.image}
              singleService
              duration={service.duration}
              link={service.link}
              bestValue={service.bestValue}
            />
          </div>
          <div className="text-sm md:text-base">
            <p>
              Rejuvinate your car's interior with our Wipe & Clean Interior
              Detailing Service! Our skilled technicians use premium
              eco-friendly products, and proven techniques to clean every inch,
              eliminating dust, dirt, and grime. Book today and enjoy a fresh,
              like-new feel on every drive!
              <br />
              <br />
              With {fullBusinessName}’s Wipe & Clean Package, enjoy a thorough,
              high-quality clean that keeps your car looking and smelling its
              best. Reach out today for a pristine, refreshed interior that
              enhances both your driving experience and your car’s value.
              <br />
              <br />
              If you’re dealing with more dust, dirt, pet hair, tough stains, or
              extra mess, and want to keep your car looking its best, consider
              our{" "}
              <Link
                target={"_blank"}
                className="underline text-blue font-semibold"
                to={STEAM_AND_GUARD_PATH}
              >
                Steam & Guard
              </Link>{" "}
              interior service, which adds thorough interior and trunk
              vacuuming, steam cleaning, conditioning and UV protection to
              interior surfaces. Book now for an detailing car cleaing
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

export default WipeAndClean;
