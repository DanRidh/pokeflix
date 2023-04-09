import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../app/store';
import { MovieDetails } from './omdbApiSlice';

interface FavoriteMoviesState {
  favoritedMovies: MovieDetails[];
}

const initialState: FavoriteMoviesState = {
  favoritedMovies: []
};

const favoriteMoviesSlice = createSlice({
  name: 'favoriteMovies',
  initialState,
  reducers: {
    addMovieToFavorites(state, action: PayloadAction<MovieDetails>) {
      state.favoritedMovies.push(action.payload);
    },
    removeMovieFromFavorites(state, action: PayloadAction<string>) {
      state.favoritedMovies = state.favoritedMovies.filter(
        (movie) => movie?.imdbID !== action.payload
      );
    }
  }
});

export const getFavoritedMovies = (state: RootState) => state.persistedFavoritesReducer.favoritedMovies;
export const { addMovieToFavorites, removeMovieFromFavorites } = favoriteMoviesSlice.actions;
export default favoriteMoviesSlice.reducer;