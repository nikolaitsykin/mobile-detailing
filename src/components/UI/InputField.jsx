const InputField = (props) => {
  const { handleChange, label, name, type, value, placeholder } = props;
  return (
    <div className="w-full p-1">
      <label
        className="flex flex-col font-syne font-semibold text-md"
        htmlFor={name}
      >
        {label}
      </label>
      <input
        id={name}
        className="my-1 p-2 text-black w-full bg-light-gray rounded-sm text-sm placeholder:text-sm placeholder:font-sans focus:border-blue"
        type={type}
        onChange={handleChange}
        value={value}
        name={name}
        placeholder={placeholder}
        autoComplete="off"
        required
      />
    </div>
  );
};

export default InputField;
