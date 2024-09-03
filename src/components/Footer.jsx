import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const links = [
    "Auto Detailing",
    "Paint Correction",
    "Headlight Restoration",
    "Ceramic Coating",
    "PPF",
  ];

  const services = ["services"];

  return (
    <footer className=" bg-dark-gray min-h-48 py-10 text-gray">
      <section className="w-[80%] mx-auto">
        <div className="flex justify-evenly flex-col md:flex-row">
          <div className="basis-1/2 mb-5 md:mb-0 md:basis-1/3 px-4 flex justify-start ">
            <div className="min-w-48">
              <h2 className="text-white  text-md md:text-lg ">
                Prime Detailing
              </h2>
              <p className="text-xs md:text-sm font-light pt-3">
                Prime Detailing, based in Apex, serves the Triangle area with
                top-tier mobile automotive detailing. We specialize in ceramic
                coating, paint protection film, paint restoration, and headlight
                restoration—bringing high-quality care directly to you.
              </p>
            </div>
          </div>
          <div className="flex basis-1/2 md:basis-2/3 ">
            <div className="basis-1/2 px-4">
              <div className="flex flex-col min-w-42">
                <h4 className="text-white  text-md md:text-lg ">Links</h4>
                <ul className="pt-2">
                  {links.map((link) => (
                    <li
                      key={link}
                      className="text-gray hover:text-white text-xs sm:text-sm md:text-md font-light decoration-1 py-1 border-b border-gray"
                    >
                      <NavLink to={`/${services}`}>{link}</NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="basis-1/2 px-4">
              <div className="min-w-42">
                <h4 className="text-white  text-md md:text-lg mb-3">Adress</h4>
                <span className=" text-xs sm:text-sm md:text-md font-light">
                  219 N Salem St, Apex, NC 27502
                </span>
              </div>
              <div className="pt-3 min-w-42">
                <h4 className="text-white text-md md:text-lg mb-3">
                  Open Hours
                </h4>
                <span className="text-start text-xs sm:text-sm md:text-md font-light">
                  <p>MON-FRI 5-8PM</p>
                  <p>SAT-SUN 9-5PM</p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
