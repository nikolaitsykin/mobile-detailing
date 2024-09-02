const SelectField = (props) => {
  const { label, handleChange, name } = props;
  return (
    <div className="w-full p-1">
      <label className="flex flex-col" htmlFor={name}>
        {label}
      </label>
      <select
        id={name}
        onChange={handleChange}
        defaultValue="package"
        name={name}
        className="w-full rounded-sm text-black border-dark-gray p-1"
      >
        <option value="package" disabled>
          Choose Package
        </option>
        <option value="basicDetail">Basic Detail</option>
        <option value="primeDetail">Prime Detail</option>
        <option value="deluxeDetail">Deluxe Detail</option>
      </select>
    </div>
  );
};

export default SelectField;
