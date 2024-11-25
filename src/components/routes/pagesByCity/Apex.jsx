import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { BOOKING_PAGE_PATH } from "../../../utils/constants";
import About from "../../About";
import Hero from "../../Hero";
import Promos from "../../Promos";
import Button from "../../UI/Button";

const RootApex = () => {
  const currentCity = "Apex";

  useEffect(() => {
    document.title = `Mobile Auto Detailing in ${currentCity} | Exterior Detailing | Interior Detailing | Ceramic Coating`;
    document.getElementById("canonical").href = "";
    document.getElementById("canonical").rel = "";
  }, []);

  return (
    <main className="w-full bg-white">
      <div className="z-100">
        <div>
          <Hero city={currentCity} location={currentCity} />
        </div>
        <div className="w-[90%] md:w-[80%] mx-auto bg-white">
          <Promos />
        </div>
        <div className="w-[90%] md:w-[80%] mx-auto bg-white">
          <About city={currentCity} />
        </div>
      </div>
    </main>
  );
};

export default RootApex;
