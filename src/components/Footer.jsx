import React from "react";
import { NavLink } from "react-router-dom";
import {
  businessAddress,
  businessHours,
  footerLinks,
  footerLinksActual,
  fullBusinessName,
  locationLinks,
  locations,
} from "../utils/data";
import SocialButtons from "./UI/SocialButtons";

const Footer = () => {
  return (
    <footer className="relative bg-black min-h-48 py-10 text-gray text-xxs sm:text-xs md:text-base">
      <section className="flex justify-evenly flex-col md:flex-row ">
        <div className="basis-1/2 mb-5 md:mb-0 md:basis-1/3">
          <div className="min-w-48 md:pr-5 items-start">
            <div>
              <img
                loading="lazy"
                className="h-12 object-contain"
                src="https://pub-47230ec8befa4d53953b33b120822d8f.r2.dev/spotless_logo_300.avif"
                alt="Spotless Logo"
              />
            </div>
            <p className="pt-3 text-xs md:text-base">
              We specialize in mobile detailing and ceramic coating, — bringing
              high-quality care directly to you. We serve Raleigh and
              surrounding areas.
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
                    className="text-gray hover:text-white py-[2px] text-xs md:text-base"
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
                    className="text-gray hover:text-white py-[2px] text-xs md:text-base"
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
              <span className="text-xs md:text-base">{businessAddress}</span>
            </div>
            <div className="pt-2 md:pt-3 ">
              <h5 className="text-white font-poppins md:mb-3 font-medium text-sm md:text-base">
                Open Hours
              </h5>
              <span className="flex flex-col text-xs md:text-base">
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
          <div className="basis-1/2 xs:basis-auto">
            <SocialButtons />
          </div>
          <div className="basis-1/2 xs:basis-auto">
            <p className="text-gray text-xs md:text-base">
              &copy; 2024 {fullBusinessName}. All rights reserved.
            </p>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
