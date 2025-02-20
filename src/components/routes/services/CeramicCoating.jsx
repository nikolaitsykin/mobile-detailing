import React from "react";
import { Outlet } from "react-router-dom";
import { CERAMIC_COATING_PATH } from "../../../utils/constants";
import { businessName } from "../../../utils/data";
import {
  exteriorDetailingServices,
  mobileDetailingService,
} from "../../../utils/detailingPackages";
import Addons from "../../Addons";
import Booking from "../../Booking";
import SEO from "../../SEO";
import ServiceItem from "../../ServiceItem";

const CeramicCoating = () => {
  return (
    <div id="mobile-detailing" className="w-full z-20 bg-white font-poppins">
      <SEO
        type="ServicesPage"
        name="Ceramic Coating Protection"
        title="Ceramic Coating Services in Raleigh | Spotless Auto Detailing"
        description="Protect your car’s paint with our high-quality ceramic coating. Long-lasting shine, water resistance, and UV protection in Raleigh, NC."
        canonical={CERAMIC_COATING_PATH}
      />

      <div className="w-full bg-black">
        <img
          loading="lazy"
          className="w-full object-cover h-[300px] md:h-[450px] mx-auto opacity-50"
          src="https://pub-47230ec8befa4d53953b33b120822d8f.r2.dev/AdobeStock_397247724.jpeg"
          alt="Auto detailing"
        />
      </div>
      <div className="w-full object-cover h-[300px] md:h-[450px] flex justify-center items-center absolute top-16 md:top-28">
        <div className="w-[90%] flex flex-col justify-center text-white">
          <h1 className=" text-center drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] ">
            Ceramic Coating and Paint Correction in Raleigh, NC
          </h1>
        </div>
      </div>
      <section>
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
      <section className="w-[90%] md:w-[80%] mx-auto">
        <h2 id="exterior-detailing" className="">
          Mobile Detailing Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          {mobileDetailingService.map((item, index) => (
            <ServiceItem key={index} props={item} />
          ))}
          <Outlet />
        </div>
      </section>
      <div id="booking" className="scroll-mb-[750px]"></div>
      <Booking />
      <section className="w-[90%] md:w-[80%] mx-auto">
        <h2>{exteriorDetailingServices[0].type.split(" ")[0]} Addons</h2>
        <Addons type={exteriorDetailingServices[0].type} />
      </section>
      <section className="w-[90%] md:w-[80%] mx-auto pb-16">
        <article className=" w-full flex flex-col justify-center">
          <h2 id="how-we-do-it">
            Say Goodbye to Mess and Hello to a Healthier, Cleaner Car with
            Eco-Friendly Detailing
          </h2>
          <p>
            Sick and tired of dirt, stains, and spills wreaking havoc on your
            car’s interior? These things can be detrimental not only to the
            condition of your vehicle but also to your own physical health. Our
            detail service will make your car look, smell, and feel like new
            again, and disinfect it from unhealthy contaminants. To do this, we
            use less water consuming techniques and eco steam technology, the
            market’s most effective and environmentally friendly cleaning
            solution.
          </p>
        </article>
      </section>
    </div>
  );
};

export default CeramicCoating;
