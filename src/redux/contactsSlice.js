import { createSlice } from '@reduxjs/toolkit';
// import { nanoid } from 'nanoid';
import {
  fetchContacts,
  addContact,
  deleteContact,
  // filterContact,
} from './operations';

export const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: {
      items: [
        {
          name: 'qweJasmine McLaughlin',
          phone: '779-542-8962',
          id: '888',
        },
        {
          name: 'qweRuth Zulauf',
          phone: '913-225-9886',
          id: '988',
        },
      ],
      isLoading: false,
      error: null,
    },
    filter: '',
  },
  reducers: {
    filterContact(state, action) {
      state.filter = action.payload;
    },
  },
  extraReducers: {
    [fetchContacts.pending](state) {
      state.contacts.isLoading = true;
    },
    [fetchContacts.fulfilled](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      state.contacts.items = action.payload;
    },
    [fetchContacts.rejected](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = action.payload;
    },
    [addContact.pending](state) {
      state.contacts.isLoading = true;
    },
    [addContact.fulfilled](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      state.contacts.items.push(action.payload);
    },
    [addContact.rejected](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = action.payload;
    },
    [deleteContact.pending](state) {
      state.contacts.isLoading = true;
    },
    [deleteContact.fulfilled](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      const index = state.contacts.items.findIndex(
        task => task.id === action.payload.id
      );
      state.contacts.items.splice(index, 1);
    },
    [deleteContact.rejected](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = action.payload;
    },
    // [filterContact.pending](state) {
    //   state.contacts.isLoading = true;
    // },
    // [filterContact.fulfilled](state, action) {
    //   state.contacts.isLoading = false;
    //   state.contacts.error = null;
    //   state.filter = action.payload;
    // },
    // [filterContact.rejected](state, action) {
    //   state.contacts.isLoading = false;
    //   state.contacts.error = action.payload;
    // },
  },
});

export const { filterContact } = contactSlice.actions;
