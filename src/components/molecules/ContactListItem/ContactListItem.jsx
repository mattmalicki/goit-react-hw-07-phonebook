import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/slices/contactsSlice';

import { Span } from 'components/atoms/Span/Span';
import { Button } from 'components/atoms/Button/Button';

import PropTypes from 'prop-types';

export const ContactListItem = ({ item, classes }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(item.id));
  };
  return (
    <li className={classes.contactItem} id={item.id}>
      <Span className={classes.contactNumber}>{item.name}</Span>
      <Span className={classes.contactNumber}>{item.number}</Span>
      <Button
        className={classes.contactButton}
        type="button"
        onClick={handleDelete}
      >
        Delete
      </Button>
    </li>
  );
};

ContactListItem.propTypes = {
  classes: PropTypes.shape(),
  item: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    phone: PropTypes.string,
  }),
};
