import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { BOOKING_PAGE_PATH } from "../../../utils/constants";
import About from "../../About";
import Hero from "../../Hero";
import Promos from "../../Promos";
import Button from "../../UI/Button";
import detailingImage from "../../../assets/gallery/detailing_image.jpeg";

const RootMorrisville = () => {
  const currentCity = "Morrisville";

  useEffect(() => {
    document.title = `Mobile Auto Detailing in ${currentCity} | Exterior Detailing | Interior Detailing | Ceramic Coating`;
    document.getElementById("canonical").href = "";
    document.getElementById("canonical").rel = "";
  }, []);

  return (
    <main className="w-full bg-white">
      <div className="z-100">
        <div className="w-full bg-black">
        <img
            className="w-full object-cover h-[450px] md:h-[550px] mx-auto opacity-45"
            src={detailingImage}
            alt="Auto detailing"
          />
        </div>
        <div className="w-full object-cover h-[300px] md:h-[450px] flex justify-center items-center absolute top-32 md:top-36">
          <div className="w-[90%] flex flex-col justify-center text-white">
            <h2 className="text-xs sm:text-base text-center font-light font-poppins p-4">
              Top-Tier Service in {currentCity}, NC
            </h2>
            <h1 className="text-center drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] ">
              {currentCity} Premier Auto Detailing
            </h1>
            <p className=" text-center text-xs md:text-lg pt-5 w-full drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
              Mobile Auto Detailing & Ceramic Coating serving {currentCity} &
              Surrounding Areas.
            </p>
            <p className="font-poppins font-light text-center text-xs md:text-lg pb-5 w-full drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
              Whether you want to protect your car or give it a clean look, we
              deliver top-quality service.
            </p>
            <div className=" flex justify-center">
              <div className="min-w-48">
                <Link to={BOOKING_PAGE_PATH}>
                  <Button
                    children={"BOOK NOW"}
                    color={"primary"}
                    border={"border"}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>

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

export default RootMorrisville;
