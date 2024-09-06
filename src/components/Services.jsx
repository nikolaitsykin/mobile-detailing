import React from "react";
import { Outlet } from "react-router-dom";
import { autoDetailingServices } from "../utils/data";
import Card from "./Card";

const Services = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
      {autoDetailingServices.map((service) => (
        <Card
          key={service.title}
          title={service.title}
          image={service.image}
          description={service.description}
          button={"Explore"}
          link={service.link}
          border={"border"}
        />
      ))}
      <Outlet />
    </div>
  );
};

export default Services;
