import PropTypes from 'prop-types';

export const Input = ({
  className,
  type = 'text',
  name = '',
  pattern = '',
  title = '',
  isRequired = false,
  onChange = () => {},
}) => {
  return (
    <input
      className={className}
      type={type}
      onChange={onChange}
      name={name}
      pattern={pattern}
      title={title}
      required={isRequired}
    />
  );
};

Input.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  pattern: PropTypes.string,
  title: PropTypes.string,
  isRequired: PropTypes.bool,
  onChange: PropTypes.func,
};
