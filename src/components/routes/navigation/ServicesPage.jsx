import React from "react";
import { businessName, fullBusinessName } from "../../../utils/data";
import { sustainability } from "../../../utils/sustainability";
import Banner from "../../Banner";
import Services from "../../Services";

const ServicesPage = () => {
  return (
    <div id="services" className="w-full z-20 bg-white font-poppins pb-10">
      <Banner
        image="https://pub-47230ec8befa4d53953b33b120822d8f.r2.dev/AdobeStock_198465715.jpeg"
        header="Services"
      />
      <section className="w-[90%] md:w-[80%] mx-auto">
        <article className="">
          <h3 id="services" className="text-xl text-center">
            What we offer
          </h3>
          <p>
            At {fullBusinessName}, we offer a range of high-quality mobile
            detailing services that bring the car care to your doorstep. We also
            specialize in ceramic coating for long-lasting protection and shine.
            Our fully equipped mobile detailing unit has everything we need to
            provide top-notch care for your vehicle. We do require access to a
            power and water supply, but once that’s arranged, we’ll take care of
            the rest. We proudly serve Raleigh and the surrounding areas. While
            there may be some location-based limitations or criteria, we always
            do our best to accommodate your needs and fit you into our schedule.
          </p>

          <h3 id="services" className="text-center text-xl">
            Comprehensive Car Detailing Services – From Full Interior Cleaning
            to Exterior Shine & Protection
          </h3>
          <p className="pb-10">
            From interior cleaning to exterior shine and ceramic coating,
            {fullBusinessName} offers a full range of mobile services
            tailored to your car's needs. Our detailing packages are designed to
            protect, enhance, and restore your vehicle, giving it a pristine
            look and feel.
          </p>
          <div className="">
            <Services />
          </div>
        </article>
      </section>
      <section className="w-[90%] md:w-[80%] mx-auto">
        <article className="px-5 py-0">
          <h3 id="embracing-sustainability" className="text-xl text-center">
            Embracing Sustainability: Eco-Friendly Detailing for a Cleaner Car
            and a Greener Planet
          </h3>
          <p>
            In recent years, the demand for{" "}
            <strong>eco-friendly car detailing</strong> products has surged
            across industries, and the <strong>mobile auto detailing</strong>{" "}
            world is no exception. At {businessName}, we’ve embraced this shift
            by prioritizing <strong>sustainable car detailing</strong> in
            everything we do. <strong>Eco-friendly detailing supplies</strong>{" "}
            have become the go-to choice for car owners and detailing
            professionals who care about reducing their environmental footprint.
            From <strong>biodegradable car cleaners</strong> to{" "}
            <strong>reusable microfiber towels</strong>, the auto detailing
            industry now offers a wide range of{" "}
            <strong>eco-conscious car care</strong> options that deliver
            exceptional results without harm. Let us introduce you to some of
            the best <strong>sustainable vehicle detailing</strong> products and
            techniques we use to keep your car looking great—while protecting
            the planet.
          </p>
          {sustainability.map((item, index) => (
            <div className="my-4" key={index}>
              <h5 className="">{item.title}</h5>
              <p>{item.description}</p>
            </div>
          ))}
        </article>
      </section>
    </div>
  );
};

export default ServicesPage;
