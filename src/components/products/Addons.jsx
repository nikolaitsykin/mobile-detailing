import React from "react";
import Card from "./Card";
import { addons } from "../../utils/addons";
import Addon from "./Addon";

const Addons = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 pb-5">
      {addons.map((addon, index) => (
        <Addon
          key={index}
          addon
          title={addon.title}
          image={addon.image}
          description={addon.description}
          price={addon.price}
        />
      ))}
    </div>
  );
};

export default Addons;
