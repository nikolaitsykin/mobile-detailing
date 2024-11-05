import React from "react";
import About from "../About";
import Hero from "../Hero";
import Promos from "../Promos";

const Root = () => {
  return (
    <main className="w-full bg-white">
      <div className="z-100">
        <div>
          <Hero city={"Raleigh"} />
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
