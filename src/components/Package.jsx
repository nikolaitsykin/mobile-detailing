import React from "react";
import { Link } from "react-router-dom";
import Card from "./Card";
import Button from "./UI/Button";
import Menu from "./UI/Menu";
const Package = ({ packageType }) => {
  return (
    <div className="w-full text-black mx-auto border border-gray">
      <div>
        <h3 className=" text-center py-6">{packageType.title}</h3>
      </div>
      <div>
        <Menu service={packageType} />
      </div>
      <div className="flex justify-center items-center md:items-start flex-col md:flex-row">
        <Card
          title={packageType.exteriorTitle}
          image={packageType.exteriorImage}
          services={packageType.exteriorServices}
          description={packageType.exteriorDescription}
        />
        <Card
          title={packageType.interiorTitle}
          image={packageType.interiorImage}
          services={packageType.interiorServices}
          description={packageType.interiorDescription}
        />
      </div>
      <div className="text-center text-sm mt-2 p-4">
        {packageType.duration}{" "}
      </div>
      <div className="mb-10 mt-4 flex justify-center items-center">
        <Link
          className="w-[80%] flex justify-center items-center"
          preventScrollReset={false}
          to={`${packageType.link}`}
        >
          <Button children={packageType.button} color={"secondary"} />
        </Link>
      </div>
    </div>
  );
};

export default Package;
