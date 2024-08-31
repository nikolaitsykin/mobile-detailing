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

  const navLinkStyle =
    "flex justify-center items-center text-gray lg:hover:text-white focus:text-white hover:text-white bg-black lg:bg-inherit hover:bg-gray lg:hover:bg-inherit w-[100%] h-12 lg:w-full text-base focus:font-bold p-2";

  return (
    <nav className="w-full text-white flex flex-col lg:flex-row lg:justify-evenly items-end">
      <div
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="mx-5 md:mx-10 lg:hidden items-end"
      >
        {isMenuOpen ? (
          <RxCross1 size="2rem" color="fffafa" />
        ) : (
          <IoMenu size="2.5rem" color="fffafa" />
        )}
      </div>
      <ul
        className={`top-32 lg:top-40 w-full ${
          isMenuOpen ? "absolute" : "hidden"
        } flex lg:flex lg:static flex-col lg:flex-row w-full`}
      >
        {links.map((link) => (
          <li
            key={link}
            className="flex jutify-end lg:justify-center items-center basis-1/6"
          >
            <NavLink
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              to={`/${link}`}
              className={({ isActive }) =>
                isActive ? `text-white font-semibold ${navLinkStyle}` : `text-gray ${navLinkStyle}`
              }
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
