import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import { BOOKING_URL, CONTACT_PATH } from "../../utils/constants";

const BookButtons = ({ color, border }) => {
  return (
    <div className="flex flex-col xxs:flex-row justify-center items-center">
      <div className="m-2 min-w-32 md:w-60">
        <Link to={BOOKING_URL} target="_blank">
        <Button children={"Book Online"} color={color} border={border} width={"w-40 md:w-60"} />
        </Link>
      </div>
      <div className="m-2 min-w-32 md:w-60">
        <Link to={CONTACT_PATH} target={"_blank"}>
          <Button children={"Request Quote"} color={color} border={border} width={"w-40 md:w-60"} />
        </Link>
      </div>
    </div>
  );
};

export default BookButtons;
