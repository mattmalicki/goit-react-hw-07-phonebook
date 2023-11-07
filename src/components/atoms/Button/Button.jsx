import PropTypes from 'prop-types';

export const Button = ({ children, className, type, onClick = () => {} }) => {
  return (
    <button id={children} className={className} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
};
