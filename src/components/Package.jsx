import React from "react";
import Button from "./UI/Button";
import Card from "./Card";
import { Link } from "react-router-dom";

const Package = ({ packageType }) => {
  return (
    <div aria-label={packageType.title} className=" w-full p-2 m-2 text-black border-2">
      <h2 className=" text-xl text-center pt-2 tracking-widest font-syne font-bold">{packageType.title}</h2>
      <p className="text-center text-md p-2">{packageType.duration}</p>
      <div className="flex justify-center items-center md:items-start flex-col md:flex-row px-2">
        <Card
          title={packageType.exteriorTitle}
          image={packageType.exteriorImage}
          services={packageType.exteriorServices}
        />
        <Card
          title={packageType.interiorTitle}
          image={packageType.interiorImage}
          services={packageType.interiorServices}
        />
      </div>
      <div data-id="package_prices" className="flex justify-center p-2">
        <div className="text-center text-md  p-2 flex flex-col">
          <ul>
            {packageType.cars.map((car) => (
              <li className="text-start" key={car}>
                {car}
              </li>
            ))}
          </ul>
        </div>
        <div className="text-center text-md p-2 flex flex-col">
          <ul>
            {packageType.prices.map((price) => (
              <li key={price}>{price}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex justify-center p-2">
        <Link className="w-[80%] flex justify-center items-center" to="/booking">
          <Button children={"Book"} color={"secondary"} />
        </Link>
      </div>
    </div>
  );
};

export default Package;
