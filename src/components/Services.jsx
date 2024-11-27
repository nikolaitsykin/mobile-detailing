import React from "react";
import { Outlet } from "react-router-dom";
import { fullDetailingServices } from "../utils/detailingPackages";
import {
  exteriorServices,
  interiorServices
} from "../utils/services";
import ServiceItem from "./ServiceItem";

const Services = () => {
  return (
    <>
      <h3 className="text-3xl text-center p-0 pt-3 md:pt-10">Our Services</h3>
      <h3 className="text-2xl text-center py-2 md:py-8">
        Exterior Services
      </h3>
      <div id="services" className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {exteriorServices.map((service) => (
          <ServiceItem
            key={service.title}
            title={service.title}
            image={service.image}
            description={service.shortDescription}
            link={service.link}
          />
        ))}
        <Outlet />
      </div>
      <h3 className="text-2xl text-center">Interior Services</h3>
      <div id="services" className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {interiorServices.map((service) => (
          <ServiceItem
            key={service.title}
            title={service.title}
            image={service.image}
            description={service.shortDescription}
            link={service.link}
            background={service.background}
          />
        ))}
        <Outlet />
      </div>
      <h3 className="text-2xl text-center">Full Detailing Services</h3>
      <div id="services" className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {fullDetailingServices.map((service) => (
          <ServiceItem
            key={service.title}
            title={service.title}
            image={service.image}
            description={service.shortDescription}
            link={service.link}
            background={service.background}
          />
        ))}
        <Outlet />
      </div>
    </>
  );
};

export default Services;
