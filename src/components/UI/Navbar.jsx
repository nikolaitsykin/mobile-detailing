import React, { useEffect, useState } from "react";
import { FaPhone } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import { NavLink } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
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
    // "Services",
    "Reviews",
    "FAQs",
    "Gallery",
    "Membership",
    "About",
  ];

  const navLinkStyle =
    "flex justify-center items-center text-gray lg:hover:text-white focus:text-white hover:text-white w-[100%] font-syne font-bold h-12 lg:w-full text-lg lg:text-base p-2";

  return (
    <nav className="w-full text-white flex flex-col lg:flex-row lg:justify-evenly items-end">
      <div className="flex justify-end ">
        <div className="flex lg:hidden justify-center items-center mx-2 active:scale-110 duration-300">
          <a href="tel:2673106864">
            <div className="hover:scale-110 duration-700">
              <FaPhone size="1.5rem" color="fffafa" />
            </div>
          </a>
        </div>
        <div
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="mr-5 lg:hidden items-end active:scale-110 duration-300"
        >
          {isMenuOpen ? (
            <RxCross1 size="2rem" color="fffafa" />
          ) : (
            <IoMenu size="2.5rem" color="fffafa" />
          )}
        </div>
      </div>
      <ul
        className={`bg-black top-32 md:top-40 w-full ${
          isMenuOpen ? "absolute" : "hidden"
        }   flex lg:flex lg:static flex-col lg:flex-row w-full`}
      >
        <li className="flex jutify-end lg:justify-center items-center md:basis-1/6">
          <NavHashLink
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={({ isActive }) =>
              isActive
                ? `text-white ${navLinkStyle}`
                : `text-gray ${navLinkStyle}`
            }
            smooth
            to="/#services"
          >
            Services
          </NavHashLink>
        </li>
        {links.map((link) => (
          <li
            key={link}
            className="flex jutify-end lg:justify-center items-center md:basis-1/6"
          >
            <NavLink
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              to={`/${link}`}
              className={({ isActive }) =>
                isActive
                  ? `text-white ${navLinkStyle}`
                  : `text-gray ${navLinkStyle}`
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
