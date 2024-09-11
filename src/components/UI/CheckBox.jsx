import React from "react";

const Checkbox = (props) => {
  const { label, handleChange, name, defaultOption, options } = props;
  return (
    <div className="w-full p-1">
      <label className="flex flex-col font-semibold" htmlFor={name}>
        {label}
      </label>
      <input
        type="checkbox"
        id={name}
        onChange={handleChange}
        defaultValue="package"
        name={name}
        className="w-full text-dark-gray bg-light-gray my-1 p-2 text-sm "
      >
        <option value="package" disabled>
          {defaultOption}
        </option>
        {options.map((option) => (
          <option key={option} value={option} className="text-sm">
            {option}
          </option>
        ))}
      </input>
    </div>
  );
};

export default Checkbox;
