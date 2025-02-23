import React from "react";
import useScrollDirection from "../hooks/useScrollDirection";
import Topbar from "./UI/Topbar";
import Navbar from "./UI/Navbar";

const Header = () => {
  const scrollDirection = useScrollDirection();

  return (
    <header
      className={`absolute font-poppins z-30 flex flex-col w-full transition-all duration-300
      `}
    >
      <section className="w-full flex flex-col justify-around h-20 md:h-28 bg-transparent">
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
