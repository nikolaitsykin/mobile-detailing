import React from "react";
import { NavLink } from "react-router-dom";
import {
  footerLinks,
  footerLinksActual,
  locations,
  locationLinks,
  businessAddress,
  businessHours,
  businessName,
} from "../utils/data";
import SocialButtons from "./UI/SocialButtons";
import logo from "../assets/images/spotless_logo_with_slogan.png";

const Footer = () => {
  return (
    <footer className="relative bg-black min-h-48 py-10 text-gray text-xxs sm:text-xs md:text-sm">
      <section className="flex justify-evenly flex-col md:flex-row ">
        <div className="basis-1/2 mb-5 md:mb-0 md:basis-1/3">
          <div className="min-w-48 md:pr-5 items-start">
            <div className="">
              <img className="h-12 object-contain" src={logo} alt="logo" />
            </div>
            <p className="pt-3 text-xs md:text-sm">
              We specialize in mobile detailing, paint correction and ceramic
              coating, — bringing high-quality care directly to you. We serve
              Raleigh and surrounding areas.
            </p>
          </div>
        </div>
        <div className="flex basis-1/2 md:basis-2/3">
          <div className="basis-1/3 pr-4">
            <div className="flex flex-col min-w-42">
              <h5 className="text-white font-poppins md:mb-3 font-medium text-sm md:text-base">
                Links
              </h5>
              <ul className="">
                {footerLinks.map((link, index) => (
                  <li
                    key={link}
                    className="text-gray hover:text-white py-[2px] text-xs md:text-sm"
                  >
                    <NavLink to={`/${footerLinksActual[index]}`}>
                      {link}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="basis-1/3 pr-4 ">
            <div className="">
              <h5 className="text-white font-poppins md:mb-3 font-medium text-sm md:text-base">
                Locations
              </h5>
              <ul className="">
                {locations.map((location, index) => (
                  <li
                    key={location}
                    className="text-gray hover:text-white py-[2px] text-xs md:text-sm"
                  >
                    <NavLink to={`/${locationLinks[index]}`}>
                      {location}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="basis-1/3">
            <div className="">
              <h5 className="text-white font-poppins md:mb-3 font-medium text-sm md:text-base">
                Address
              </h5>
              <span className="text-xs md:text-sm">{businessAddress}</span>
            </div>
            <div className="pt-2 md:pt-3 ">
              <h5 className="text-white font-poppins md:mb-3 font-medium text-sm md:text-base">
                Open Hours
              </h5>
              <span className="flex flex-col text-xs md:text-sm">
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
        <div className="flex justify-between w-full py-10 items-center">
          <div>
            <SocialButtons />
          </div>
          <div>
            <p className="text-white text-xxs sm:text-xs md:text-sm">
              © 2024 {businessName}
            </p>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
