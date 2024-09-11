import React from "react";
import Button from "./UI/Button";
import Card from "./Card";
import { Link } from "react-router-dom";
import Menu from "./UI/Menu";

const Package = ({ packageType }) => {
  return (
    <div className="w-full text-black border my-2 mx-auto">
      <div>
        <h2 className=" text-xl text-center pt-2 tracking-widest font-syne font-bold">
          {packageType.title}
        </h2>
      </div>
      <div>
        <Menu service={packageType} />
      </div>
      <div className="flex justify-center items-center md:items-start flex-col md:flex-row">
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
      <p className="text-center text-sm p-3">{packageType.duration}</p>
      <div className="flex justify-center p-4 mb-4">
        <Link
          className="w-[80%] flex justify-center items-center"
          target="_blank"
          to="https://squareup.com/appointments/book/t25pubegvfjcw1/LDK47FK18Z9GH/start"
        >
          <Button children={"Book"} color={"secondary"} />
        </Link>
      </div>
    </div>
  );
};

export default Package;
