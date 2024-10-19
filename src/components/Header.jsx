import React from "react";
import { FaPhone } from "react-icons/fa6";
import { TbMessageCircleUser } from "react-icons/tb";
import { Link } from "react-router-dom";
import logo from "../assets/images/spotless_logo_no_slogan.png";
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
            <div className="ml-2 md:ml-10 lg:ml-10 w-28 lg:w-32">
              <img
                className="h-full w-full object-contain"
                src={logo}
                alt="logo"
              />
            </div>
          </Link>
          <h1 className="text-[1px] p-0">Spotless Mobile Detailing</h1>
          <h2 className="text-[1px] p-0">
            Mobile Car Detailing in Raleigh & Surrounding Areas
          </h2>
        </div>
        <div className="flex  md:justify-between items-center w-full md:basis-3/7">
          <Navbar />
        </div>
        <div className="hidden lg:flex justify-end items-center md:basis-2/7 min-w-48 mr-16">
          <div>
            <a href={CALL_NUMBER} className="flex">
              <div className="flex justify-center items-center mr-5">
                <FaPhone size="1.5rem" color="fffafa" />
              </div>
            </a>
          </div>
          <div>
            <a href={TEXT_NUMBER} className="flex">
              <div className="flex justify-center items-center mr-5">
                <TbMessageCircleUser size="2rem" color="fffafa" />
              </div>
            </a>
          </div>

          <div className="hidden lg:flex">
            <Link to={BOOKING_PAGE_PATH}>
              <Button children={"BOOK NOW"} color={"primary"} />
            </Link>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;
