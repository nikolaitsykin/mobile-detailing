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
      <div className="w-full bg-black text-white h-8 md:h-8 flex justify-center items-center">
        <p className="font-montserrat text-xs sm:text-sm text-center font-semibold tracking-widest">
          Fully Licenced and Insured
        </p>
      </div>
      <section className="w-full flex flex-col justify-start bg-gradient-to-b from-black to-transparent hover:bg-black ease-in-out duration-500">
        <div className="flex justify-between items-center w-full">
          <Topbar />
        </div>
        <div className="flex items-center w-full">
          <Navbar />
        </div>
      </section>
    </header>
  );
};

export default Header;
