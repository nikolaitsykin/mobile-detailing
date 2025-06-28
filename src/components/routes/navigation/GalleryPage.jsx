import React from "react";
import { BASE_URL, GALLERY_PATH } from "../../../utils/constants";

const Gallery = () => {
  const canonical = document.querySelector("link[rel=canonical]");
  canonical.setAttribute("href", BASE_URL + GALLERY_PATH);

  return (
    <div id="gallery" className="bg-white py-8">
      <section className="w-[80%] mx-auto">
        <h1 className="text-3xl text-center text-black my-3">Gallery</h1>
        <article className="text-sm md:text-base tracking-wide leading-6 text-start text-black"></article>
      </section>
    </div>
  );
};

export default Gallery;
