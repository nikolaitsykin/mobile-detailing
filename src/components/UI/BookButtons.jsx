import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

const BookButtons = ({ color }) => {
  return (
    <div className="py-5 flex  justify-center items-center">
      <div className="my-1 min-w-40 md:min-w-48">
        <Link
          to="https://squareup.com/appointments/book/t25pubegvfjcw1/LDK47FK18Z9GH/start"
          target="_blank"
        >
          <Button children={"Book Online"} color={color} />
        </Link>
      </div>
      <div className="my-1 min-w-40 md:min-w-48">
        <Link to="/booking">
          <Button children={"Request Quote"} color={color} />
        </Link>
      </div>
    </div>
  );
};

export default BookButtons;
