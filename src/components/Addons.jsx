import React from "react";
import { addons } from "../utils/addons";
import AddonItem from "./AddonItem";

const Addons = ({type}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
      {addons.filter((addon) => addon.type === type).map((addon, index) => (
        <AddonItem
          key={index}
          type={type}
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
