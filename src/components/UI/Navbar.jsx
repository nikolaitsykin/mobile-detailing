import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as Cross } from "../../assets/icons/cross.svg";
import { ReactComponent as Menu } from "../../assets/icons/menu-burger.svg";
import { servicesLinks, servicesLinksActual } from "../../utils/data";
import Dropdown from "./Dropdown";
import SocialButtons from "./SocialButtons";
import { GIFT_CARDS_PATH } from "../../utils/constants";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinkStyle =
    "ml-5 md:ml-0 flex px-2 justify-start md:justify-center md:items-start items-center text-white hover:text-gray w-[100%] h-10 md:h-10 md:w-full text-sm md:text-base whitespace-nowrap";

  return (
    <nav className="w-full text-white flex justify-between items-start">
      <div className="flex flex-row justify-start items-start">
        <div className="flex justify-start items-start ml-5 md:ml-8 h-10">
          <div
            onClick={closeMenu}
            className="flex md:hidden justify-center items-start active:scale-110 duration-300 pl-1 ml-2"
          >
            {isMenuOpen ? <Cross /> : <Menu />}
          </div>
        </div>
        <ul
          className={`top-24 md:top-20  ${
            isMenuOpen ? "absolute" : "hidden"
          } flex md:flex md:static flex-col md:flex-row w-full items-start pt-0 bg-black md:bg-transparent h-64 md:h-10`}
        >
          <li
            key={"service"}
            className={`text-sm md:text-base flex jutify-end md:justify-center items-start`}
          >
            <Dropdown
              title={servicesLinks[0]}
              closeMenu={closeMenu}
              className={({ isActive }) =>
                isActive
                  ? `text-white ${navLinkStyle}`
                  : `text-gray ${navLinkStyle}`
              }
            />
          </li>
          {servicesLinks.slice(1).map((link, index) => (
            <li
              key={link + index}
              className="flex jutify-end md:justify-center items-start"
            >
              <NavLink
                onClick={closeMenu}
                to={`/${servicesLinksActual.slice(1)[index]}`}
                className={({ isActive }) =>
                  isActive
                    ? `text-gray ${navLinkStyle}`
                    : `text-white ${navLinkStyle}`
                }
              >
                {link}
              </NavLink>
            </li>
          ))}
          <li
            key={"gift-cards"}
            className={`text-sm md:text-base flex jutify-end md:justify-center items-start`}
          >
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? `text-gray ${navLinkStyle}`
                  : `text-white ${navLinkStyle}`
              }
              target="_blank"
              to={GIFT_CARDS_PATH}
            >
              Gift Cards
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="w-full flex justify-end items-start h-10 md:h-10 mr-5 md:mr-14">
        <SocialButtons />
      </div>
    </nav>
  );
};

export default Navbar;
