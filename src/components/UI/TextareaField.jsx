const TextareaField = (props) => {
  const { handleChange, label, name, value } = props;
  return (
    <div className="w-full p-1">
      <label className="flex flex-col" htmlFor={name}>
        {label}
      </label>
      <textarea
        id={name}
        onChange={handleChange}
        name={name}
        rows="4"
        className="p-1 rounded-sm text-black w-full"
        value={value}
      >Type here...</textarea>
    </div>
  );
};

export default TextareaField;
