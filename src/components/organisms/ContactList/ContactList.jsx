import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/selectors';

import { Filter } from 'components/molecules/Filter/Filter';
import { ContactListItem } from 'components/molecules/ContactListItem/ContactListItem';

import styles from './ContactList.module.css';

export const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);

  return (
    <>
      {contacts.inPhonebook > 0 && <Filter />}
      <ul className={styles.ContactList}>
        {contacts.visible.map(contact => {
          return (
            <ContactListItem key={contact.id} item={contact} classes={styles} />
          );
        })}
      </ul>
    </>
  );
};
