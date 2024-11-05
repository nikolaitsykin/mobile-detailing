import React from "react";
import { Link } from "react-router-dom";
import { ABOUT_PATH, BOOKING_PAGE_PATH } from "../../../utils/constants";
import { businessName, fullBusinessName } from "../../../utils/data";
import About from "../../About";
import Hero from "../../Hero";
import Promos from "../../Promos";
import Button from "../../UI/Button";

const RootCary = () => {
  const currentCity = "Cary";

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

export default RootCary;
