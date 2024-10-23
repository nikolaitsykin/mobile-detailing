import React from "react";
import { sustainability } from "../../../utils/sustainability";
import Services from "../../Services";
import image from "../../../assets/images/AdobeStock_198465715.jpeg";
import { businessName } from "../../../utils/data";
import Banner from "../../Banner";

const ServicesPage = () => {
  return (
    <div id="services" className="w-full z-20 bg-white font-poppins pb-10">
      <Banner image={image} header="Services" />
      <section className="w-[90%] md:w-[80%] mx-auto">
        <article className="">
          <h2 id="services" className="py-16">
            What we offer
          </h2>
          <div className="">
            <Services />
          </div>
        </article>
      </section>
      <section className="w-[90%] md:w-[80%] mx-auto">
        <article className="px-5 py-0">
          <h2 id="embracing-sustainability" className="py-16 ">
            Embracing Sustainability: Eco-Friendly Detailing for a Cleaner Car
            and a Greener Planet
          </h2>
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
