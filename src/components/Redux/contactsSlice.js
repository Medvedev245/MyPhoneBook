import { createSlice } from '@reduxjs/toolkit';
// import {
//   addNewContact,
//   editContact,
//   getAllContactsThunk,
//   getContactById,
//   removeContact,
// } from '';
// import { persistReducer } from 'redux-persist';
// import { nanoid } from 'nanoid';
// import storage from 'redux-persist/lib/storage';

const contactSlise = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    // currentContact: null,
  },

  // reducers: {
  //   onDelete(state, action) {
  //     state.contacts = state.contacts.filter(
  //       item => item.id !== action.payload
  //     );
  //   },
  //   // addContacts(state, action)

  //   addContacts: {
  //     reducer(state, action) {
  //       state.contacts.push(action.payload);
  //     },
  //     prepare(contact) {
  //       return { payload: { ...contact, icontactsd: nanoid(5) } };
  //     },
  //   },
  // },
});
////slice - contactSlise
export const contactsReducer = contactSlise.reducer;

// const persistConfig = {
//   key: 'root',
//   storage,
// };

// export const persistedContactsReducer = persistReducer(
//   persistConfig,
//   contactsReducer
// );
//
// export const { onDelete, addContacts } = contactSlise.actions;
