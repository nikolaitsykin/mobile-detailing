import React from "react";
import { NavLink } from "react-router-dom";
import {
  footerLinks,
  links,
  locations,
  locationLinks,
  businessAddress,
  businessHours,
} from "../utils/data";
import SocialButtons from "./UI/SocialButtons";

const Footer = () => {
  return (
    <footer className="relative bg-black min-h-48 py-10 text-gray text-xxs sm:text-xs md:text-sm">
      <section className="flex justify-evenly flex-col md:flex-row ">
        <div className="basis-1/2 mb-5 md:mb-0 md:basis-1/3  flex justify-start">
          <div className="min-w-48 pr-5">
            <h5 className="text-white font-poppins font-medium">
              Detailing Guys
            </h5>
            <p className="pt-3">
              Based in Apex, we serve the Triangle area with top-tier mobile
              automotive detailing. We specialize in ceramic coating, paint
              protection film & paint restoration—bringing high-quality care
              directly to you.
            </p>
          </div>
        </div>
        <div className="flex basis-1/2 md:basis-2/3">
          <div className="basis-1/3 md:px-4">
            <div className="flex flex-col min-w-42">
              <h5 className="text-white font-poppins md:mb-3 font-medium">
                Links
              </h5>
              <ul className="">
                {footerLinks.map((link, index) => (
                  <li
                    key={link}
                    className="text-gray hover:text-white py-[2px] "
                  >
                    <NavLink to={`/${links[index]}`}>{link}</NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="basis-1/3 px-4 ">
            <div className="">
              <h5 className="text-white font-poppins md:mb-3 font-medium">
                Locations
              </h5>
              <ul className="">
                {locations.map((location, index) => (
                  <li
                    key={location}
                    className="text-gray hover:text-white py-[2px]"
                  >
                    <NavLink to={`/${locationLinks[index]}`}>
                      {location}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="basis-1/3 px-4 ">
            <div className="">
              <h5 className="text-white font-poppins md:mb-3 font-medium">
                Address
              </h5>
              <span className=" md:text-md">{businessAddress}</span>
            </div>
            <div className="pt-2 md:pt-3 ">
              <h5 className="text-white font-poppins md:mb-3 font-medium">
                Open Hours
              </h5>
              <span className="  flex flex-col ">
                {businessHours.map((hour) => (
                  <p key={hour} className="pr-2">
                    {hour}
                  </p>
                ))}
              </span>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="flex justify-between w-full py-10">
          <div>
            <SocialButtons />
          </div>
          <div>
            <p className="text-white text-xxs sm:text-xs md:text-sm">
              © 2024 Detailing Guys
            </p>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
