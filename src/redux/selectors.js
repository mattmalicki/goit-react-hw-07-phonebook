import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectFilter = state => state.filter.status;

export const selectShowFilter = state => state.filter.show;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, statusFilter) => {
    return {
      visible: contacts.filter(obj =>
        obj.name.toLowerCase().includes(statusFilter)
      ),
      inPhonebook: contacts.length,
    };
  }
);
