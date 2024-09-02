import React from "react";

const Button = ({ children, color, onClick, type }) => {
  const buttonStyle = {
    primary:
      "text-black bg-gray active:bg-black active:text-white border-dark-gray active:border-white hover:scale-105",
    secondary:
      "text-white active:text-white bg-blue active:bg-dark-blue border-blue active:border-white hover:scale-105",
  };

  return (
    <div className="flex items-center">
      <button
        className={`text-xs md:text-sm p-2 border shadow
          min-w-32 md:w-44 min-h-10 sm:h-10 flex justify-center items-center rounded-full
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
