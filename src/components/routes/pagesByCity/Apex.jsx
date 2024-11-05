import React from "react";
import About from "../../About";
import Hero from "../../Hero";
import Promos from "../../Promos";

const RootApex = () => {
  const currentCity = "Apex";
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
