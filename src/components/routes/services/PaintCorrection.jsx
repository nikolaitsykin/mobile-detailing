import { businessName } from "../../../utils/data";
import Booking from "../../Booking";
import { paintCorrectionServices } from "../../../utils/detailingPackages";
import Card from "../../Card";
import { BASE_URL, PAINT_CORRECTION_PATH } from "../../../utils/constants";

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
          src="https://pub-47230ec8befa4d53953b33b120822d8f.r2.dev/ceramic_coating_collection.webp"
          alt="Car ceramic coating in Raleigh | Spotless Auto Detailing."
          className="w-full object-[25%_75%] object-cover h-[450px] md:h-[600px] mx-auto opacity-80"
        />
      </div>
      <div className="w-full object-cover h-[450px] md:h-[600px] top-20 flex justify-center items-center absolute  ">
        <div className="w-[90%] flex flex-col justify-center items-center text-white">
          <h1 className="whitespace-pre-line w-3/4 uppercase text-2xl md:text-5xl font-bold text-center drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
            Paint Correction {city ? "in " + city : ""}
          </h1>
          <h3 className="md:w-3/4 my-2 p-0 md:my-4 text-center text-xs sm:text-sm md:text-lg sm:mt-5 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
            Protect and Enhance: Premium Car Paint Correction near you. We
            provide service in {city ? city : "Raleigh"} and nearby areas.
          </h3>
        </div>
      </div>
      <section className="">
        <article className=" text-start text-black">
          <h2 className="">
            Advanced Nano-Ceramic Coating: The Future of Car Protection
          </h2>
          <p className="">
            What is Ceramic Coating? Ceramic coating is made from nano-ceramic
            particles that form a chemical bond with your car’s paintwork,
            creating a protective layer that is resistant to scratches, chips,
            and all sorts of damage. And the best part? It lasts for years
            without needing to be reapplied, which means less time and money
            spent on waxing and polishing your ride. ​ We offer top-of-the-line
            auto ceramic coating services that protect your car’s exterior. Our
            ceramic coating is made up of nano-ceramic particles that form a
            strong bond with your car’s paint, providing long-lasting protection
            against scratches, chips, UV rays, and other forms of damage.
            <br />
            <br />
            Inside, we use only safe, eco-friendly detergents, ensuring that
            every surface is thoroughly cleaned and conditioned. Our products
            are not just tough on messes but gentle enough for you, your kids,
            and your pets. With {businessName}, you get a pristine vehicle that
            looks and feels fresh, without compromising safety or quality.
            Experience detailing where every detail counts—because your family’s
            well-being matters.
          </p>
        </article>
      </section>
      <div className="mx-auto">
        <section className="">
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
