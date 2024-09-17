import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const footerLinks = [
    "Auto Detailing",
    "Paint Correction",
    "Ceramic Coating",
    "PPF",
  ];

  const businessAddress = "219 N Salem St, Apex, NC 27502";
  const businessHours = ["MON-FRI 5-8PM", "SAT-SUN 9-5PM"];

  return (
    <footer className="relative bg-black min-h-48 py-10 text-gray">
      <section className="flex justify-evenly flex-col md:flex-row ">
        <div className="basis-1/2 mb-5 md:mb-0 md:basis-1/3 px-4 flex justify-start">
          <div className="min-w-48">
            <h4 className="text-white text-md md:text-lg font-medium">Detailing Guys</h4>
            <p className="text-xs md:text-sm font-light pt-3">
              Based in Apex, we serve the Triangle area with top-tier mobile
              automotive detailing. We specialize in ceramic coating, paint
              protection film, paint restoration, and headlight
              restoration—bringing high-quality care directly to you.
            </p>
          </div>
        </div>
        <div className="flex basis-1/2 md:basis-2/3">
          <div className="basis-1/2 px-4">
            <div className="flex flex-col min-w-42">
              <h4 className="text-white text-md md:text-lg font-medium">Links</h4>
              <ul className="pt-2">
                {footerLinks.map((link) => (
                  <li
                    key={link}
                    className="text-gray hover:text-white text-xs sm:text-sm md:text-md font-light decoration-1 py-1 border-b border-gray"
                  >
                    <NavLink to={`/${link}`}>{link}</NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="basis-1/2 px-4">
            <div className="min-w-42">
              <h4 className="text-white text-md md:text-lg mb-3 font-medium">Address</h4>
              <span className="text-start text-xs sm:text-sm md:text-md font-light">
                {businessAddress}
              </span>
            </div>
            <div className="pt-3 min-w-42">
              <h4 className="text-white text-md md:text-lg mb-3 font-medium">Open Hours</h4>
              <span className="text-start text-xs sm:text-sm md:text-md font-light">
                {businessHours.map((hour) => (
                  <p key={hour}>{hour}</p>
                ))}
              </span>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
