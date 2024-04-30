import PropTypes from "prop-types";

const Button = ({ label, className }) => {
  return (
    <button className={`btn text-sm font-semibold ${className}`}>
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string,
  className: PropTypes.string,
};
export default Button;
