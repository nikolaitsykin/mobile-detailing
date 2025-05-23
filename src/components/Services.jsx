import React from "react";
import { detailingServices } from "../utils/detailingPackages";
import ServiceItem from "./ServiceItem";

const Services = () => {
  return (
    <div id="services">
      <h3 className="text-center">Explore our services</h3>
      <div className="w-full m-auto flex flex-col md:flex-row gap-2">
        {detailingServices &&
          detailingServices.map((service) => (
            <ServiceItem key={service.title} props={service} />
          ))}
      </div>
    </div>
  );
};

export default Services;
