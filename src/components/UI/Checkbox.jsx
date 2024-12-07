import React from "react";

const Checkbox = (props) => {
  const { label, name, value, required, checkHandler } = props;

  return (
    <div className="w-full py-1 flex items-start">
      <input
        type="checkbox"
        required={required}
        id={name}
        value={value}
        name={name}
        onChange={checkHandler}
        className=" text-dark-gray bg-light-gray my-1 mx-2 text-sm md:text-base"
      />
      <label className="text-sm md:text-base" htmlFor={"checkbox"}>
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
