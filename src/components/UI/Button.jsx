import React from "react";

const Button = ({ children, color, onClick, type, border, header, width }) => {
  const buttonStyle = {
    primary:
      "text-white font-medium active:bg-white active:text-black border-white active:border-black hover:bg-white hover:border-black hover:text-black hover:font-semibold",
    secondary:
      "text-white font-medium active:text-white bg-blue active:bg-navy border-blue hover:bg-navy",
    tertiary:
      "text-black font-medium active:text-white bg-white active:bg-navy border border-black hover:bg-black hover:text-white hover:border-black",
    disabled:
      "text-white active:text-white bg-blue active:bg-navy border-blue hover:bg-navy opacity-53",
  };

  return (
    <div className="flex justify-center items-center w-full ">
      <button
        className={`tracking-widest text-xs md:text-base ${border} shadow rounded-sm
          ${header ? "w-32 h-8 md:h-10 lg:w-40" : width} ${
          width ? width : "w-40"
        } h-10 flex justify-center items-center
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
