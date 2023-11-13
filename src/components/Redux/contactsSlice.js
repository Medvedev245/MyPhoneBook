import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import { nanoid } from 'nanoid';
import storage from 'redux-persist/lib/storage';

const contactsInitialState = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
};

const contactSlise = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,

  reducers: {
    onDelete(state, action) {
      state.contacts = state.contacts.filter(
        item => item.id !== action.payload
      );
    },
    addContacts: {
      reducer(state, action) {
        state.contacts.push(action.payload);
      },
      prepare(contact) {
        return { payload: { ...contact, id: nanoid(5) } };
      },
    },
  },
});
////slice - contactSlise
export const contactsReducer = contactSlise.reducer;

const persistConfig = {
  key: 'root',
  storage,
};

export const persistedContactsReducer = persistReducer(
  persistConfig,
  contactsReducer
);
////
// export const contactReducer = contactSlise.reducer;
export const { onDelete, addContacts } = contactSlise.actions;
