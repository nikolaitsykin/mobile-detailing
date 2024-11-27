import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as Cross } from "../../assets/icons/cross.svg";
import { ReactComponent as Menu } from "../../assets/icons/menu-burger.svg";
import { servicesLinks, servicesLinksActual } from "../../utils/data";
import ConntactsButtons from "./ConntactsButtons";
import Dropdown from "./Dropdown";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinkStyle =
    "flex px-3 justify-start md:justify-center items-center text-gray focus:text-white hover:text-white w-[100%] h-12 md:w-full text-xs md:text-base";
  return (
    <nav className="w-full text-white flex flex-col md:ml-5 md:flex-row justify-around items-end ">
      <ul
        className={`top-20 md:top-28 ${
          isMenuOpen ? "absolute" : "hidden"
        }   flex md:flex md:static flex-col md:flex-row w-full bg-black lg:h-12 pl-3 md:pl-0`}
      >
        <li
          key={"service"}
          className={`text-xs md:text-base flex jutify-end md:justify-center items-start md:basis-1/4`}
        >
          <NavLink
            onClick={closeMenu}
            to={`/${servicesLinksActual[0]}`}
            className={({ isActive }) =>
              isActive
                ? `text-white ${navLinkStyle}`
                : `text-gray ${navLinkStyle}`
            }
          >
            <Dropdown title={servicesLinks[0]} closeMenu={closeMenu} />
          </NavLink>
        </li>
        {servicesLinks.slice(1).map((link, index) => (
          <li
            key={link + index}
            className="flex jutify-end md:justify-center items-start md:basis-1/4"
          >
            <NavLink
              onClick={closeMenu}
              to={`/${servicesLinksActual.slice(1)[index]}`}
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
      <div className="flex justify-start items-center mr-5 md:mr-8">
        <ConntactsButtons />
        <div
          onClick={closeMenu}
          className="flex md:hidden justify-center items-center active:scale-110 duration-300 pl-1 ml-2"
        >
          {isMenuOpen ? <Cross /> : <Menu />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
