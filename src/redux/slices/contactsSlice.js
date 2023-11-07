import { createSlice, nanoid } from '@reduxjs/toolkit';
import {
  addContact,
  fetchContacts,
  deleteContact,
  toggleFavourite,
} from '../operations';

import { loadStorage, saveStorage } from 'services/localStorage';

const fromLocalStorage = loadStorage('contacts');

const addToStorage = contact => {
  const fromStorage = loadStorage('contacts');
  saveStorage('contacts', fromStorage ? [...fromStorage, contact] : [contact]);
};

const deleteFromStorage = id => {
  const fromStorage = loadStorage('contacts');
  saveStorage(
    'contacts',
    fromStorage.filter(contact => contact.id !== id)
  );
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: fromLocalStorage || [],
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(contact) {
        const id = nanoid();
        addToStorage({ ...contact, id });
        return {
          payload: {
            id: id,
            name: contact.name,
            number: contact.number,
          },
        };
      },
    },
    deleteContact(state, action) {
      deleteFromStorage(action.payload);
      const index = state.findIndex(contact => contact.id === action.payload);
      state.splice(index, 1);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
