import { createAction, nanoid } from '@reduxjs/toolkit';

export const addContact = createAction('contacts/addContact', newContact => {
  return {
    payload: {
      name: newContact.name,
      number: newContact.number,
      id: nanoid(),
    },
  };
});

export const deleteContact = createAction(
  'contacts/deleteContact',
  contactId => {
    return {
      payload: contactId,
    };
  }
);

export const setFilter = createAction('filter/setFilter', filterValue => {
  return {
    payload: filterValue,
  };
});
