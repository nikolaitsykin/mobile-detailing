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
      <h2>Most Popular Car Detailing Services</h2>
      <div id="services" className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {popularDetailingServices.map((service) => (
          <ServiceItem
            key={service.title}
            title={service.title}
            image={service.image}
            description={service.shortDescription}
            button={"Explore"}
            link={service.link}
          />
        ))}
        <Outlet />
      </div>
      <h2>Other Detailing Services</h2>
      <div id="services" className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {otherDetailingServices.map((service) => (
          <ServiceItem
            key={service.title}
            title={service.title}
            image={service.image}
            description={service.shortDescription}
            button={"Explore"}
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
