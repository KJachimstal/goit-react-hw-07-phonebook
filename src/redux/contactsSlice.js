import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts } from './operations';

const contactsInitialState = {
  items: [],
  isLoading: false,
  error: null,
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,

  extraReducers: {
    [fetchContacts.pending](state) {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchContacts.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },

  // reducers: {
  //   fetchingInProgress(state) {
  //     state.isLoading = true;
  //   },

  //   fetchingSuccess(state, action) {
  //     state.isLoading = false;
  //     state.error = null;
  //     state.items = action.payload;
  //   },

  //   fetchingError(state, action) {
  //     state.isLoading = false;
  //     state.error = action.payload;
  //   },
  // },
});

// export const { fetchingInProgress, fetchingSuccess, fetchingError } =
//   contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
