import React from "react";
import Card from "./Card";
import { interiorAddons, exteriorAddons } from "../utils/data";

const Addons = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 ">
      <div>
        <h3 className=" text-xl text-center  font-syne font-bold">
          Exterior Addons
        </h3>
        {exteriorAddons.map((addon) => (
          <Card
            key={addon.id}
            title={addon.title}
            image={addon.image}
            description={addon.description}
            price={addon.price}
            border={"border"}
          />
        ))}
      </div>
      <div>
        <h3 className=" text-xl text-center  font-syne font-bold">
          Interior Addons
        </h3>
        {interiorAddons.map((addon) => (
          <Card
            key={addon.id}
            title={addon.title}
            image={addon.image}
            description={addon.description}
            price={addon.price}
            border={"border"}
          />
        ))}
      </div>
    </div>
  );
};

export default Addons;
