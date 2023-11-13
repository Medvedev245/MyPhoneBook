import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    contactsFilter(state, action) {
      return action.payload;
    },
  },
});

export const { contactsFilter } = slice.actions;
export const filterReducer = slice.reducer;
