import PropTypes from 'prop-types';

export const Label = ({ name, className, children }) => {
  return (
    <label name={name} className={className}>
      {children}
    </label>
  );
};

Label.propTypes = {
  name: PropTypes.string,
  className: PropTypes.string,
};
