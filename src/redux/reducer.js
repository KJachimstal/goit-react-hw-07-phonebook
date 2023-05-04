import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact, setFilter } from './actions';

const initialState = {
  items: [
    { name: 'Ala', number: '11-11-11', id: 1 },
    { name: 'Hela', number: '11-11-11', id: 2 },
    { name: 'Ela', number: '11-11-11', id: 3 },
  ],
  filter: '',
};

export const contactsReducer = createReducer(initialState, {
  [addContact]: (state, action) => {
    return {
      ...state,
      items: [...state.items, action.payload],
    };
  },
  [deleteContact]: (state, action) => {
    return {
      ...state,
      items: state.items.filter(contact => contact.id !== action.payload),
    };
  },
  [setFilter]: (state, action) => {
    return {
      ...state,
      filter: action.payload,
    };
  },
});

// export const contactsReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case addContact.type: {
//       return {
//         ...state,
//         contacts: [...state.contacts, action.payload],
//       };
//     }

//     case deleteContact.type: {
//       return {
//         ...state,
//         contacts: state.contacts.filter(
//           contact => contact.id !== action.payload
//         ),
//       };
//     }

//     case setFilter: {
//       return {
//         ...state,
//         filter: action.payload,
//       };
//     }

//     default:
//       return state;
//   }
// };

// export const contactsReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'contacts/addContact': {
//       return {
//         ...state,
//         contacts: [...state.contacts, action.payload],
//       };
//     }

//     case 'contacts/deleteContact': {
//       return {
//         ...state,
//         contacts: state.contacts.filter(
//           contact => contact.id !== action.payload
//         ),
//       };
//     }

//     case 'filter/setFilter': {
//       return {
//         ...state,
//         filter: action.payload,
//       };
//     }

//     default:
//       return state;
//   }
// };
