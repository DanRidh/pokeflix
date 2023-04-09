import { configureStore } from '@reduxjs/toolkit';
import omdbApiReducer from '../features/omdbApiSlice';
import favoriteMoviesReducer from '../features/favoriteMoviesSlice';
import thunkMiddleware from 'redux-thunk';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const persistConfig = {
  key: 'root',
  version: 1,
  storage
};

const persistedFavoritesReducer = persistReducer(persistConfig, favoriteMoviesReducer);

export const store = configureStore({
  reducer: {
    omdbApi: omdbApiReducer,
    persistedFavoritesReducer
  },
  middleware: [thunkMiddleware],
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;