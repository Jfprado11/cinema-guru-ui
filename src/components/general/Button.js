import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './general.css';

function Button({ label, className, onClick, icon, children }) {
  return (
    <button type={label} className={`btn ${className}`} onClick={onClick}>
      {icon && (
        <span className="icons-span">
          <FontAwesomeIcon icon={icon} size={'sm'} />
        </span>
      )}
      {children}
    </button>
  );
}

Button.defaultProps = {
  className: '',
  label: '',
};

export default Button;
