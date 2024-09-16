import React from "react";
import Card from "./Card";
import BookButtons from "./UI/BookButtons";
import Menu from "./UI/Menu";
const Package = ({ packageType }) => {
  return (
    <div className="w-full text-black border my-2 mx-auto">
      <div>
        <h3 className=" text-xl text-center pt-2 font-syne font-bold">
          {packageType.title}
        </h3>
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
        <BookButtons color="secondary" />
      </div>
    </div>
  );
};

export default Package;
