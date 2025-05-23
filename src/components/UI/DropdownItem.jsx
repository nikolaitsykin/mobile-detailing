import React from "react";
import { NavLink } from "react-router-dom";

const DropdownItem = ({ name, title, link, closeMenu, closeDropdown }) => {
  const close = () => {
    closeMenu();
    closeDropdown();
  };
  const dropdownLinkStyle =
    "text-xs md:text-base flex justify-start items-center text-gray focus:text-white hover:text-white w-[100%] h-10 md:h-14 md:w-full";

  return (
    <li
      onClick={close}
      key={name}
      className="float-none px-5 text-left flex items-center h-10 md:h-14 hover:bg-dark-gray"
    >
      <NavLink
        key={name}
        to={`${link}`}
        className={({ isActive }) =>
          (isActive ? "text-white" : "text-gray") + ` ${dropdownLinkStyle}`
        }
      >
        {title}
      </NavLink>
    </li>
  );
};

export default DropdownItem;
