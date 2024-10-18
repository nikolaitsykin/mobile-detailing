import React from "react";
import { Outlet } from "react-router-dom";

const ServiceItemPage = ({ item }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
      Service
      <Outlet />
    </div>
  );
};

export default ServiceItemPage;
