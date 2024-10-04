const InputField = (props) => {
  const {
    handleChange,
    label,
    name,
    type,
    value,
    placeholder,
    required,
  } = props;
  return (
    <div className="w-full py-1">
      <label
        className="flex flex-col font-syne font-semibold text-md"
        htmlFor={name}
      >
        {label}
      </label>
      <input
        id={name}
        className="my-1 p-2 text-black w-full bg-light-gray rounded-sm text-sm placeholder:text-sm placeholder:font-sans focus:outline-blue"
        type={type}
        onChange={handleChange}
        value={value}
        name={name}
        placeholder={placeholder}
        autoComplete="off"
        required={required}
      />
    </div>
  );
};

export default InputField;
