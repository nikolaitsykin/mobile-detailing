import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { localAreas } from "../../utils/data";
import About from "../About";
import ContactForm from "../ContactForm";
import Hero from "../Hero";

const Root = () => {
  const location = useLocation();

  const currentCity = localAreas.includes(location.pathname.split("/")[1])
    ? location.pathname
        .split("/")[1]
        .replace(/-/g, " ") // Replace hyphens with spaces
        .replace(/\b\w/g, (char) => char.toUpperCase()) // Capitalize first letter of each word
    : "Raleigh";

  useEffect(() => {
    document.title = `Spotless Auto Detailing: Mobile Car Detailing & Ceramic Coating in ${currentCity}.
`;
  }, [currentCity, location.pathname]);

  return (
    <main className="w-full bg-white">
      <div className="z-100">
        <div>
          <Hero city={currentCity} />
        </div>
        <div className="w-[90%] md:w-[80%] mx-auto bg-white">
          <ContactForm />
        </div>
        <div className="w-[90%] md:w-[80%] mx-auto bg-white">
          <About city={"Raleigh"} />
        </div>
      </div>
    </main>
  );
};

export default Root;
