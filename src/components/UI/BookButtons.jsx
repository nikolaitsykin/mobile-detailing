import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

const BookButtons = ({ color }) => {
  return (
    <div className=" animate-slidein700 opacity-0  flex flex-col xs:flex-row justify-center items-center">
      <span className="m-2 md:m-3 min-w-32 md:min-w-48">
        <Link
          to="https://squareup.com/appointments/book/t25pubegvfjcw1/LDK47FK18Z9GH/start"
          target="_blank"
        >
          <Button children={"Book Online"} color={color} />
        </Link>
      </span>
      <span className="m-2 md:m-3 min-w-32 md:min-w-48">
        <Link to="/booking">
          <Button children={"Request Quote"} color={color} />
        </Link>
      </span>
    </div>
  );
};

export default BookButtons;
