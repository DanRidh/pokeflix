import { Container, Paper, InputBase, IconButton, Grid, CircularProgress, Typography } from '@mui/material';
import React, { useState, ChangeEvent } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { RootState } from '../app/store';
import { ThunkDispatch } from '@reduxjs/toolkit';
import { fetchData } from '../features/omdbApiSlice';
import { AnyAction } from 'redux';
import MovieDetailsCard from '../components/MovieDetailsCard';
import { useAppDispatch, useAppSelector } from '../app/hooks';

interface Props {
  // Define any props required here if we need to add props in future
}

const Landing: React.FC<Props> = (props) => {
  const [inputQuery, setInputQuery] = useState<string | undefined>(undefined);
  const dispatch: ThunkDispatch<RootState, undefined, AnyAction> = useAppDispatch();
  const { data, loading, error } = useAppSelector((state: RootState) => state.omdbApi);

  const handleInput = (e: ChangeEvent<HTMLInputElement>): void => {
    setInputQuery(e.target.value);
  }

  const handleMovieSearch = () => {
    if (inputQuery) {
      dispatch(fetchData({ inputQuery }));
    }
  }
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
      <Paper
        sx = {{
          alignItems: 'center',
          display: 'flex',
          width: '75%'
        }}
      >
        <InputBase
          sx={{
            ml:1,
            flex:1
          }}
          placeholder="Search for movies here!"
          value={inputQuery}
          onChange={handleInput}
          onKeyDown={(e) => { if(e.key === "Enter") handleMovieSearch() }}
        />
        <IconButton type="button" aria-label="search" onClick={handleMovieSearch}>
          <SearchIcon />
        </IconButton>
      </Paper>
      {/* shows loading indicitor only when loading, if not loading will render either movie cards or error message depending on response from api */}
      {loading ? (
        <CircularProgress color="success" size={100} sx={{ mt: 6 }} />
      ) : data?.Response === "True" ? (
        <Grid container spacing={2} sx={{ mt:6 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {data?.Search.map((movie) => {
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
        <Typography sx={{ mt: 6 }}>{data?.Error}</Typography>
      )}
    </Container>
  );
};

export default Landing;