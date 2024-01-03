import { configureStore } from '@reduxjs/toolkit';

import registerReducer from '../modules/register';

export const store = configureStore({
  reducer: {

    register: registerReducer,

  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
      hasError: true,
      errorName: 'ValidationError',
      errorMessage: 'Foo must be greater than Bar',
    }),
});
