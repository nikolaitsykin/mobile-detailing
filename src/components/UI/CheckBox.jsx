import React from "react";

const Checkbox = ({ checkHandler }) => {
  return (
    <div className="w-full p-1 flex items-start">
      <input
        type="checkbox"
        id="checkbox"
        onChange={checkHandler}
        className=" text-dark-gray bg-light-gray my-1 mx-2 text-sm "
      />
      <label className="" htmlFor={"checkbox"}>
        I understand that the detailing service requires access to power and
        water, and I guarantee that both will be provided and accessible at the
        time of service
      </label>
    </div>
  );
};

export default Checkbox;
