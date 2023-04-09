import React from 'react';
import { useAppSelector } from '../app/hooks';
import { MovieDetails } from '../features/omdbApiSlice';
import { Container, Typography } from '@mui/material';
import { getFavoritedMovies } from '../features/favoriteMoviesSlice';
import MovieGrid from '../components/MovieGrid';

interface Props {
  // Define any props required here if we need to add props in future
}

const Favorites: React.FC<Props> = (props) => {
  const favoritedMovies: MovieDetails[] = useAppSelector(getFavoritedMovies);

  return (
    <Container
    maxWidth="lg"
    sx={{
      mt: 6,
      alignContent: 'center',
      alignItems: 'center',
      display: "flex",
      flexDirection: 'column'
    }}>
    {favoritedMovies.length > 0 ? (
        <MovieGrid movies={favoritedMovies} />
      ) : (
        <Typography sx={{ mt: 6 }}>Add some movies to your favorites!</Typography>
      )}
    </Container>
  );
};

export default Favorites;
