export const selectContacts = state => state.contacts.items;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectFilter = state => state.filter.status;

export const visibleContacts = state => {
  const contacts = selectContacts(state);
  const statusFilter = selectFilter(state);

  return contacts.filter(obj => obj.name.toLowerCase().includes(statusFilter));
};
