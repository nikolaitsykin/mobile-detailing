const InputField = (props) => {
  const { handleChange, label, name, type, value, placeholder } = props;
  return (
    <div className="w-full p-1">
      <label className="flex flex-col" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        className="p-1 rounded-sm text-black border-dark-gray w-full"
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
