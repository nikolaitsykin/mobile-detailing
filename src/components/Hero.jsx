import React from "react";
import Gallery from "./Gallery";
import GoogleMap from "./Map";
import GoogleReview from "./ReviewsWidget";
import EmbedWidget from "./ReviewsWidget";
import Services from "./Services";

const Hero = ({ city, location }) => {
  return (
    <div className="w-full bg-white">
      <section>
        <article>
          <h2>
            Eco-Friendly Mobile Detailing Services in {city} – Protect & Enhance
            Your Car On-the-Go!
          </h2>
          <p>
            At Spotless Auto Detailing, we offer a range of high-quality mobile
            detailing services that bring the car care to your doorstep. We also
            specialize in ceramic coating for long-lasting protection and shine.
            Our fully equipped mobile detailing unit has everything we need to
            provide top-notch care for your vehicle. We do require access to a
            power and water supply, but once that’s arranged, we’ll take care of
            the rest. We proudly serve {city} and the surrounding areas. While
            there may be some location-based limitations or criteria, we always
            do our best to accommodate your needs and fit you into our schedule.
          </p>
        </article>
      </section>
      <section>
        <article>
          <h2 id="services" className="text-center">
            Comprehensive Car Detailing Services – From Full Interior Cleaning
            to Exterior Shine & Protection
          </h2>
          <p className="pb-10">
            From interior cleaning to exterior shine and ceramic coating,
            Spotless Auto Detailing offers a full range of mobile services
            tailored to your car's needs. Our detailing packages are designed to
            protect, enhance, and restore your vehicle, giving it a pristine
            look and feel.
          </p>
          <div className="pb-12">
            <Services />
          </div>
          <div className="pb-12">
            <GoogleReview />
            <GoogleMap />
          </div>
          <div>
            <Gallery />
          </div>
        </article>
      </section>
    </div>
  );
};

export default Hero;
