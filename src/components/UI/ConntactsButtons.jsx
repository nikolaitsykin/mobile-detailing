import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as MessageSms } from "../../assets/icons/message-sms.svg";
import { ReactComponent as PhoneCall } from "../../assets/icons/phone-call.svg";
import {
  BOOKING_PAGE_PATH,
  CALL_NUMBER,
  TEXT_NUMBER,
} from "../../utils/constants";
import Button from "./Button";

const ConntactsButtons = () => {
  return (
    <div className="flex h-12 gap-2">
      <div className="flex justify-center items-center active:scale-110 duration-300 ">
        <a href={CALL_NUMBER}>
          <div className="hover:scale-110 duration-700">
            <PhoneCall />
          </div>
        </a>
      </div>
      <div className="flex justify-center items-center active:scale-110 duration-300 px-1">
        <a href={TEXT_NUMBER}>
          <div className="hover:scale-110 duration-700">
            <MessageSms />
          </div>
        </a>
      </div>
      <div className="xs:flex items-center h-12 hidden">
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
