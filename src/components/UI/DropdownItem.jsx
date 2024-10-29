import React from "react";
import { NavLink } from "react-router-dom";

const DropdownItem = ({ name, title, link }) => {
  const dropdownLinkStyle =
    "text-xs md:text-sm flex justify-start items-center text-gray focus:text-white hover:text-white w-[100%] h-12 md:w-full";

  return (
    <li
      key={name}
      className="float-none px-3 text-left flex items-center h-12 hover:bg-dark-gray"
    >
      <NavLink
        key={name}
        onClick={() => {}}
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
