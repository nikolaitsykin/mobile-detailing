import React, { useEffect, useState } from "react";
import { FaPhone } from "react-icons/fa6";
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

  const links = ["services", "reviews", "faqs", "about"];

  const navLinkStyle =
    "flex justify-center items-center text-gray lg:hover:text-white focus:text-white hover:text-white w-[100%] font-syne font-semibold h-12 lg:w-full text-md p-2 tracking-widest";

  return (
    <nav className=" w-full text-white flex flex-col lg:flex-row lg:justify-evenly items-end">
      <div className="flex justify-end ">
        <div className="flex lg:hidden justify-center items-center mr-3 active:scale-110 duration-300">
          <a href="tel:919 906 0099">
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
        className={`bg-black top-20 md:top-32 w-full ${
          isMenuOpen ? "absolute" : "hidden"
        }   flex lg:flex lg:static flex-col lg:flex-row w-full`}
      >
        {links.map((link) => (
          <li
            key={link}
            className="flex jutify-end lg:justify-center items-center basis-1/4"
          >
            <NavLink
              onClick={() => setIsMenuOpen(false)}
              to={`/${link}`}
              className={({ isActive }) =>
                isActive
                  ? `text-white ${navLinkStyle}`
                  : `text-gray ${navLinkStyle}`
              }
            >
              {link.toUpperCase()}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
