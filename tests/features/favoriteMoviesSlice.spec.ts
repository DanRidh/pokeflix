import { RootState } from '../../src/app/store';
import favoriteMoviesReducer, { addMovieToFavorites, removeMovieFromFavorites, getFavoritedMovies } from '../../src/features/favoriteMoviesSlice';
import { MovieDetails } from '../../src/features/omdbApiSlice';

describe('favoriteMoviesSlice', () => {
  const initialState = { favoritedMovies: [] };
  const movie1: MovieDetails = {
    imdbID: 'tt0120737',
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    Type: 'movie',
    Poster: 'http://example.com/poster1.jpg'
  };
  const movie2: MovieDetails = {
    imdbID: 'tt0167260',
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    Type: 'movie',
    Poster: 'http://example.com/poster2.jpg'
  };

  it('should handle adding a movie to favorites', () => {
    const action = addMovieToFavorites(movie1);
    const nextState = favoriteMoviesReducer(initialState, action);
    expect(nextState.favoritedMovies).toHaveLength(1);
    expect(nextState.favoritedMovies[0]).toEqual(movie1);
  });

  it('should handle removing a movie from favorites', () => {
    const state = { favoritedMovies: [movie1, movie2] };
    const action = removeMovieFromFavorites('tt0120737');
    const nextState = favoriteMoviesReducer(state, action);
    expect(nextState.favoritedMovies).toHaveLength(1);
    expect(nextState.favoritedMovies[0]).toEqual(movie2);
  });

  it('should return the favorited movies', () => {
    const state = { persistedFavoritesReducer: { favoritedMovies: [movie1] } } as RootState;
    const favoritedMovies = getFavoritedMovies(state);
    expect(favoritedMovies).toEqual([movie1]);
  });
});
