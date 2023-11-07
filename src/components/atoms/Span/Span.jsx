import PropTypes from 'prop-types';

export const Span = ({ children, className }) => {
  return <span className={className}>{children}</span>;
};

Span.propTypes = {
  className: PropTypes.string,
};
