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
      className=" float-none px-2 text-left flex items-center hover:bg-dark-gray"
    >
      <div className="float-start md:float-left overflow-hidden ">
        <button
          className="text-xs md:text-base flex justify-center items-center  text-gray focus:text-white hover:text-white h-10 md:h-14 text-md fill-gray hover:fill-white"
          type="button"
        >
          {options[0].type}
          <ArrowDown />
        </button>
        <ul
          className={`
            ${isOptionsOpen ? "block" : "hidden"} 
            "z-10 flex-col absolute bg-black min-w-36 md:min-w-64 shadow-lg -mt-[40px] md:-mt-14 ml-[136px] md:ml-44`}
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
