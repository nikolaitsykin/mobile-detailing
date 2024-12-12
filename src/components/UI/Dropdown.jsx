import React, { useState } from "react";
import { ReactComponent as ArrowDown } from "../../assets/icons/arrow_down_icon.svg";
import {
  ceramicCoatingService,
  exteriorDetailingServices,
  fullDetailingServices,
  interiorDetailingServices,
} from "../../utils/detailingPackages";
import DropdownList from "./DropdownList";

const Dropdown = ({ title, closeMenu }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const closeDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div
      className="float-start md:float-left overflow-hidden"
      onMouseEnter={() => setIsDropdownOpen(true)}
      onMouseLeave={() => setIsDropdownOpen(false)}
    >
      <button
        className="flex justify-center items-center  text-gray focus:text-white hover:text-white  h-12 text-md m-0 px-3 fill-gray hover:fill-white"
        type="button"
      >
        {title}
        <ArrowDown />
      </button>
      <ul
        className={`${isDropdownOpen ? "block" : "hidden"} 
            z-10 flex-col absolute bg-black w-38 md:w-48 shadow-lg ml-20 -mt-12 md:m-0 px-1`}
      >
        <DropdownList
          options={exteriorDetailingServices}
          closeDropdown={closeDropdown}
          closeMenu={closeMenu}
        />
        <DropdownList
          options={interiorDetailingServices}
          closeDropdown={closeDropdown}
          closeMenu={closeMenu}
        />
        <DropdownList
          options={fullDetailingServices}
          closeDropdown={closeDropdown}
          closeMenu={closeMenu}
        />
        <DropdownList
          options={ceramicCoatingService}
          closeDropdown={closeDropdown}
          closeMenu={closeMenu}
        />
      </ul>
    </div>
  );
};

export default Dropdown;
