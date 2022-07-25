import './general.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Input({ label, type, className, value, setValue, icon, inputAttributes }) {
  const hendleInput = (onChange) => {
    setValue(onChange.target.value);
  };

  return (
    <div className={`Input-container ${className}`}>
      <label htmlFor={inputAttributes.for}>
        {icon && (
          <FontAwesomeIcon icon={icon} size={inputAttributes.size} className={`icon ${inputAttributes.color}`} />
        )}
        {label}
      </label>
      <input type={type} onChange={hendleInput} id={inputAttributes.for} />
    </div>
  );
}

Input.defaultProps = {
  inputAttributes: {
    color: '',
    size: 'xs',
    for: '',
  },
};

export default Input;
