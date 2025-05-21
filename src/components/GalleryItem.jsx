import React from "react";

const GalleryItem = ({ image, link }) => {
  return (
    <div className="h-96 w-full mx-auto relative font-poppins">
      <div className="cursor-pointer">
        <a href={link} target="_blank" rel="noreferrer">
          <img
            loading="lazy"
            src={image}
            alt={"Car detailing"}
            className="object-cover w-96 h-96 mx-auto px-0.5"
          />
        </a>
      </div>
    </div>
  );
};

export default GalleryItem;
