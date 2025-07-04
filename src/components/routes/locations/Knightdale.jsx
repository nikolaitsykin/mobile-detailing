import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { BASE_URL, KNIGHTDALE_PATH } from "../../../utils/constants";
import { localAreas } from "../../../utils/data";
import About from "../../About";
import ContactForm from "../../ContactForm";
import Hero from "../../Hero";
import { MetaTags } from "../../MetaTags";

const Knightdale = () => {
  const location = useLocation();

  const currentCity = localAreas.includes(location.pathname.split("/")[1])
    ? location.pathname
        .split("/")[1]
        .replace(/-/g, " ") // Replace hyphens with spaces
        .replace(/\b\w/g, (char) => char.toUpperCase()) // Capitalize first letter of each word
    : "Raleigh";

  const canonical = document.querySelector("link[rel=canonical]");
  canonical.setAttribute("href", BASE_URL + KNIGHTDALE_PATH);

  useEffect(() => {
    document.title = `Spotless Auto Detailing: Mobile Car Detailing & Ceramic Coating in ${currentCity}.
`;
  }, [currentCity, location.pathname]);

  return (
    <main className="w-full bg-white">
      <MetaTags city={currentCity} />
      <div className="z-100">
        <div>
          <Hero city={currentCity} />
        </div>
        <div className="w-[90%] md:w-[80%] mx-auto bg-white">
          <ContactForm />
        </div>
        <div className="w-[90%] md:w-[80%] mx-auto bg-white">
          <About city={currentCity} />
        </div>
      </div>
    </main>
  );
};

export default Knightdale;
