import { statusFav } from 'redux/constants';
import { useDispatch } from 'react-redux';
import { changeShow } from 'redux/slices/filterSlice';

import { Button } from 'components/atoms/Button/Button';

import { favIcon, noFavIcon } from 'services/icons';
import classes from '../../organisms/ContactList/ContactList.module.css';

export const ShowFilter = () => {
  const dispatch = useDispatch();
  const handleChange = filter => dispatch(changeShow(filter));
  return (
    <div className={classes.showFilter}>
      <Button
        type="button"
        className={classes.contactButton}
        onClick={() => handleChange(statusFav.all)}
      >
        <span className={classes.allButton}>All</span>
      </Button>
      <Button
        type="button"
        className={classes.contactButton}
        onClick={() => handleChange(statusFav.fav)}
      >
        <svg
          className={classes.iconFav}
          width="24px"
          height="24px"
          viewBox="0 0 28 28"
        >
          <path d={favIcon} />
        </svg>
      </Button>
      <Button
        type="button"
        className={classes.contactButton}
        onClick={() => handleChange(statusFav.nofav)}
      >
        <svg
          className={classes.iconNoFav}
          width="24px"
          height="24px"
          viewBox="0 0 28 28"
        >
          <path d={noFavIcon} />
        </svg>
      </Button>
    </div>
  );
};
