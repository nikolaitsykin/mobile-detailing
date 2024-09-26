import React from "react";
import { Outlet, useParams } from "react-router-dom";
import Card from "../Card";

const ServiceItemPage = ({ item }) => {
  let params = useParams();

  console.log(params.serviceId);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
      <Card
        key={item.title}
        title={item.title}
        image={item.image}
        description={item.description}
        button={"Explore"}
        border={"border"}
      />
      <Outlet />
    </div>
  );
};

export default ServiceItemPage;
