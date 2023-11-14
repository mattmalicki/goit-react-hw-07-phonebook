import { Header } from 'components/atoms/Header/Header';
import { ContactForm } from 'components/organisms/ContactForm/ContactForm';
import { ContactList } from 'components/organisms/ContactList/ContactList';
import { Filter } from 'components/molecules/Filter/Filter';

import styles from './App.module.css';

export const App = () => {
  return (
    <div className={styles.appContainer}>
      <Header level={2} className={styles.appHeader}>
        Phonebook
      </Header>
      <ContactForm />
      <Header level={2} className={styles.appHeader}>
        Contacts
      </Header>
      {contacts.length > 0 ? <Filter /> : null}
      <ContactList />
    </div>
  );
};
