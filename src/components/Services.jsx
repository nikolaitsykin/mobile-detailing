import React from "react";
import { Outlet } from "react-router-dom";
import { detailingServicesTypes } from "../utils/services";
import ServiceItem from "./ServiceItem";

const Services = () => {
  return (
    <div id="services" className="grid grid-cols-1 md:grid-cols-3 gap-3">
      {detailingServicesTypes.map((service) => (
        <ServiceItem
          key={service.title}
          title={service.title}
          image={service.image}
          description={service.description}
          button={"Explore"}
          link={service.link}
          background={service.background}
        />
      ))}
      <Outlet />
    </div>
  );
};

export default Services;
