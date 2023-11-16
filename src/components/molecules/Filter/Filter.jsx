import { useDispatch } from 'react-redux';
import { changeFilter } from 'redux/slices/filterSlice';

import { Input } from 'components/atoms/Input/Input';
import { ShowFilter } from '../ShowFilter/ShowFilter';
import { Header } from 'components/atoms/Header/Header';

import styles from './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleFilter = event => {
    dispatch(changeFilter(event.target.value));
  };
  return (
    <>
      <Header level={4} className={styles.filterHeader}>
        Find contacts by name:
      </Header>
      <div className={styles.filters}>
        <Input
          className={styles.filterInput}
          type="text"
          onChange={handleFilter}
        />
        <ShowFilter />
      </div>
    </>
  );
};
