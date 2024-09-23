import React from "react";
import { FaPhone } from "react-icons/fa6";
import { Link } from "react-router-dom";
import logo from "../assets/images/detailing_guys_logo.png";
import useScrollDirection from "../hooks/useScrollDirection";
import Button from "./UI/Button";
import Navbar from "./UI/Navbar";

const Header = () => {
  const scrollDirection = useScrollDirection();

  return (
    <header
      className={`font-poppins z-20 flex flex-col w-full sticky transition-all duration-300 ${
        scrollDirection === "down" ? "-top-20 md:-top-32" : "top-0"
      }`}
    >
      {" "}
      {/* <section className="h-10 md:h-14 flex justify-between w-full bg-black px-5 lg:px-16">
        <div className="flex items-center basis-1/2 md:basis-1/3">
          <span className="text-white text-xs md:text-sm lg:text-base font-syne font-bold">
            RALEIGH
          </span>
        </div>
        <div className="flex md:justify-end basis-1/4 md:basis-1/3 items-center">
          <SocialButtons />
        </div>
      </section> */}
      <section className="w-full flex flex-row justify-around h-20 md:h-28 bg-black">
        <div className="flex justify-start items-center basis:1/3 md:basis-1/6">
          <Link to="/">
            <div className="ml-4 lg:ml-16 h-16 w-16 md:w-20 md:h-20">
              <img
                className="h-16 w-16 md:w-20 md:h-20 p-2"
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
          <a href="tel:9199060099" className="flex">
            <div className="flex justify-center items-center mr-5">
              <FaPhone size="2rem" color="fffafa" />
            </div>
          </a>
          <div className="hidden lg:flex">
            <Link to="/booking">
              <Button children={"Request Quote"} color={"primary"} />
            </Link>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;
