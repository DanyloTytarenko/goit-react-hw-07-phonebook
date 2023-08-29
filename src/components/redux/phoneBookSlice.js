import { createSlice } from '@reduxjs/toolkit';

import {
  addNewContact,
  fetchContacts,
  removeContact,
} from './contactsOperations';

import { initialState } from './initialState';

const handlePending = ({ contacts }) => {
  contacts.isLoading = true;
};

const handleRejected = ({ contacts }, { payload }) => {
  contacts.isLoading = false;
  contacts.error = payload;
};

export const phoneBookSlice = createSlice({
  name: 'phoneBook',
  initialState,
  reducers: {
    filterContacts: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, ({ contacts }, { payload }) => {
        contacts.isLoading = false;
        contacts.items = payload;
        contacts.error = null;
      })
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(addNewContact.pending, handlePending)
      .addCase(addNewContact.fulfilled, ({ contacts }, { payload }) => {
        contacts.isLoading = false;
        contacts.items.push(payload);
        contacts.error = null;
      })
      .addCase(addNewContact.rejected, handleRejected)
      .addCase(removeContact.pending, handlePending)
      .addCase(removeContact.fulfilled, ({ contacts }, { payload }) => {
        contacts.isLoading = false;
        const index = contacts.items.findIndex(
          contact => contact.id === payload.id
        );
        contacts.items.splice(index, 1);
        contacts.error = null;
      })
      .addCase(removeContact.rejected, handleRejected);
  },
});

export const phoneBookReducer = phoneBookSlice.reducer;

export const { filterContacts } = phoneBookSlice.actions;
