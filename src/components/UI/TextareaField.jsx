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
        className="p-1  text-black bg-light-gray w-full font-inherit text-sm"
        value={value}
        placeholder="You can leave a message here..."
      ></textarea>
    </div>
  );
};

export default TextareaField;
