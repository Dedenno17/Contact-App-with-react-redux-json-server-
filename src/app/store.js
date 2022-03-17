import { configureStore } from '@reduxjs/toolkit';
import contactReducer from '../features/contact';


export const store = configureStore({
  reducer: {
    contact: contactReducer,
  },
});
