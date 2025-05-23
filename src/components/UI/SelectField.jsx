const SelectField = (props) => {
  const { label, handleChange, name, defaultOption, options, value, required } =
    props;

  return (
    <div className="flex flex-col w-full py-1 justify-between h-full">
      <label
        className="  font-medium text-sm md:text-base"
        htmlFor={name}
      >
        {label}
      </label>
      <select
        required={required}
        id={name}
        value={value}
        onChange={handleChange}
        name={name}
        className="w-full text-dark-gray bg-light-gray my-1 p-2 text-sm md:text-base"
      >
        <option
          key="blankKey"
          hidden
          value
          className="text-sm md:text-base p-1"
        >
          {defaultOption}
        </option>
        {options.map((option, index) => (
          <option
            key={index}
            value={option}
            className="text-sm md:text-base p-1 ml-10"
          >
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectField;
