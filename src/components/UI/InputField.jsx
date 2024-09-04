const InputField = (props) => {
  const { handleChange, label, name, type, value, placeholder } = props;
  return (
    <div className="w-full p-1">
      <label className="flex flex-col" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        className="p-1 text-black w-full bg-light-gray rounded-sm placeholder:text-sm placeholder:font-sans"
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
