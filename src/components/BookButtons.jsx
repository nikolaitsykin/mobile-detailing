import React from "react";
import { Link } from "react-router-dom";
import Button from "./UI/Button";

const BookButtons = ({ color }) => {
  return (
    <div className="pt-2 animate-slidein700 opacity-0  md:pt-5 flex flex-col xs:flex-row justify-center items-center">
      <span className="p-2 md:p-5">
        <Link to="/booking">
          <Button children={"BOOK NOW"} color={color} />
        </Link>
      </span>
      <span className="md:p-2">
        <a href="tel:2673106864" className="flex">
          <Button children={"CALL NOW"} color={color} />
        </a>
      </span>
    </div>
  );
};

export default BookButtons;
