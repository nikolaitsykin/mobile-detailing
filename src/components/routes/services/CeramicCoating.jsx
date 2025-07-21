import { Link } from "react-router-dom";
import {
  BASE_URL,
  CERAMIC_COATING_PATH,
  PAINT_CORRECTION_PATH,
} from "../../../utils/constants";
import { fullBusinessName } from "../../../utils/data";
import { ceramicCoatingServices } from "../../../utils/detailingPackages";
import Booking from "../../Booking";
import Card from "../../Card";

const CeramicCoating = () => {
  const city = localStorage.getItem("location");
  const canonical = document.querySelector("link[rel=canonical]");
  canonical.setAttribute("href", BASE_URL + CERAMIC_COATING_PATH);
  const ogUrl = document.querySelector('meta[property="og:url"]');
  ogUrl.setAttribute("content", BASE_URL + CERAMIC_COATING_PATH);

  return (
    <div id="mobile-detailing" className="w-full z-20 bg-white font-poppins">
      <div className="w-full bg-black">
        {/* <div className="bg-black opacity-40 object-cover w-full mx-auto absolute"></div> */}
        <img
          src="https://pub-47230ec8befa4d53953b33b120822d8f.r2.dev/ceramic_coating_collection.webp"
          alt="Car ceramic coating in Raleigh | Spotless Auto Detailing."
          className="w-full object-[25%_75%] object-cover h-[450px] md:h-[600px] mx-auto opacity-80"
        />
      </div>
      <div className="w-full object-cover h-[450px] md:h-[600px] top-10 flex justify-center items-center absolute  ">
        <div className="w-[90%] flex flex-col justify-center items-center text-white">
          <h1 className="whitespace-pre-line uppercase text-2xl md:text-5xl font-bold text-center drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
            Professional Ceramic Coating
            <br /> in {city}, NC
          </h1>
          <h3 className="md:w-3/4 my-2 p-0 md:my-4 text-center text-xs sm:text-base md:text-xl sm:mt-5 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
            Ceramic Coating offers unmatched durability, resisting swirls,
            scratches, UV rays, and dirt while delivering a stunning shine. With
            its heat resistance and hydrophobic properties, it keeps your car
            cleaner, longer—no constant waxing needed.
          </h3>
        </div>
      </div>
      <section>
        <article id="ceramic-coating" className="text-start text-black">
          <h2 className="text-center mx-auto mt-10 ">
            What’s A Ceramic Coating?
          </h2>
          <div className="flex flex-col md:flex-row-reverse items-start">
            <div className="aspect-w-4 aspect-h-3 w-full h-80 md:w-1/2 max-w-2xl mx-auto">
              <iframe
                src="https://www.youtube.com/embed/78ZROAOvTDY?rel=0"
                title="YouTube video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
            <div className="md:w-1/2 flex flex-col justify-center">
              <p className="text-sm lg:text-base md:pl-5 mt-4 md:mt-0">
                Ceramic Coating is a solid protective layer that prevents your
                vehicle from swirls and minor scratches in {city}'s weather, not
                to mention its extreme heat resistance properties. Think of
                ceramic coating as a layer of paint protection superior to wax
                or sealants. Once it dries, it becomes a hard long-term paint
                protection, that strongly resists contaminations. Coatings have
                self-cleaning properties making it easy to fight rain acid,
                dirt, UV, chemicals, bird droppings and whatever else the
                universe throws at your car. If the idea of reapplying wax to
                your car every three months doesn’t sound appealing, then this
                is exactly what you need. With its fantastic hydrophobic
                properties you’ll see your car repelling water like never
                before.
              </p>
            </div>
          </div>
        </article>
      </section>
      <section className="mt-20">
        {/* <article className="text-start text-black">
          <h2 className="text-center mx-auto mt-10 ">
            Why Choose Spotless Auto Detailing for Ceramic Coating?
          </h2>
          <div className="flex flex-col-reverse md:flex-row gap-2">
            <span className="flex items-center">
              <img
                className="w-full object-cover max-h-80 md:pr-5"
                src="https://pub-47230ec8befa4d53953b33b120822d8f.r2.dev/ceramic-coating-for-cars.jpeg.webp"
                alt=""
              />
            </span>
            <ul className="text-sm md:text-xl lg:text-2xl">
              <li>✔️ Convenience of mobile service</li>
              <li>✔️ {city}‑area expertise</li>
              <li>✔️ Trained technicians, C.A.R.E. certified</li>
              <li>✔️ 100+ 5-star reviews</li>
              <li>✔️ Premium ceramic coating packages</li>
            </ul>
          </div>
        </article> */}
        <article id="benefits">
          <h2 className="text-center mx-auto mt-10 ">
            The Benefits of Ceramic Coating in {city}
          </h2>
          <p className="pb-5">
            There’s a lot of hype around ceramic coatings—and while some of it
            is overblown, we like to keep it real. At{" "}
            <span className="font-bold">{fullBusinessName}</span>, we focus on
            delivering long-term protection and visible results, without the
            marketing fluff. Here’s what you can actually expect from a
            professionally applied ceramic coating:
          </p>
          <div className="flex flex-col-reverse md:flex-row gap-2">
            <span className="flex items-center md:w-1/2">
              <img
                className="w-full max-h-80 md:pr-5"
                src="https://pub-47230ec8befa4d53953b33b120822d8f.r2.dev/ceramic_before_after.avif"
                alt=""
              />
            </span>
            <span className="md:w-1/2">
              <ul>
                <li>
                  <span className="font-bold">Long-Term Protection</span>: When
                  properly applied, ceramic coatings provide durable protection
                  from UV rays, road grime, bird droppings, and the
                  unpredictable North Carolina weather—for up to several years.
                </li>
                <li>
                  <span className="font-bold">
                    One Application, Lasting Results
                  </span>
                  : Unlike waxes and sealants that wear off quickly, a single
                  ceramic coating treatment offers lasting performance with
                  minimal upkeep.
                </li>
                <li>
                  <span className="font-bold">Deep, Glossy Finish</span>:{" "}
                  Ceramic coating enhances your car’s paintwork, creating a
                  slick, glass-like finish that adds depth and brilliance.
                </li>
                <li>
                  <span className="font-bold">Hydrophobic Properties</span>:{" "}
                  Water, dirt, and debris slide right off. The self-cleaning
                  effect helps keep your vehicle looking cleaner between washes,
                  saving you time and effort.
                </li>
              </ul>
            </span>
          </div>
        </article>
        <article id="preparation">
          <h2 className="text-center mx-auto mt-10 ">
            The Preparation Matters
          </h2>
          <p className="pb-5">
            <span className="font-bold">Here’s the thing:</span> For ceramic
            coating to really shine—literally and functionally—your vehicle
            should go through{" "}
            <Link
              to={PAINT_CORRECTION_PATH}
              target={"_blank"}
              className="font-bold text-blue"
            >
              Paint Correction
            </Link>{" "}
            first. Skipping this step means the coating might seal in
            imperfections like swirl marks or oxidation, and you won’t get that
            flawless, mirror-like finish you're expecting.{" "}
          </p>
          <div className="flex flex-col-reverse md:flex-row-reverse gap-2">
            <span className="flex items-center md:w-1/2">
              <img
                className="w-full object-cover max-h-80 md:pr-5"
                src="https://pub-47230ec8befa4d53953b33b120822d8f.r2.dev/preparation.avif"
                alt=""
              />
            </span>
            <span className="md:w-1/2">
              <p className="pb-5">
                That’s why having a skilled installer matters. At{" "}
                <span className="font-bold">{fullBusinessName}</span>, we’ve
                seen what happens when coatings are rushed or done without the
                right prep—high spots, streaks, or uneven layers that don’t bond
                correctly to the paint. Those smudges? They’re avoidable with
                proper care and technique. Also, the more durable the coating
                (think 5+ years), the more precision the application demands.
                And yes, {city} weather can factor in—humidity, temperature, and
                even pollen can affect how the coating settles. <br />
                <br />
                <span className="font-bold">Bottom line:</span> Preparation is
                everything. We don’t cut corners because we know what it takes
                to do it right.
              </p>
            </span>
          </div>
        </article>
      </section>
      <div id="ceramic-coating-packages" className="mx-auto">
        <section className="">
          <h2 className="text-center mx-auto mt-10 pb-0">
            Ceramic Coating Packages
          </h2>
          {ceramicCoatingServices.map((service) => (
            <div key={service.id}>
              <h3 className="text-center mx-auto my-5 max-w-5xl">
                {service.title}
              </h3>
              <h5 className="mb-2">{service.shortDescription}</h5>
              <Card
                title={service.title}
                // type={service.type}
                service={service}
                services={service.services}
                description={service.description}
                exteriorServices={service.exteriorServices}
                image={service.image}
                singleService
                duration={service.duration}
                link={service.link}
                bookingLink={service.bookingLink}
                suggestionHeader={service.suggestionHeader}
                suggestion={service.suggestion}
              />
            </div>
          ))}
        </section>
      </div>
      <section className="bg-white z-100  top-[1400px] w-full">
        <div id="booking" className="scroll-mb-[750px] bg-white  w-full z-10">
          <Booking />
        </div>
      </section>
    </div>
  );
};

export default CeramicCoating;
