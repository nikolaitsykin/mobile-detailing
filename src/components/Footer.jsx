import { NavLink } from "react-router-dom";
import logo from "../assets/images/spotless_Logo_small.png";
import { GIFT_CARDS_PATH } from "../utils/constants";
import {
  businessAddress,
  businessHours, fullBusinessName,
  locationLinks,
  locations, servicesLinks,
  servicesLinksActual
} from "../utils/data";
import { currentYear } from "../utils/helpers";
import SocialButtons from "./UI/SocialButtons";

const Footer = () => {
  return (
    <footer className="relative bg-black min-h-52 pt-10 text-gray text-xxs sm:text-sm md:text-base">
      {/* <div className="fixed bottom-0 mb-2 left-0 right-0 md:left-auto md:right-0">
        <BookButtons color={"secondary"} />
      </div> */}
      <section className="flex justify-evenly flex-col md:flex-row ">
        <div className="basis-1/2 mb-5 md:mb-0 md:basis-1/3">
          <div className="min-w-48 md:pr-5 items-start">
            <div className=" w-20 lg:w-32">
              <img
                loading="lazy"
                className="h-full w-full object-contain"
                src={logo}
                alt="Spotless Logo"
              />
            </div>
            <p className="pt-3 text-sm md:text-base">
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
              <ul>
                {servicesLinks.map((link, index) => (
                  <li
                    key={link}
                    className="text-gray hover:text-white py-[2px] text-sm md:text-base"
                  >
                    <NavLink to={`/${servicesLinksActual[index]}`}>
                      {link}
                    </NavLink>
                  </li>
                ))}
                <li
                  key={"gift-cards"}
                  className="text-gray hover:text-white py-[2px] text-sm md:text-base"
                >
                  <NavLink
                    key={"gift-cards"}
                    target="_blank"
                    to={GIFT_CARDS_PATH}
                  >
                    Gift Cards
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="basis-1/3 pr-4 ">
            <div>
              <h5 className="text-white font-poppins md:mb-3 font-medium text-sm md:text-base">
                Locations
              </h5>
              <ul>
                {locations.map((location, index) => (
                  <li
                    key={location}
                    className="text-gray hover:text-white py-[2px] text-sm md:text-base"
                  >
                    <NavLink to={`${locationLinks[index]}`}>
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
              <span className="text-sm md:text-base">{businessAddress}</span>
            </div>
            <div className="pt-2 md:pt-3 ">
              <h5 className="text-white font-poppins md:mb-3 font-medium text-sm md:text-base">
                Open Hours
              </h5>
              <span className="flex flex-cols text-sm md:text-base">
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
        <div className="flex justify-between w-full pt-10 pb-16 items-center">
          <div className="basis-1/2 xs:basis-auto mr-3">
            <SocialButtons />
          </div>
          <div className="basis-1/2 xs:basis-auto">
            <p className="text-gray text-sm md:text-base">
              &copy; {currentYear} {fullBusinessName}. All rights reserved.
            </p>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
