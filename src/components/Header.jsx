import React from "react";
import { FaPhone } from "react-icons/fa6";
import { TbMessageCircleUser } from "react-icons/tb";
import { Link } from "react-router-dom";
import logo from "../assets/images/detailing_guys_logo.png";
import useScrollDirection from "../hooks/useScrollDirection";
import Button from "./UI/Button";
import Navbar from "./UI/Navbar";
import {
  CALL_NUMBER,
  CONTACT_PATH,
  HOME_PATH,
  TEXT_NUMBER,
} from "../utils/constants";

const Header = () => {
  const scrollDirection = useScrollDirection();

  return (
    <header
      className={`font-poppins z-20 flex flex-col w-full sticky transition-all duration-300 ${
        scrollDirection === "down" ? "-top-20 md:-top-32" : "top-0"
      }`}
    >
      {" "}
      <section className="w-full flex flex-row justify-around h-20 md:h-28 bg-black">
        <div className="flex justify-start items-center basis:1/3 md:basis-1/6">
          <Link to={HOME_PATH}>
            <div className="ml-4 lg:ml-16 h-16 w-16 md:w-20 md:h-20">
              <img
                className="h-16 w-16 md:w-20 md:h-20 p-2"
                src={logo}
                alt="logo"
              />
            </div>
          </Link>
        </div>
        <div className="flex justify-between items-center w-full md:basis-5/7">
          <Navbar />
        </div>
        <div className="hidden lg:flex justify-end items-center md:basis-2/6 min-w-48 mr-16">
          <div>
            <a href={CALL_NUMBER} className="flex">
              <div className="flex justify-center items-center mr-5">
                <FaPhone size="2rem" color="fffafa" />
              </div>
            </a>
          </div>
          <div>
            <a href={TEXT_NUMBER} className="flex">
              <div className="flex justify-center items-center mr-5">
                <TbMessageCircleUser size="2.5rem" color="fffafa" />
              </div>
            </a>
          </div>

          <div className="hidden lg:flex">
            <Link to={CONTACT_PATH}>
              <Button children={"Request Quote"} color={"primary"} />
            </Link>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;
