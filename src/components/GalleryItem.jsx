import React from "react";

const PromoItem = ({ image }) => {
  return (
    <div className="h-96 w-full mx-auto relative font-poppins">
      <div>
        <img
          loading="lazy"
          src={image}
          alt={"Car detailing"}
          className="object-cover w-full mx-auto h-96 absolute top-0"
        />
      </div>
    </div>
  );
};

export default PromoItem;
