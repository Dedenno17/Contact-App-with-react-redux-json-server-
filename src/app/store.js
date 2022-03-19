import { configureStore } from '@reduxjs/toolkit';
import contactReducer from '../features/contact';
import modalStatusReducer from '../features/modalStatus';
import modalExistenceReducer from '../features/modalExistence';
import modalMessageReducer from '../features/modalMessage';


export const store = configureStore({
  reducer: {
    contact: contactReducer,
    modalStatus: modalStatusReducer,
    modalExistence: modalExistenceReducer,
    modalMessage: modalMessageReducer,
  },
});
