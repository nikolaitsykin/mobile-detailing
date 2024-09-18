import React from "react";
import { FaPhone } from "react-icons/fa6";
import { Link } from "react-router-dom";
import logo from "../assets/images/detailing_guys_logo.png";
import Button from "./UI/Button";
import Navbar from "./UI/Navbar";
import useScrollDirection from "../hooks/useScrollDirection";

const Header = () => {
  const scrollDirection = useScrollDirection();

  return (
    <header
      className={`font-poppins z-20 flex flex-col w-full sticky transition-all duration-300 ${
        scrollDirection === "down" ? "-top-32 md:-top-40" : "top-0"
      }`}
    >
      {" "}
      <section className="h-16 md:h-20 flex justify-between w-full bg-black px-5 lg:px-16">
        <div className="flex items-center basis-1/2 md:basis-1/3">
          <span className="text-white text-xs md:text-sm lg:text-base font-syne font-bold">
            RALEIGH
          </span>
        </div>
        <div className="hidden md:flex md:visible justify-center items-center basis-1/2 md:basis-1/3 ">
          <span className="text-white px-4 text-xs s:text-sm sm:text-base md:text-lg"></span>
        </div>
        <div className="flex md:justify-end md:basis-1/3 items-center">
          <span className="min-w-44 md:min-w-48">
            <Link to="/booking">
              <Button children={"Request Quote"} color={"primary"} />
            </Link>
          </span>
        </div>
      </section>
      <section className="w-full flex flex-row justify-around h-16 md:h-20 bg-black">
        <div className="flex justify-start items-center basis:1/3 md:basis-1/6 text-white h-16 md:h-20">
          <Link to="/">
            <div className="ml-4 lg:ml-16 h-16 md:h-20 w-16 md:w-20">
              <img
                className="h-16 md:h-20 w-16 md:w-20 p-1"
                src={logo}
                alt="logo"
              />
            </div>
          </Link>
        </div>
        <div className="flex justify-between items-center w-full md:basis-5/6">
          <Navbar />
        </div>
        <div className="hidden lg:flex justify-end items-center md:basis-1/6 min-w-48 mr-16">
          <a href="tel:919 906 0099" className="flex">
            <div className="flex justify-center items-center mx-2">
              <FaPhone size="2rem" color="fffafa" />
            </div>
            <div className="hidden lg:flex lg:flex-col justify-center items-end ">
              <span className="text-white text-xs md:text-sm">
                FREE CONSULTATION
              </span>
              <span className="text-white text-base md:text-lg font-semibold">
                (919) 906-0099
              </span>
            </div>
          </a>
        </div>
      </section>
    </header>
  );
};

export default Header;
