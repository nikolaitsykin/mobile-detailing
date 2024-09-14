import React from "react";
import Services from "./Services";
import { useLocation } from "react-router-dom";
import carImage from "../assets/images/AdobeStock_198465715.jpeg";

const Hero = () => {
  const location = useLocation();

  return (
    <div className="w-full z-20 bg-white pb-8 font-poppins">
      {location.pathname === "/services" ? (
        <div className="relative">
          <div className="w-[80%] mx-auto z-10 absolute top-40 md:top-40 left-1/2 -translate-x-1/2 text-center">
            <h1 className="text-white animate-slidein300 opacity-0 text-4xl sm:text-5xl md:text-6xl w-full flex justify-center tracking-widest font-syne font-bold">
              Premium Mobile Detailing: Inside and Out
            </h1>
          </div>
          <div className="bg-black">
            <img
              className="w-full object-cover h-[450px] mx-auto opacity-40"
              src={carImage}
              alt="car"
            />
          </div>
        </div>
      ) : null}
      <section className="w-[90%] md:w-[80%] mx-auto my-5">
        <article className="text-black  w-full flex flex-col justify-center">
          <h2 className="text-black text-xl md:text-2xl text-center p-5 font-syne font-bold">
            We Bring Detailing to Your Doorstep
          </h2>
          <p className="text-sm md:text-base">
            Whether you’re at home, your apartment, or the office, we bring our
            services directly to you. Our fully equipped mobile detailing unit
            has everything we need to provide top-notch care for your vehicle.
            We do require access to a power and water supply, but once that’s
            arranged, we’ll take care of the rest. We proudly serve Raleigh,
            Cary, Holly Springs, and the surrounding areas. While there may be
            some location-based limitations or criteria, we always do our best
            to accommodate your needs and fit you into our schedule.
          </p>
        </article>
      </section>
      <section className="w-[90%] md:w-[80%] mx-auto my-5">
        <h2
          id="services"
          className="text-black text-xl md:text-2xl text-center p-5 font-syne font-bold"
        >
          OUR SERVICES
        </h2>
        <Services />
      </section>
      {location.pathname === "/services" ? (
        <section className="w-[90%] md:w-[80%] mx-auto">
          <article className="text-sm md:text-base text-start text-black">
            <h2
              id="embracing-sustainability"
              className="text-black text-2xl text-center p-5 font-syne font-bold mt-10"
            >
              Embracing Sustainability: Eco-Friendly Detailing for a Cleaner Car
              and a Greener Planet
            </h2>
            <p>
              In recent years, the demand for eco-friendly products has surged
              across industries, and the auto detailing world is no exception.
              At Detailing Guys, we’ve embraced this shift by prioritizing
              sustainability in everything we do. Eco-friendly detailing
              supplies have become the go-to choice for car owners and
              professionals who care about reducing their environmental
              footprint. From biodegradable cleaners to reusable towels, the
              industry now offers a wide range of eco-conscious options that
              deliver exceptional results without harm. Let us introduce you to
              some of the best sustainable vehicle detailing products and
              techniques we use to keep your car looking great—while protecting
              the planet.
            </p>
            <br />
            <br />
            <ul>
              <li>
                <h3 className="text-black text-lg font-syne font-semibold">
                  1. Biodegradable Car Wash Soap
                </h3>
                <p>
                  Our biodegradable car wash soap cleans your vehicle thoroughly
                  without introducing harmful chemicals to the environment. Made
                  from natural, non-toxic ingredients, it breaks down easily,
                  ensuring no pollution to local water sources. Plus, it’s
                  gentle on your skin, so you don’t have to worry about
                  irritation or allergic reactions.
                </p>
              </li>
              <br />
              <br />
              <li>
                <h3 className="text-black text-lg font-syne font-semibold">
                  2. Microfiber Towels
                </h3>
                <p>
                  Our microfiber towels are made from synthetic fibers that pick
                  up dirt without scratching your car’s surface. These towels
                  are reusable and washable, providing a sustainable option over
                  disposable products. Once they’ve reached their end of life,
                  they’re recyclable, ensuring we continue to reduce waste.
                </p>
              </li>
              <br />
              <br />
              <li>
                <h3 className="text-black text-lg font-syne font-semibold">
                  3. Waterless Car Wash
                </h3>
                <p>
                  In areas where water conservation is key, our waterless car
                  wash uses safe lubricants and cleaners to remove dirt and
                  grime. It’s a perfect solution for saving water while still
                  delivering a spotless finish—all with eco-friendly ingredients
                  that are biodegradable and safe.
                </p>
              </li>
              <br />
              <br />
              <li>
                <h3 className="text-black text-lg font-syne font-semibold">
                  4. Bamboo Brushes
                </h3>
                <p>
                  Our bamboo brushes offer an earth-friendly alternative to
                  synthetic materials. Biodegradable and sustainable, bamboo is
                  naturally durable and gentle, ensuring no scratches while
                  cleaning, and it won’t contribute to landfill waste.
                </p>
              </li>
              <br />
              <br />
              <li>
                <h3 className="text-black text-lg font-syne font-semibold">
                  5. Interior Detailing Sprays
                </h3>
                <p>
                  For interior cleaning, we use sprays made from plant-based,
                  biodegradable ingredients. These products, free of harsh
                  chemicals, are safe for your car’s surfaces and safe for your
                  family, ensuring a fresh, clean environment without harmful
                  residues.
                </p>
              </li>
              <br />
              <br />
              <li>
                <h3 className="text-black text-lg font-syne font-semibold">
                  6. Electric Pressure Washers
                </h3>
                <p>
                  We opt for electric pressure washers over gas-powered ones to
                  reduce emissions and noise pollution. These machines use
                  renewable energy sources and produce less greenhouse gas,
                  making them a greener option for effective car cleaning.
                </p>
              </li>
              <br />
              <br />
              <li>
                <h3 className="text-black text-lg font-syne font-semibold">
                  7. Eco-Friendly Carpet Cleaner
                </h3>
                <p>
                  Our eco-friendly carpet cleaners use plant-based enzymes and
                  surfactants to break down stains and dirt, ensuring a deep
                  clean without harsh chemicals. They’re perfect for families,
                  as they’re safe for use around both kids and pets.
                </p>
              </li>
              <br />
              <br />
              <li>
                <h3 className="text-black text-lg font-syne font-semibold">
                  8. Steam Cleaning
                </h3>
                <p>
                  Our steam cleaning services use nothing but water heated to
                  high temperatures to remove dirt and bacteria. This method is
                  not only incredibly effective but eliminates the need for
                  chemical cleaners, ensuring a safe and eco-friendly solution
                  for deep cleaning.
                </p>
              </li>
              <br />
              <br />
              <li>
                <h3 className="text-black text-lg font-syne font-semibold">
                  9. Natural Leather Cleaner
                </h3>
                <p>
                  Our natural leather cleaners are made from biodegradable,
                  plant-based oils and surfactants. They effectively clean and
                  protect your car’s leather while being safe for both pets and
                  children, ensuring no harmful exposure from chemical residues.
                </p>
              </li>
              <br />
              <br />
              <li>
                <h3 className="text-black text-lg font-syne font-semibold">
                  10. Green Glass Cleaner
                </h3>
                <p>
                  We use green glass cleaners formulated with natural
                  ingredients like vinegar and plant-based surfactants. These
                  cleaners leave your windows spotless without streaks and are
                  completely safe for your family and the environment.
                </p>
              </li>
              <br />
              <br />
              <li>
                <h3 className="text-black text-lg font-syne font-semibold">
                  11. Steam-Powered Cleaning Gun
                </h3>
                <p>
                  Our steam-powered cleaning guns are a chemical-free,
                  eco-friendly solution for cleaning hard-to-reach areas in your
                  car. Using only water vapor, they sanitize surfaces without
                  leaving any toxic residues, offering a safe and effective
                  method to clean your car’s interiors and engines.
                </p>
                11. Steam-Powered Cleaning Gun
              </li>
              <br />
              <br />
              <li>
                <h3 className="text-black text-lg font-syne font-semibold">
                  12. Eco-Friendly Wheel Cleaner
                </h3>
                <p>
                  We care for your wheels with biodegradable, non-toxic wheel
                  cleaners made from natural citrus oils and surfactants. These
                  products effectively remove brake dust and grime while being
                  gentle on your wheels and the environment.
                </p>
              </li>
            </ul>
            <br />
            <br />
            <h3 className="text-black text-lg font-syne font-semibold">
              Conclusion
            </h3>
            <p>
              At Detailing Guys, we make sure that every product we use is safe
              for your car, your family, and the planet. Our eco-friendly
              detailing supplies ensure you get the highest quality service
              without any harmful side effects. By choosing sustainable options,
              you can keep your car looking its best while doing your part to
              protect the environment. Ready for a clean car that’s good for the
              earth? Let Detailing Guys take care of it!
            </p>
            <br />
            <br />
          </article>
        </section>
      ) : null}
    </div>
  );
};

export default Hero;
