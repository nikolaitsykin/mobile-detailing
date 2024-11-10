import React, { useState } from "react";
import { ReactComponent as ArrowDown } from "../../assets/icons/arrow_down_icon.svg";
import DropdownItem from "./DropdownItem";

const DropdownList = ({ options, closeMenu, closeDropdown }) => {
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);
  return (
    <li
      onMouseEnter={() => setIsOptionsOpen(true)}
      onMouseLeave={() => setIsOptionsOpen(false)}
      id="interiorServices"
      key={"interiorServices"}
      className=" float-none px-3 text-left flex items-center hover:bg-dark-gray"
    >
      <div className="float-start md:float-left overflow-hidden ">
        <button
          className="text-xs md:text-sm flex justify-center items-center  text-gray focus:text-white hover:text-white h-12 text-md fill-gray hover:fill-white"
          type="button"
        >
          {options[0].type}
          <ArrowDown />
        </button>
        <ul
          className={`
            ${isOptionsOpen ? "block" : "hidden"} 
            "z-10 flex-col absolute bg-black min-w-36 md:min-w-44 shadow-lg -mt-12 ml-40 md:ml-40`}
        >
          {options.map((option) => (
            <DropdownItem
              key={option.title}
              name={option.title}
              title={option.title}
              link={option.link}
              closeMenu={closeMenu}
              closeDropdown={closeDropdown}
            />
          ))}
        </ul>
      </div>
    </li>
  );
};

export default DropdownList;
