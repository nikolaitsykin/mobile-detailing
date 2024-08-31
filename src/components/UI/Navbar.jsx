import React, { useEffect, useState } from "react";
import { IoMenu } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import { NavLink } from "react-router-dom";
const Navbar = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen]);

  const links = [
    "Services",
    "Reviews",
    "FAQs",
    "Gallery",
    "Membership",
    "About",
  ];

  return (
    <nav className="w-full text-white flex flex-col md:flex-row md:justify-evenly items-end">
      <div
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="mx-5 md:mx-10 md:hidden items-end"
      >
        {isMenuOpen ? (
          <RxCross1 size="2rem" color="fffafa" />
        ) : (
          <IoMenu size="2.5rem" color="fffafa" />
        )}
      </div>
      <ul
        className={`top-32 w-full ${
          isMenuOpen ? "absolute" : "hidden"
        } flex md:flex md:static flex-col md:flex-row w-full`}
      >
        {links.map((link) => (
          <li
            key={link}
            className="flex jutify-end md:justify-center items-center basis-1/6"
          >
            <NavLink
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              to={`/${link}`}
              className="flex justify-center items-center text-gray md:hover:text-white focus:text-white hover:text-white bg-black md:bg-inherit hover:bg-dark-gray md:hover:bg-inherit w-[100%] h-12 md:w-full text-base  focus:font-bold p-2"
            >
              {link}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
