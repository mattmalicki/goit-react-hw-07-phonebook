// React
import { useState, useEffect } from 'react';
// Components
import { Header } from 'components/atoms/Header/Header';
import { ContactForm } from 'components/organisms/ContactForm/ContactForm';
import { ContactList } from 'components/organisms/ContactList/ContactList';
import { Filter } from 'components/molecules/Filter/Filter';
// Imported libraries
import { nanoid } from 'nanoid';
// Imported functions
import { loadStorage, saveStorage } from 'js/localStorage';
// CSS Styles
import styles from './App.module.css';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  const addContact = (name, phone) => {
    const id = nanoid();
    setContacts([...contacts, { id, name, phone }]);
  };

  const updateFilter = input => {
    setFilter(input);
  };

  const isInPhonebook = name => {
    return contacts.filter(contact => contact.name === name).length > 0
      ? true
      : false;
  };

  const removeContact = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  const handleChangeFilter = event => {
    updateFilter(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const name = form.name.value;
    const number = form.number.value;
    if (isInPhonebook(name)) {
      alert(name + ' is already in contacts');
      return;
    }
    addContact(name, number);
    form.reset();
  };

  const handleDeleteButton = event => {
    if (event.target.nodeName !== 'BUTTON') {
      return;
    }
    const id = event.target.parentElement.id;
    removeContact(id);
  };

  useEffect(() => {
    try {
      const contactsFromStorage = loadStorage('contacts');
      contactsFromStorage.length > 0 && setContacts([...contactsFromStorage]);
    } catch (e) {
      console.log('Error ', e.toString());
    }
  }, []);

  useEffect(() => {}, [filter]);

  useEffect(() => {
    saveStorage('contacts', contacts);
  }, [contacts]);

  return (
    <div className={styles.appContainer}>
      <Header level={2} className={styles.appHeader}>
        Phonebook
      </Header>
      <ContactForm onSubmit={handleSubmit} />
      <Header level={2} className={styles.appHeader}>
        Contacts
      </Header>
      {contacts.length > 0 ? <Filter onChange={handleChangeFilter} /> : null}
      <ContactList
        contacts={contacts.filter(obj => obj.name.includes(filter))}
        onClick={handleDeleteButton}
      />
    </div>
  );
};
