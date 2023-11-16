import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectFilter = state => state.filter.status;

export const selectShowFilter = state => state.filter.show;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilter, selectShowFilter],
  (contacts, statusFilter, showFilter) => {
    let visibleContacts;
    switch (showFilter) {
      case 'all':
        visibleContacts = contacts.filter(obj =>
          obj.name.toLowerCase().includes(statusFilter)
        );
        break;
      case 'favourite':
        visibleContacts = contacts
          .filter(obj => obj.favourite)
          .filter(obj => obj.name.toLowerCase().includes(statusFilter));
        break;
      case 'nofavourite':
        visibleContacts = contacts
          .filter(obj => !obj.favourite)
          .filter(obj => obj.name.toLowerCase().includes(statusFilter));
        break;
      default:
        console.log('Error');
    }
    return {
      visible: visibleContacts,
      inPhonebook: contacts.length,
    };
  }
);
