import React from "react";
import { Link } from "react-router-dom";

const GalleryItem = ({ image, link }) => {
  return (
    <div className="h-96 w-full mx-auto relative font-poppins">
      <div className="cursor-pointer">
        <Link to={link} target="_blank">
          <img
            loading="lazy"
            src={image}
            alt={"Car detailing"}
            className="object-cover w-96 h-96 mx-auto px-0.5"
          />
        </Link>
      </div>
    </div>
  );
};

export default GalleryItem;
