import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as ArrowDown } from "../../assets/icons/arrow_down_icon.svg";
import {
  CERAMIC_COATING_PATH,
  MOBILE_EXTERIOR_DETAILING_PATH,
  MOBILE_FULL_DETAILING_PATH,
  MOBILE_INTERIOR_DETAILING_PATH,
  THREE_YEARS_CERAMIC_PATH,
} from "../../utils/constants";
import {
  ceramicCoatingServices,
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
        className="ml-5 md:ml-2  h-12 flex justify-center md:items-start items-center text-white  hover:text-gray text-xs md:text-base md:m-0 px-2 fill-white hover:fill-gray"
        type="button"
      >
        {title}
        <ArrowDown />
      </button>
      <ul
        className={`${isDropdownOpen ? "block" : "hidden"} 
            z-10 flex-col absolute bg-black w-38 md:w-48 shadow-lg ml-28 -mt-11 md:-mt-4 md:ml-2 `}
      >
        <Link to={MOBILE_EXTERIOR_DETAILING_PATH}>
          <DropdownList
            options={exteriorDetailingServices}
            closeDropdown={closeDropdown}
            closeMenu={closeMenu}
          />
        </Link>
        <Link to={MOBILE_INTERIOR_DETAILING_PATH}>
          <DropdownList
            options={interiorDetailingServices}
            closeDropdown={closeDropdown}
            closeMenu={closeMenu}
          />
        </Link>
        <Link to={MOBILE_FULL_DETAILING_PATH}>
          <DropdownList
            options={fullDetailingServices}
            closeDropdown={closeDropdown}
            closeMenu={closeMenu}
          />
        </Link>
        <Link to={CERAMIC_COATING_PATH}>
          <DropdownList
            options={ceramicCoatingServices}
            closeDropdown={closeDropdown}
            closeMenu={closeMenu}
          />
        </Link>
      </ul>
    </div>
  );
};

export default Dropdown;
