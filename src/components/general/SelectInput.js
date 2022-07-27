import './general.css';

function SelectInput({ label, options, className, value, setValue }) {
  const hendleSelect = (onChange) => {
    setValue(onChange.target.value);
  };

  return (
    <div className={`select-container ${className}`}>
      <label>{label}</label>
      <select onChange={hendleSelect}>
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </div>
  );
}

export default SelectInput;
