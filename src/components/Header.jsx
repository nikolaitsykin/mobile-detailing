import React from "react";
import Button from "./UI/Button";
import Navbar from "./UI/Navbar";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="flex flex-col w-full sticky top-0 z-20">
      <section className="h-16 md:h-20 flex flex-col justify-between sm:flex-row w-full bg-dark-gray px-5">
        <div className="flex items-center basis-1/2 md:basis-1/3">
          <span className="text-white text-xs sm:text-sm md:text-base">
            Apex | Cary | Holly Springs
          </span>
        </div>
        <div className="flex justify-center items-center basis-1/2 md:basis-1/3 ">
          <span className="text-white px-4 text-xs s:text-sm sm:text-base md:text-lg font-semibold">
          </span>
        </div>
        <div className="hidden md:flex md:justify-end md:basis-1/3 md:visible">
          <Button children={"Request Quote"} color={"primary"} />
        </div>
      </section>
      <section className="w-full flex flex-row justify-around h-16 md:h-20 bg-dark-gray px-5">
        <div className="flex justify-start items-center basis-1/2 md:basis-1/6 text-white">
          <Link to="/">
            <p className="font-sans text-white text-xl font-bold md:text-2xl">
              PRIME
            </p>
            <p className="font-sans text-white text-center text-xs md:text-sm">
              DETAILING
            </p>
          </Link>
        </div>
        <div className="flex justify-between items-center w-full">
          <Navbar />
        </div>
        <div className=" hidden md:visible md:flex md:flex-col justify-center items-end basis-1/2 md:basis-1/6 min-w-36">
          <span className="text-white font-sans text-xs md:text-sm">
            FREE CONSULTATION
          </span>
          <span className="text-white font-sans text-base md:text-lg font-semibold">
            (123) 456-7890
          </span>
        </div>
      </section>
    </header>
  );
};

export default Header;
