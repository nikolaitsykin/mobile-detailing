import React from "react";

const Button = ({ children, color, onClick }) => {
  const buttonStyle = {
    primary:
      "text-black bg-gray hover:bg-black hover:text-white border-dark-gray hover:border-white",
    secondary:
      "text-white hover:text-white bg-blue hover:bg-dark-blue border-blue hover:border-white",
  };

  return (
    <div className="flex items-center">
      <button
        className={`text-xs s:text-sm sm:text-xs md:text-sm p-2 border shadow
          min-w-40 sm:w-44 min-h-10 sm:h-10 flex justify-center items-center rounded-full
          ${buttonStyle[color]}
        `}
        onClick={onClick}
        type="button"
        tabIndex={0}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
