import React from "react";
import { Link } from "react-router-dom";
import useScrollDirection from "../hooks/useScrollDirection";

import { HOME_PATH } from "../utils/constants";
import Navbar from "./UI/Navbar";

const Header = () => {
  const scrollDirection = useScrollDirection();

  return (
    <header
      className={`font-poppins z-30 flex flex-col w-full sticky transition-all duration-300 ${
        scrollDirection === "down" ? "-top-20 md:-top-32" : "top-0"
      }`}
    >
      <section className="w-full flex flex-row justify-around h-20 md:h-28 bg-black">
        <div className="flex justify-start items-center basis:1/3 md:basis-1/7">
          <Link to={HOME_PATH}>
            <div className="ml-5 md:ml-8 lg:ml-10 w-20 lg:w-32">
              <img
                loading="lazy"
                className="h-full w-full object-contain"
                src="https://pub-47230ec8befa4d53953b33b120822d8f.r2.dev/spotless_logo_300.avif"
                alt="Spotless Logo"
              />
            </div>
          </Link>
        </div>
        <div className="flex items-center w-full lg:basis-6/7">
          <Navbar />
        </div>
      </section>
    </header>
  );
};

export default Header;
