import React from "react";

const Button = ({ children, color, onClick, type }) => {
  const buttonStyle = {
    primary:
      "text-white  active:bg-white active:text-black border-white active:border-black hover:bg-white hover:border-black hover:text-black",
    secondary:
      "text-white active:text-white bg-blue active:bg-navy border-blue hover:bg-navy",
    disabled:
      "text-white active:text-white bg-blue active:bg-navy border-blue hover:bg-navy opacity-53",
  };

  return (
    <div className="flex justify-center items-center w-full">
      <button
        className={`tracking-widest text-xs md:text-sm p-2 border shadow
          min-w-40 md:max-w-72 w-[90%] min-h-10 sm:h-10 flex justify-center items-center
          ${buttonStyle[color]}
        `}
        onClick={onClick}
        type={type}
        tabIndex={0}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
