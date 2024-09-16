import React from "react";
import Card from "./Card";
import { addons } from "../utils/data";

const Addons = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 ">
      {addons.map((addon, index) => (
        <Card
          key={index}
          title={addon.title}
          image={addon.image}
          description={addon.description}
          price={addon.price}
          border={"border"}
        />
      ))}
    </div>
  );
};

export default Addons;
