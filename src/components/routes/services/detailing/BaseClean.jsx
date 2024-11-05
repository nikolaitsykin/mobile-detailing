import React from "react";
import { Link } from "react-router-dom";
import {
  GOOGLE_REVIEWS_URL,
  WIPE_AND_CLEAN_PATH,
} from "../../../../utils/constants";
import { baseClean } from "../../../../utils/detailingPackages";
import Addons from "../../../Addons";
import Booking from "../../../Booking";
import Card from "../../../Card";
import EmbedWidget from "../../../ReviewsWidget";

const BaseClean = () => {
  const service = baseClean;

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
              Restore your car’s beauty with our professional interior detailing
              services.
            </h3>
            <Card
              title={service.title}
              type={service.type}
              service={service}
              steps={service.steps}
              image={service.image}
              singleService
              link={service.link}
              bestValue={service.bestValue}
            />
          </article>
        </section>
        <section>
          <div className="text-xs md:text-sm">
            <p>
              Refresh your car's interior with our Base Clean Interior Detailing
              Service! Our skilled technicians use premium eco-friendly
              products, and proven techniques to clean every inch, eliminating
              dust, dirt, and grime. Book today and enjoy a fresh, like-new feel
              on every drive!
              <br />
              <br />
              With Spotless Auto Detailing’s Base Clean Package, enjoy a
              thorough, high-quality clean that keeps your car looking and
              smelling its best. Reach out today for a pristine, refreshed
              interior that enhances both your driving experience and your car’s
              value.
              <br />
              <br />
              If you’re dealing with more dust, dirt, stains or extra mess, our{" "}
              <Link
                className="underline text-blue font-semibold"
                to={WIPE_AND_CLEAN_PATH}
              >
                Wipe & Clean
              </Link>{" "}
              interior service, is the perfect solution for a deeper clean,
              which adds trunk vacuuming and steam treatment to seats and touch
              points. Book now for an interior car detailing experience that
              truly stands out!
            </p>
          </div>
        </section>
        <div className="pt-10 w-[90%] md:w-[80%] mx-auto">
          <EmbedWidget src={GOOGLE_REVIEWS_URL} />
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

export default BaseClean;
