const TextareaField = (props) => {
  const { handleChange, label, name, value } = props;
  return (
    <div className="w-full py-1">
      <label className="flex flex-col text-md font-medium" htmlFor={name}>
        {label}
      </label>
      <textarea
        id={name}
        onChange={handleChange}
        name={name}
        rows="6"
        className="my-1 p-2 text-black bg-light-gray w-full font-inherit text-sm"
        value={value}
        placeholder="Tell us more about your vehicle or anything important we need to know"
      ></textarea>
    </div>
  );
};

export default TextareaField;
