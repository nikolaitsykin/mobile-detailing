import { Link } from "react-router-dom";
import {
  BASE_URL,
  ULTIMATE_FULL_DETAILING_PATH,
  ULTIMATE_INTERIOR_PATH,
} from "../../../../utils/constants";
import { fullBusinessName } from "../../../../utils/data";
import { ultimateInterior } from "../../../../utils/detailingPackages";
import Addons from "../../../Addons";
import Booking from "../../../Booking";
import Card from "../../../Card";
import ContactForm from "../../../ContactForm";
import Gallery from "../../../Gallery";
import GoogleReview from "../../../ReviewsWidget";

const UltimateInterior = () => {
  const service = ultimateInterior;
  const canonical = document.querySelector("link[rel=canonical]");
  canonical.setAttribute("href", BASE_URL + ULTIMATE_INTERIOR_PATH);
  console.log(canonical);

  return (
    <div
      id="exterior-detailing"
      className=" z-20 bg-white font-poppins w-full mx-auto"
    >
      <div className="w-full bg-black h-[250px] md:h-[450px] flex justify-center items-center mx-auto text-white top-20">
        <h1 className="text-center drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] mt-28">
          Ultimate Interior Detailing{" "}
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
              interiorServices={service.interiorServices}
              image={service.image}
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
              Rejuvinate your car's interior with our Ultimate Interior
              Detailing Service! Our skilled technicians use premium
              eco-friendly products, and proven techniques to clean every inch,
              eliminating dust, dirt, and grime. Book today and enjoy a fresh,
              like-new feel on every drive!
              <br />
              <br />
              With {fullBusinessName}’s Ultimate Package, enjoy a thorough,
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
                to={ULTIMATE_FULL_DETAILING_PATH}
              >
                Ultimate Full Detailing
              </Link>{" "}
              Full Detailing Package, which adds thorough exterior wash, wheels
              & wheel wells cleaning, black exterior plastics restoration, clay
              bar treatment and protective wax application. Book now for full
              detailing service experience that truly stands out!
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

export default UltimateInterior;
