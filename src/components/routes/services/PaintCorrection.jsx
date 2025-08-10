import { Link } from "react-router-dom";
import {
  BASE_URL,
  CERAMIC_COATING_PATH,
  PAINT_CORRECTION_PATH,
} from "../../../utils/constants";
import { fullBusinessName } from "../../../utils/data";
import { paintCorrectionServices } from "../../../utils/detailingPackages";
import Booking from "../../Booking";
import Card from "../../Card";

const PaintCorrection = () => {
  const city = localStorage.getItem("location");
  const canonical = document.querySelector("link[rel=canonical]");
  canonical.setAttribute("href", BASE_URL + PAINT_CORRECTION_PATH);
  const ogUrl = document.querySelector('meta[property="og:url"]');
  ogUrl.setAttribute("content", BASE_URL + PAINT_CORRECTION_PATH);

  return (
    <div id="mobile-detailing" className="w-full z-20 bg-white font-poppins">
      <div className="w-full bg-black">
        <div className="bg-black opacity-40 object-cover c w-full mx-auto absolute"></div>
        <img
          src="https://pub-47230ec8befa4d53953b33b120822d8f.r2.dev/Using-An-Orbital-Polisher.avif"
          alt="Car ceramic coating in Raleigh | Spotless Auto Detailing."
          className="w-full md:object-[25%_75%] object-cover  h-[450px] md:h-[600px] mx-auto opacity-80"
        />
      </div>
      <div className="w-full object-cover h-[450px] md:h-[600px] top-20 flex justify-center items-center absolute  ">
        <div className="w-[90%] flex flex-col justify-center items-center text-white">
          <h1 className="whitespace-pre-line w-3/4 uppercase text-2xl md:text-5xl font-bold text-center drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
            Professional Paint
            <br /> Correction {city ? "in " + city : ""}
          </h1>
          <h3 className="md:w-3/4 my-2 p-0 md:my-4 text-center text-xs sm:text-sm md:text-lg sm:mt-5 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
            Protect and Enhance: Premium Car Paint Correction near you. We
            provide best service in {city ? city : "Raleigh"} and nearby areas.
          </h3>
        </div>
      </div>
      <section>
        <article id="ceramic-coating" className="text-start text-black">
          <h2 className="text-center mx-auto mt-10 ">
            What’s A Paint Correction?
          </h2>
          <div className="flex flex-col md:flex-row-reverse items-start">
            <div className="aspect-w-4 aspect-h-3 w-full h-80 md:w-1/2 max-w-2xl mx-auto">
              <iframe
                src="https://youtu.be/4y62tg1qmHs?rel=0"
                title="YouTube video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
            <div className="md:w-1/2 flex flex-col justify-center">
              <p className="text-sm lg:text-base md:pl-5 mt-4 md:mt-0">
                Paint Correction is the process of removing swirls, oxidation,
                and light scratches that dull your vehicle’s shine in {city}’s
                sun and unpredictable weather. Think of it as resurfacing your
                paint to restore clarity, depth, and reflection. Using
                professional tools and compounds, we level imperfections in the
                clear coat without the need for repainting. The result is a
                dramatically enhanced finish that feels smooth and looks wet
                even in direct sunlight. If your car has lost its showroom gloss
                or you’re prepping it for ceramic coating, paint correction is
                the first step to bringing the surface back to life — and
                keeping it looking sharp.
              </p>
            </div>
          </div>
        </article>
      </section>
      <section className="mt-20">
        <article id="benefits">
          <h2 className="text-center mx-auto mt-10 ">
            What To Expect From Our Paint Correction Service in {city}
          </h2>
          <p className="pb-5">
            Paint correction isn’t a miracle—it’s just the right tools, skill,
            and care. <span className="font-bold">{fullBusinessName}</span>, we
            cut through the hype and focus on delivering real results that make
            a difference. Here’s what you can expect from a professionally
            executed paint correction service:
          </p>
          <div className="flex flex-col-reverse md:flex-row gap-2">
            <span className="flex items-center md:w-1/2">
              <img
                className="w-full max-h-80 md:pr-5"
                src="https://pub-47230ec8befa4d53953b33b120822d8f.r2.dev/mmexport1704511044904-1-scaled%20(1).webp"
                alt=""
              />
            </span>
            <span className="md:w-1/2">
              <ul>
                <li>
                  <span className="font-bold">Restored Clarity and Shine</span>:
                  Swirls, light scratches, and oxidation cloud your paint and
                  kill its shine. Paint correction levels these imperfections,
                  bringing back a clear, reflective finish.
                </li>
                <li>
                  <span className="font-bold">Better Base for Protection</span>:
                  If you’re planning to apply ceramic coating or wax, correction
                  gives you the perfect foundation. A smooth, defect-free
                  surface helps protection products bond better and last longer.
                </li>
                <li>
                  <span className="font-bold">Improved Resale Value</span>: A
                  well-maintained exterior says a lot. Paint correction helps
                  preserve your investment and adds value if you ever decide to
                  sell.{" "}
                </li>
                <li>
                  <span className="font-bold">No Repainting Needed</span>: Paint
                  correction removes defects from the clear coat—not the color
                  layer—so you get a refreshed look without the cost of new
                  paint.
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
            <span className="font-bold">Here’s the thing:</span> Paint
            correction on its own can make your vehicle look dramatically
            better—removing swirl marks, oxidation, and other paint defects. But
            if you're after long-term perfection and protection, pairing it with
            our{" "}
            <Link
              to={CERAMIC_COATING_PATH}
              target={"_blank"}
              className="font-bold text-blue underline underline-offset-2"
            >
              Ceramic Coating
            </Link>{" "}
            is the move. Correction brings out the best in your paint; coating
            locks it in for years. Skipping either step means you're leaving
            results—and longevity—on the table.{" "}
          </p>
          <div id="preparation" className="flex flex-col-reverse md:flex-row-reverse gap-2">
            <span className="flex items-center md:w-1/2">
              <img
                className="w-full object-cover max-h-80 md:pr-5"
                src="https://pub-47230ec8befa4d53953b33b120822d8f.r2.dev/Paint%20correction.avif"
                alt=""
              />
            </span>
            <span className="md:w-1/2">
              <p className="pb-5">
                That’s where skill matters. At{" "}
                <span className="font-bold">{fullBusinessName}</span>, we’ve
                seen the results of rushed or sloppy correction—holograms,
                uneven polishing, or worse, burned clear coat. Done right, paint
                correction safely removes imperfections and brings out the full
                potential of your vehicle’s paint. And {city}’s weather? It
                plays a role too. Humidity, pollen, and heat can all affect how
                polishing compounds perform. You need someone who understands
                how to adjust technique in real-world conditions—not just in a
                shop setting. <br />
                <br />
                <span className="font-bold">Bottom line:</span> Preparation is
                everything. We don’t cut corners because we know what it takes
                to do it right.
              </p>
            </span>
          </div>
        </article>
      </section>

      <div id="paint-correction-packages" className="mx-auto">
        <section className="">
          <h2 className="text-center mx-auto mt-10 pb-0">
            Paint Correction Packages
          </h2>

          {paintCorrectionServices.map((service) => (
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
                paintCorrectionAdditionalService={service.additional}
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

export default PaintCorrection;
