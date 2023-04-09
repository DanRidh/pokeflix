import { Container, CircularProgress, Typography, Pagination } from '@mui/material';
import React, { useState, ChangeEvent, useEffect } from 'react';
import { RootState } from '../app/store';
import { ThunkDispatch } from '@reduxjs/toolkit';
import { fetchData } from '../features/omdbApiSlice';
import { AnyAction } from 'redux';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import SearchBar from '../components/SearchBar';
import MovieGrid from '../components/MovieGrid';

interface Props {
  // Define any props required here if we need to add props in future
}

const Landing: React.FC<Props> = (props) => {
  const [inputQuery, setInputQuery] = useState<string | undefined>(undefined);
  const [page, setPage] = useState<number>(1);
  const dispatch: ThunkDispatch<RootState, undefined, AnyAction> = useAppDispatch();
  const { data, loading, error } = useAppSelector((state: RootState) => state.omdbApi);

  const handleInput = (e: ChangeEvent<HTMLInputElement>): void => {
    setInputQuery(e.target.value);
  }

  const handleMovieSearch = () => {
    if (inputQuery) {
      setPage(1);
      dispatch(fetchData({ inputQuery, page: 1 }));
    }
  }

  const handlePageChange = (e: ChangeEvent<unknown>, value: number): void => {
    setPage(value);
    dispatch(fetchData({ inputQuery, page: value }));
  };

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
      <SearchBar
        handleInput={handleInput}
        handleMovieSearch={handleMovieSearch}
        inputQuery={inputQuery}
      />
      {/* shows loading indicitor only when loading, if not loading will render either movie grid or error message depending on response from api */}
      {loading ? (
        <CircularProgress color="success" size={100} sx={{ mt: 6 }} />
      ) : data?.Response === "True" ? (
        <>
          <Pagination
            count={Math.ceil(parseInt(data?.totalResults) / 10)}
            page={page}
            sx={{ mt: 3 }}
            onChange={handlePageChange}
          />
          <MovieGrid movies={data?.Search} />
        </>
      ) : (
        <Typography sx={{ mt: 6 }}>{data?.Error}</Typography>
      )}
    </Container>
  );
};

export default Landing;