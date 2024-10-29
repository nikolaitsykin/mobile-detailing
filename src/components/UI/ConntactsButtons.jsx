import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { ReactComponent as Cross } from "../../assets/icons/cross.svg";
import { ReactComponent as Menu } from "../../assets/icons/menu-burger.svg";
import { ReactComponent as MessageSms } from "../../assets/icons/message-sms.svg";
import { ReactComponent as PhoneCall } from "../../assets/icons/phone-call.svg";
import { ReactComponent as ArrowDown } from "../../assets/icons/arrow_down_icon.svg";
import {
  BOOKING_PAGE_PATH,
  CALL_NUMBER,
  TEXT_NUMBER,
} from "../../utils/constants";
import { servicesLinks, servicesLinksActual } from "../../utils/data";
import { interiorDetailingServices } from "../../utils/detailingPackages";
import Button from "./Button";
import Dropdown from "./Dropdown";

const ConntactsButtons = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const onMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen]);

  return (
    <div className="flex h-12 gap-2">
      <div className="flex justify-center items-center active:scale-110 duration-300 ">
        <a href={CALL_NUMBER}>
          <div className="hover:scale-110 duration-700">
            <PhoneCall />
          </div>
        </a>
      </div>
      <div className="flex justify-center items-center active:scale-110 duration-300 px-2">
        <a href={TEXT_NUMBER}>
          <div className="hover:scale-110 duration-700">
            <MessageSms />
          </div>
        </a>
      </div>
      <div className="flex items-center h-12">
        <Link to={BOOKING_PAGE_PATH}>
          <Button
            children={"BOOK NOW"}
            color={"primary"}
            border="border"
            header
          />
        </Link>
      </div>
    </div>
  );
};

export default ConntactsButtons;
