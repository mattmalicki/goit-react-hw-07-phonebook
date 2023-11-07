import { useDispatch } from 'react-redux';
import { addContact } from 'redux/operations';

import { Form } from 'components/atoms/Form/Form';
import { Label } from 'components/atoms/Label/Label';
import { Input } from 'components/atoms/Input/Input';
import { Button } from 'components/atoms/Button/Button';

import PropTypes from 'prop-types';

import styles from './ContactForm.module.css';

export const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    dispatch(addContact({ name: form.name.value, number: form.number.value }));
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} className={styles.contactForm}>
      <Label name="name" className={styles.contactLabel}>
        Name
      </Label>
      <Input
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        isRequired={true}
        className={styles.contactInput}
      />
      <Label name="number" className={styles.contactLabel}>
        Phone
      </Label>
      <Input
        name="number"
        type="tel"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        isRequired={true}
        className={styles.contactInput}
      />
      <Button type="submit" className={styles.contactButton}>
        Add contact
      </Button>
    </Form>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
};
