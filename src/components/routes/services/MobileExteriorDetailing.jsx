import React from "react";
import { Outlet } from "react-router-dom";
import detailingImage from "../../../assets/images/AdobeStock_397247724.jpeg";
import {
  BOOKING_PATH,
  MOBILE_EXTERIOR_DETAILING_BOOKING_PATH
} from "../../../utils/constants";
import { businessName } from "../../../utils/data";
import {
  exteriorDetailingServices
} from "../../../utils/services";
import Addons from "../../Addons";
import Booking from "../../Booking";
import Card from "../../Card";

const AutoDetailing = () => {
  return (
    <div id="exterior-detailing" className="w-full z-20 bg-white font-poppins">
      <div className="w-full bg-black">
        <img
          className="w-full object-cover h-[300px] md:h-[450px] mx-auto opacity-50"
          src={detailingImage}
          alt="car"
        />
      </div>
      <div className="w-full object-cover h-[300px] md:h-[450px] flex justify-center items-center absolute top-16 md:top-28">
        <div className="w-[90%] flex flex-col justify-center text-white">
          <h1 className="animate-slidein500 text-center opacity-0 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] ">
            Mobile Exterior Detailing
          </h1>
        </div>
      </div>
      <section>
        <article className=" text-start text-black">
          <h2 className="">Exterior Detailing</h2>
          <p className="">
            Washing a car might seem simple, but achieving a flawless finish
            requires more than just a quick rinse. If you're looking for a fast,
            budget-friendly wash, {businessName} might not be the right fit. We
            take detailing to the next level, both inside and out. Our advanced
            washing and drying techniques go beyond removing everyday dirt,
            grime, bird droppings, and dust—while minimizing surface scratches.
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
          Exterior Detailing Services
        </h2>
        {exteriorDetailingServices.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            type={item.type}
            service={item}
            image={item.image}
            services={item.services}
            description={item.description}
            duration={item.duration}
            link={MOBILE_EXTERIOR_DETAILING_BOOKING_PATH}
            button={"Get Started"}
            background={item.background}
            bestValue={item.bestValue}
          />
        ))}
      </section>
      <div id="booking" className="scroll-mb-[750px]"></div>
      <Booking />
      <section className="w-[90%] md:w-[80%] mx-auto">
        <h2>Addons</h2>
        <Addons />
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

export default AutoDetailing;
