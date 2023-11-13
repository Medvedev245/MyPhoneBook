import { configureStore } from '@reduxjs/toolkit';
import { persistedContactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const myMiddleware1 = store => next => action => {
  console.log('myMiddleware1: ', action);
  next(action);
};

export const store = configureStore({
  reducer: {
    contacts: persistedContactsReducer,
    filter: filterReducer,
  },
  middleware(getDefaultMiddleware) {
    const defaultMiddleware = getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
    console.log(defaultMiddleware);
    return [...defaultMiddleware];
  },
});

export const persistor = persistStore(store);
