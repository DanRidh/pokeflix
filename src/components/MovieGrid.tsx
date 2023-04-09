import { Grid } from '@mui/material';
import React from 'react';
import { MovieDetails } from '../features/omdbApiSlice';
import MovieDetailsCard from '../components/MovieDetailsCard';

interface MovieGridProps {
  movies: MovieDetails[];
}

const MovieGrid: React.FC<MovieGridProps> = ({ movies }) => {
  return (
    <Grid container spacing={2} sx={{ mt:3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      {movies?.map((movie) => {
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
  );
}

export default MovieGrid;