import React from "react";

const Button = ({ children, color, onClick, type }) => {
  const buttonStyle = {
    primary:
      "text-black bg-white active:bg-black active:text-white border-dark-gray active:border-white hover:bg-black hover:border-white hover:text-white",
    secondary:
      "text-white active:text-white bg-blue active:bg-navy border-blue hover:bg-navy",
  };

  return (
    <div className="flex justify-center items-center w-full">
      <button
        className={`tracking-widest text-xs md:text-sm p-2 border shadow
          min-w-32 max-w-72 w-full min-h-10 sm:h-10 flex justify-center items-center
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
