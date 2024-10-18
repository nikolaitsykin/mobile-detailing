import React from "react";
import Services from "./Services";
import { fullBusinessName } from "../utils/data";

const Hero = () => {
  return (
    <div className="w-full bg-white ">
      <section>
        <h2 className="">Detailing to Your Doorstep</h2>
        <p className="">
          At {fullBusinessName}, we offer a range of high-quality mobile
          detailing services that bring the car care to your doorstep. From{" "}
          <strong>exterior detailing</strong> like <strong>Quick Wash</strong>,{" "}
          <strong>Wash & Wax</strong> and <strong>Shine & Shield</strong> to
          deep <strong>interior cleaning</strong> such as{" "}
          <strong>Quick Clean</strong>, <strong>Wipe & Clean</strong> and{" "}
          <strong>Steam & Guard</strong>, we’ve got you covered. We also
          specialize in <strong>paint correction</strong> and
          <strong>ceramic coating</strong> for long-lasting protection and
          shine. Our fully equipped mobile detailing unit has everything we need
          to provide top-notch care for your vehicle. We do require access to a
          power and water supply, but once that’s arranged, we’ll take care of
          the rest. We proudly serve Raleigh and the surrounding areas. While
          there may be some location-based limitations or criteria, we always do
          our best to accommodate your needs and fit you into our schedule.
        </p>
      </section>
      <section>
        <h2 id="services" className="text-center">
          Services
        </h2>
        <Services />
      </section>
    </div>
  );
};

export default Hero;
