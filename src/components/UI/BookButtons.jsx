import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import { BOOKING_URL, CONTACT_PATH } from "../../utils/constants";

const BookButtons = ({ color, border }) => {
  return (
    <div className="flex flex-col xxs:flex-row justify-center items-center">
      <div className="m-0.5 min-w-32 md:w-40">
        <Link to={BOOKING_URL} target="_blank">
          <Button children={"Book Online"} color={color} border={border} />
        </Link>
      </div>
      <div className="m-0.5 min-w-32 md:w-40">
        <Link to={CONTACT_PATH}>
          <Button children={"Request Quote"} color={color} border={border} />
        </Link>
      </div>
    </div>
  );
};

export default BookButtons;
