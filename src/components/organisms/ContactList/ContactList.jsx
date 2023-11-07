import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';

import { Filter } from 'components/molecules/Filter/Filter';
import { ContactListItem } from 'components/molecules/ContactListItem/ContactListItem';

import styles from './ContactList.module.css';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  return (
    <>
      {contacts.length > 0 && <Filter />}
      <ul className={styles.ContactList}>
        {contacts
          .filter(obj => obj.name.toLowerCase().includes(filter))
          .map(contact => {
            return (
              <ContactListItem
                key={contact.id}
                item={contact}
                classes={styles}
              />
            );
          })}
      </ul>
    </>
  );
};
