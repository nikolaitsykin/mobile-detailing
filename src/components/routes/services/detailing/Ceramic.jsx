import { BASE_URL, CERAMIC_COATING_PATH } from "../../../../utils/constants";
import { ceramicCoating } from "../../../../utils/detailingPackages";
import Booking from "../../../Booking";
import Card from "../../../Card";
import Gallery from "../../../Gallery";
import GoogleReview from "../../../ReviewsWidget";

const Ceramic = () => {
  const service = ceramicCoating;
  const canonical = document.querySelector("link[rel=canonical]");
  canonical.setAttribute("href", BASE_URL + CERAMIC_COATING_PATH);
  console.log(canonical);

  return (
    <div
      id="exterior-detailing"
      className=" z-20 bg-white font-poppins w-full mx-auto"
    >
      <div className="w-full bg-black h-[200px] md:h-[300px] flex justify-center items-center mx-auto text-white top-20">
        <h1 className="text-center drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] mt-28">
          Ceramic Coating{" "}
        </h1>
      </div>
      <div className="mx-auto">
        <section className="mt-12">
          <article className=" text-start text-black">
            <h3 className="text-center mb-10">What’s A Ceramic Coating?</h3>
            <p className="mb-10">
              Ceramic Coating is a solid protective layer that prevents your
              vehicle from swirls and minor scratches in Raleigh's weather, not
              to mention its extreme heat resistance properties. Think of
              ceramic coating as a layer of paint protection superior to wax or
              sealants.
            </p>
            <h3 className="text-center mb-10">
              The Benefits Of A Ceramic Coating in Raleigh
            </h3>
            <p className="mb-10">
              Plenty of coating companies make bold claims about their products,
              and while there’s some truth to what they say, I prefer to keep
              things grounded and not exaggerate. Here’s what you can genuinely
              expect from a ceramic coating application:
            </p>
            <Card
              title={service.title}
              type={service.type}
              service={service}
              services={service.services}
              description={service.description}
              exteriorServices={service.exteriorServices}
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
            <h3 className="text-center mb-10">
              Common Myths About Ceramic Coatings
            </h3>
            <p>
              Absolutely, ceramic coatings are durable. Ceramic coatings offer
              impressive durability, but they’re not invincible armor for your
              vehicle. It’s vital to understand their limits. Coatings resist
              light swirls and scratches from proper washing and drying.
              However, they won’t prevent deeper scratches caused by negligence
              or dragging rough objects.
              <br />
              <br />
              Maintenance is key. Just like anything valuable, neglecting care
              will lead to gradual deterioration. Regular proper washing,
              drying, and occasional maintenance boosts are essential for the
              longevity of any ceramic coating application. Even a 6-year
              coating can degrade by year 3 without proper care.
              <br />
              <br />
            </p>
          </div>
        </section>
        <div className="w-[90%] md:w-[80%] mx-auto">
          <GoogleReview />
        </div>
        <div className="pt-10 w-[90%] md:w-[80%] mx-auto">
          <Gallery />
        </div>
        <div id="booking" className="scroll-mb-[750px]"></div>
        <Booking />
      </div>
    </div>
  );
};

export default Ceramic;
