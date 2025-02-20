import React from "react";
import { detailingServices } from "../utils/detailingPackages";
import ServiceItem from "./ServiceItem";

const Services = () => {
  return (
    <div
      id="services"
      className="w-full m-auto flex flex-col md:flex-row gap-2 mt-20"
    >
      {detailingServices &&
        detailingServices.map((service) => <ServiceItem props={service} />)}
    </div>
  );
};

export default Services;
