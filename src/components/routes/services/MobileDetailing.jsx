import { Outlet } from "react-router-dom";
import { mobileDetailingServices } from "../../../utils/detailingPackages";
import Addons from "../../Addons";
import Booking from "../../Booking";
import ServiceItem from "../../ServiceItem";

const MobileDetailing = () => {
  return (
    <div id="mobile-detailing" className="w-full z-20 bg-white font-poppins">
      <div className="w-full bg-black h-[250px] md:h-[450px] flex justify-center items-center mx-auto text-white top-20">
        <div className="flex flex-col text-center">
          <h1 className="text-center drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] mt-40">
            Interior & Exterior Mobile Car Detailing in Raleigh, NC{" "}
          </h1>
          <h2 className="text-sm md:text-lg">
            Refresh and Restore: Premium Auto Detailing in Raleigh and Nearby
            Areas
          </h2>
        </div>
      </div>
      <section>
        <article className="text-start text-black">
          <div className="flex flex-col md:flex-row mt-14">
            <span className="md:w-1/2 flex items-center">
              <img
                className="w-full object-cover object-right h-96 md:pr-5"
                src="https://pub-47230ec8befa4d53953b33b120822d8f.r2.dev/resize1.avif"
                alt=""
              />
            </span>
            <span className="md:w-1/2 flex flex-col justify-center">
              <h2 className="md:px-4 py-4 text-start">Exterior Detailing</h2>
              <p className="text-sm lg:text-base md:pl-5">
                Regular cleaning is important to keep your vehicle's exterior
                looking its best, but occasionally it needs a deeper clean to
                remove contaminants and imperfections. Without it, your car's
                paint job can become dull and marred by scrapes, swirls, and
                chemical etching, while the hot sun can cause damage and fading.
                Our exterior auto detailing services can help keep your car
                looking like new.
              </p>
            </span>
          </div>
          <div className="flex flex-col-reverse md:flex-row mt-10">
            <span className="md:w-1/2 flex flex-col justify-center">
              <h2 className="py-4 text-start">Interior Detailing</h2>
              <p className="text-sm lg:text-base md:pr-5">
                From crumbs and spills to dirt and grime, car interiors can
                quickly become a mess. That's why we're dedicated to providing
                top-notch interior detailing services that will leave your car
                looking and feeling like new. Our team of experts will
                thoroughly clean every inch of your interior, paying special
                attention to those hard-to-reach areas. We'll use specialized
                tools and equipment, such as steamers and extractors, to remove
                even the toughest stains and odors. And, with our premium
                cleaning products, you can trust that your car's interior will
                be protected and preserved for years to come. Don't let a dirty
                interior ruin your driving experience - let us help you get back
                to enjoying the road.
              </p>
            </span>
            <span className="md:w-1/2">
              <img
                className="w-full object-cover h-96 md:pl-5"
                src="https://pub-47230ec8befa4d53953b33b120822d8f.r2.dev/resize2.avif"
                alt=""
              />
            </span>
          </div>
        </article>
      </section>
      <section className="w-[90%] md:w-[80%] mx-auto mt-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {mobileDetailingServices.map((item, index) => (
            <ServiceItem key={index} props={item} />
          ))}
          <Outlet />
        </div>
      </section>
      <div id="booking" className="scroll-mb-[750px]"></div>
      <Booking />
      <section className="w-[90%] md:w-[80%] mx-auto">
        <h2>Additional Services</h2>
        <Addons full />
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

export default MobileDetailing;
