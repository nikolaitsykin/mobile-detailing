import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as MessageSms } from "../assets/icons/message-sms.svg";
import { ReactComponent as PhoneCall } from "../assets/icons/phone-call.svg";
import logoFull from "../assets/images/spotless_logo_300.png";
import useScrollDirection from "../hooks/useScrollDirection";

import {
  BOOKING_PAGE_PATH,
  CALL_NUMBER,
  HOME_PATH,
  TEXT_NUMBER,
} from "../utils/constants";
import Button from "./UI/Button";
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
                className="h-full w-full object-contain"
                src={logoFull}
                alt="logo"
              />
            </div>
          </Link>
          <h1 className="text-[1px] p-0">Spotless Auto Detailing</h1>
          <h2 className="text-[1px] p-0">
            Mobile Auto Detailing in Raleigh & Surrounding Areas
          </h2>
        </div>
        <div className="flex items-center w-full lg:basis-6/7">
          <Navbar />
        </div>
      </section>
    </header>
  );
};

export default Header;
