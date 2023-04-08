import { configureStore } from '@reduxjs/toolkit';
import omdbApiReducer from '../features/omdbApiSlice';
import thunkMiddleware from 'redux-thunk';

export const store = configureStore({
  reducer: {
    omdbApi: omdbApiReducer,
  },
  middleware: [thunkMiddleware],
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;