import React from "react";
// import useScrollDirection from "../hooks/useScrollDirection";
import Topbar from "./UI/Topbar";
import Navbar from "./UI/Navbar";

const Header = () => {
  // const scrollDirection = useScrollDirection();

  return (
    <header
      className={`sticky top-0 font-poppins h-0 z-30 flex flex-col w-full transition-all duration-300 
      `}
    >
      <div className="md:absolute w-full bg-black text-white h-7 md:h-7 flex justify-center items-center">
        <p className="font-montserrat text-xs sm:text-base text-center font-semibold tracking-widest mt-1">
          100% Licenced and Insured
        </p>
      </div>
      <div className="-mt-1 md:mt-5 w-full flex flex-col justify-start bg-gradient-to-b from-black to-transparent hover:bg-black ease-in-out duration-500">
        <div className="flex justify-between items-center w-full">
          <Topbar />
        </div>
        <div className="flex items-center w-full h-12">
          <Navbar />
        </div>
      </div>
    </header>
  );
};

export default Header;
