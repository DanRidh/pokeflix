import React from 'react';
import { useAppSelector } from '../app/hooks';
import { MovieDetails } from '../features/omdbApiSlice';
import { Container,  Grid, Typography } from '@mui/material';
import MovieDetailsCard from '../components/MovieDetailsCard';
import { getFavoritedMovies } from '../features/favoriteMoviesSlice';

interface Props {
  // Define props here
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
        <Grid container spacing={2} sx={{ mt:6 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {favoritedMovies?.map((movie) => {
            return (
              <MovieDetailsCard
                key={movie?.imdbID}
                Poster={movie?.Poster}
                Title={movie?.Title}
                Type={movie?.Type}
                Year={movie?.Year}
                imdbID={movie?.imdbID}
              />
            )
          })}
        </Grid>
      ) : (
        <Typography sx={{ mt: 6 }}>Add some movies to your favorites!</Typography>
      )}
    </Container>
  );
};

export default Favorites;
