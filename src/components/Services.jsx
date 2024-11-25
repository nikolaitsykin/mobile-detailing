import React from "react";
import { Outlet } from "react-router-dom";
import {
  otherDetailingServices,
  popularDetailingServices,
} from "../utils/services";
import ServiceItem from "./ServiceItem";

const Services = () => {
  return (
    <>
      <h3 className="text-3xl text-center p-0 pt-3 md:pt-10">Our Services</h3>
      <h3 className="text-2xl text-center py-2 md:py-8">Popular Services</h3>
      <div id="services" className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {popularDetailingServices.map((service) => (
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
      <h3 className="text-2xl text-center">Other Services</h3>
      <div id="services" className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {otherDetailingServices.map((service) => (
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
