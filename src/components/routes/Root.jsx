import React, { useEffect } from "react";
import About from "../About";
import Hero from "../Hero";
import Promos from "../Promos";

const Root = () => {
  const currentCity = "Raleigh";
  useEffect(() => {
    document.title = `Mobile Auto Detailing in ${currentCity} | Exterior Detailing | Interior Detailing | Ceramic Coating`;
    document.getElementById("canonical").href = `https://getspotlessnc.com/`;
  }, []);

  return (
    <main className="w-full bg-white">
      <div className="z-100">
        <div>
          <Hero />
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
