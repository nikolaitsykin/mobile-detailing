import React from "react";
import Button from "./UI/Button";
import Navbar from "./UI/Navbar";
import { Link } from "react-router-dom";
import { FaPhone } from "react-icons/fa6";
import useScrollDirection from "../hooks/useScrollDirection";

const Header = () => {
  const scrollDirection = useScrollDirection();

  return (
    <header
      className={`font-poppins z-20 flex flex-col w-full sticky transition-all duration-500 ${
        scrollDirection === "down" ? "-top-32 md:-top-40" : "top-0"
      }`}
    >
      <section className="h-16 md:h-20 flex justify-between w-full bg-dark-gray px-5 lg:px-16">
        <div className="flex items-center basis-1/2 md:basis-1/3">
          <span className="text-white text-sm md:text-base">
            Raleigh | Cary | Holly Springs
          </span>
        </div>
        <div className="hidden md:flex md:visible justify-center items-center basis-1/2 md:basis-1/3 ">
          <span className="text-white px-4 text-xs s:text-sm sm:text-base md:text-lg"></span>
        </div>
        <div className="flex md:justify-end md:basis-1/3 items-center">
          <Link to="/booking">
            <Button children={"Request Quote"} color={"primary"} />
          </Link>
        </div>
      </section>
      <section className="w-full flex flex-row justify-around h-16 md:h-20 bg-dark-gray">
        <div className="flex justify-start items-center basis:1/3 md:basis-1/6 text-white ">
          <Link to="/">
            <div className="mx-5 lg:ml-16">
              <p className="text-2xl md:text-2xl font-syne font-bold flex items-end">PRIME</p>
              <p className="text-center text-xs tracking-widest md:text-sm">
                DETAILING
              </p>
            </div>
          </Link>
        </div>
        <div className="flex justify-between items-center w-full md:basis-5/6">
          <Navbar />
        </div>
        <div className="hidden lg:flex justify-end items-center md:basis-1/6 min-w-48 mr-16">
          <a href="tel:2673106864" className="flex">
            <div className=" flex justify-center items-center mx-2">
              <FaPhone size="2rem" color="fffafa" />
            </div>
            <div className="hidden lg:flex lg:flex-col justify-center items-end ">
              <span className="text-white text-xs md:text-sm">
                FREE CONSULTATION
              </span>
              <span className="text-white text-base md:text-lg font-semibold">
                (123) 456-7890
              </span>
            </div>
          </a>
        </div>
      </section>
    </header>
  );
};

export default Header;
