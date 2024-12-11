import React, { useEffect } from "react";
import About from "../About";
import Hero from "../Hero";
import Promos from "../Promos";
import { useLocation } from "react-router-dom";
import { localAreas } from "../../utils/data";
import { setCanonical } from "../../utils/helpers";

const Root = () => {
  const location = useLocation();

  const currentCity = localAreas.includes(location.pathname.split("/")[1])
    ? location.pathname
        .split("/")[1]
        .replace(/^./, (char) => char.toUpperCase())
    : "Raleigh";

  useEffect(() => {
    document.title = `Mobile Auto Detailing in ${currentCity} | Exterior Detailing | Interior Detailing | Ceramic Coating`;
    setCanonical(location.pathname);
  }, [currentCity, location.pathname]);

  return (
    <main className="w-full bg-white">
      <div className="z-100">
        <div>
          <Hero city={currentCity} />
        </div>
        <div className="w-[90%] md:w-[80%] mx-auto bg-white">
          <Promos />
        </div>
        <div className="w-[90%] md:w-[80%] mx-auto bg-white">
          <About city={"Raleigh"} />
        </div>
      </div>
    </main>
  );
};

export default Root;
