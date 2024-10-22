import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as Cross } from "../../assets/icons/cross.svg";
import { ReactComponent as Menu } from "../../assets/icons/menu-burger.svg";
import { ReactComponent as MessageSms } from "../../assets/icons/message-sms.svg";
import { ReactComponent as PhoneCall } from "../../assets/icons/phone-call.svg";
import { CALL_NUMBER, TEXT_NUMBER } from "../../utils/constants";
import { servicesLinks, servicesLinksActual } from "../../utils/data";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen]);

  const navLinkStyle =
    "flex justify-center items-center text-gray lg:hover:text-white focus:text-white hover:text-white w-[100%] h-12 lg:w-full text-md";

  return (
    <nav className="w-full lg:w-[85%] text-white flex flex-col md:ml-5 lg:flex-row justify-around items-end">
      <div className="flex justify-end gap-2">
        <div className="flex lg:hidden justify-center items-center active:scale-110 duration-300 ">
          <a href={CALL_NUMBER}>
            <div className="hover:scale-110 duration-700">
              <PhoneCall />
            </div>
          </a>
        </div>
        <div className="flex lg:hidden justify-center items-center active:scale-110 duration-300 px-2">
          <a href={TEXT_NUMBER}>
            <div className="hover:scale-110 duration-700">
              <MessageSms />
            </div>
          </a>
        </div>
        <div
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="mr-5 md:mr-16 lg:hidden items-end active:scale-110 duration-300"
        >
          {isMenuOpen ? <Cross /> : <Menu />}
        </div>
      </div>
      <ul
        className={` top-20 md:top-28 ${
          isMenuOpen ? "absolute" : "hidden"
        }   flex lg:flex lg:static flex-col lg:flex-row w-full bg-black`}
      >
        {servicesLinks.map((link, index) => (
          <li
            key={link}
            className="flex jutify-end lg:justify-center items-center basis-1/4"
          >
            <NavLink
              onClick={() => setIsMenuOpen(false)}
              to={`/${servicesLinksActual[index]}`}
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
