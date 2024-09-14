import React from "react";
import { Link } from "react-router-dom";
import Button from "./UI/Button";

const BookButtons = ({ color }) => {
  return (
    <div className="pt-2 animate-slidein700 opacity-0  md:pt-5 flex flex-col xs:flex-row justify-center items-center">
      <span className="m-2 md:m-3 min-w-48">
      <Link to="/mobile-detailing">
          <Button children={"Book Online"} color={color} />
        </Link>
      </span>
      <span className="m-2 md:m-3 min-w-48">
        <Link to="/booking">
          <Button children={"Request Quote"} color={color} />
        </Link>
      </span>
    </div>
  );
};

export default BookButtons;
