import { Helmet } from "react-helmet-async";
import { Outlet } from "react-router-dom";
import { BASE_URL, MOBILE_DETAILING_PATH } from "../../../utils/constants";
import { mobileInteriorAndExteriorDetailingTexts } from "../../../utils/data";
import { mobileDetailingServices } from "../../../utils/detailingPackages";
import Addons from "../../Addons";
import Booking from "../../Booking";
import ServiceItem from "../../ServiceItem";

const MobileDetailing = () => {
  const city = localStorage.getItem("location");
  const cityKey = city.toLowerCase().replace(/\s|-/g, "");
  const texts = mobileInteriorAndExteriorDetailingTexts[cityKey];

  return (
    <div id="mobile-detailing" className="w-full z-20 bg-white font-poppins">
      <Helmet>
        <link rel="canonical" href={BASE_URL + MOBILE_DETAILING_PATH} />
        <title>Mobile Car Detailing Raleigh NC | Spotless Auto Detailing</title>
        <meta
          name="description"
          content="Get professional mobile car detailing in Raleigh NC. Interior cleaning, exterior shine, ceramic coating & paint correction at your doorstep."
        />
      </Helmet>

      <div className="w-full bg-black">
        <img
          src="https://pub-47230ec8befa4d53953b33b120822d8f.r2.dev/pexels-lynxexotics-3954436%20(2).avif"
          alt="Auto detailing"
          className="w-full object-[25%_75%] object-cover h-[450px] md:h-[600px] mx-auto opacity-80"
        />
      </div>
      <div className="w-full object-cover h-[450px] md:h-[600px] top-10 flex justify-center items-center absolute">
        <div className="w-[90%] flex flex-col justify-center items-center text-white">
          <h1 className="whitespace-pre-line w-1/2 uppercase text-2xl md:text-5xl font-bold text-center drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
            Mobile Car Detailing Services in {city} NC
          </h1>
          <h3 className="md:w-3/4 my-2 p-0 md:my-4 text-center text-xs sm:text-base md:text-xl sm:mt-5 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
            Over 170+ 5-star reviews from our happy customers. From interior
            cleaning to protective exterior treatments. We provide professional
            mobile car detailing for all your vehicle needs in {city} and
            surrounding areas.
          </h3>
        </div>
      </div>

      <section>
        <article className="text-start text-black">
          <div className="flex flex-col md:flex-row mt-14">
            <span className="md:w-1/2 flex items-center">
              <img
                className="w-full object-cover  md:pr-5"
                src="https://pub-47230ec8befa4d53953b33b120822d8f.r2.dev/resize1.avif"
                alt=""
              />
            </span>
            <span className="md:w-1/2 flex flex-col justify-center">
              <h2 className="md:px-4 py-4 text-start">
                Exterior Detailing in {city}
              </h2>
              <p className="text-sm lg:text-base md:pl-5">{texts.exterior}</p>
            </span>
          </div>
          <div className="flex flex-col-reverse md:flex-row mt-10">
            <span className="md:w-1/2 flex flex-col justify-center">
              <h2 className="py-4 text-start">Interior Detailing in {city}</h2>
              <p className="text-sm lg:text-base md:pr-5">{texts.interior}</p>
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
      <section className="w-[90%] md:w-[80%] mx-auto mt-24">
        <h2 className="py-4 text-center">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2">
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
