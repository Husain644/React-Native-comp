// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlice';
import languageReducer from './slices/slices';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    language: languageReducer
  },
});
