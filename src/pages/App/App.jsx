import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchContacts } from 'redux/operations';
import { selectIsLoading, selectError } from 'redux/selectors';

import { Loader } from 'components/atoms/Loader/Loader';
import { Header } from 'components/atoms/Header/Header';
import { ContactForm } from 'components/organisms/ContactForm/ContactForm';
import { ContactList } from 'components/organisms/ContactList/ContactList';

import styles from './App.module.css';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={styles.appContainer}>
      <Header level={2} className={styles.appHeader}>
        Phonebook
      </Header>
      <ContactForm />
      <Header level={2} className={styles.appHeader}>
        Contacts
      </Header>
      {isLoading && !error && <Loader />}
      <ContactList />
    </div>
  );
};
