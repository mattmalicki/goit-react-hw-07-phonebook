import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';

import { Span } from 'components/atoms/Span/Span';
import { Button } from 'components/atoms/Button/Button';

import PropTypes from 'prop-types';

import { deleteIcon, favIcon, noFavIcon } from 'services/icons';

export const ContactListItem = ({ item, classes }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(item.id));
  };

  const handleFav = () => {
    console.log('Favourite icon');
  };
  return (
    <li className={classes.contactItem} id={item.id}>
      <Span className={classes.contactNumber}>{item.name}</Span>
      <Span className={classes.contactNumber}>{item.number}</Span>
      <div>
        <Button
          className={classes.contactButton}
          type="button"
          onClick={handleDelete}
        >
          <svg
            className={classes.iconDelete}
            width="24px"
            height="24px"
            viewBox="0 0 28 28"
          >
            <path d={deleteIcon} />
          </svg>
        </Button>
        <Button
          className={classes.contactButton}
          type="button"
          onClick={handleFav}
        >
          <svg
            className={item.favourite ? classes.iconFav : classes.iconNoFav}
            width="24px"
            height="24px"
            viewBox="0 0 28 28"
          >
            <path d={item.favourite ? favIcon : noFavIcon} />
          </svg>
        </Button>
      </div>
    </li>
  );
};

ContactListItem.propTypes = {
  classes: PropTypes.shape(),
  item: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    number: PropTypes.string,
  }),
};
