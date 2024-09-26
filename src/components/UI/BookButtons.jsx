import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import { BOOKING_URL, CONTACT_PATH } from "../../utils/constants";

const BookButtons = ({ color }) => {
  return (
    <div className="py-5 flex flex-col xxs:flex-row justify-center items-center">
      <div className="m-1 min-w-40 md:min-w-48">
        <Link to={BOOKING_URL} target="_blank">
          <Button children={"Book Online"} color={color} />
        </Link>
      </div>
      <div className="m-1 min-w-40 md:min-w-48">
        <Link to={CONTACT_PATH}>
          <Button children={"Request Quote"} color={color} />
        </Link>
      </div>
    </div>
  );
};

export default BookButtons;
