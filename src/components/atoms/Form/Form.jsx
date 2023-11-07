import PropTypes from 'prop-types';

export const Form = ({ onSubmit = () => {}, className, children }) => {
  return (
    <form className={className} onSubmit={onSubmit}>
      {children}
    </form>
  );
};

Form.propTypes = {
  onSubmit: PropTypes.func,
  className: PropTypes.string,
};
