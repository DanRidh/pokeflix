import { Grid, Card, CardMedia, CardContent, Typography, CardActions, Button, Paper, Box } from '@mui/material';
import React from 'react';
import { styled } from '@mui/material/styles';
import { MovieDetails } from '../features/omdbApiSlice';
import { addMovieToFavorites, removeMovieFromFavorites, getFavoritedMovies } from '../features/favoriteMoviesSlice';
import { Dispatch } from '@reduxjs/toolkit';
import { useAppDispatch, useAppSelector } from '../app/hooks';

const CustomButton = styled(Button)({
  borderRadius: '23px',
  textAlign:'center',
  padding: '0.5rem 1rem',

  ":hover": {
    transform: 'translateY(-3px)',
    boxShadow: '0px 6px 14px 0px rgba(0,0,0,0.15)'
  },
}) as typeof Button;

const LearnMoreButton = styled(CustomButton)({
  background: '#21bf25 linear-gradient( 90deg,rgba(0,162,63,1) 0%,rgba(19,185,34,1) 60%,rgba(23,224,42,1) 100% )',
  color: 'white !important',
  border: 'none',
}) as typeof Button;

const AddToFavoritesButton = styled(CustomButton)({
  background: 'white',
  color: '#21bf25',
  border: '1px solid #21bf25',
})

const RemoveFromFavoritesButton = styled(CustomButton)({
  background: 'white',
  color: '#BF2521',
  border: '1px solid #BF2521',
})

const MovieDetailsCard: React.FC<MovieDetails> = (props) => {
  const dispatch: Dispatch = useAppDispatch();
  const favoritedMovies: MovieDetails[] = useAppSelector(getFavoritedMovies);
  let isMovieAlreadyFavorited: MovieDetails | undefined = favoritedMovies.find((movie) => movie.imdbID === props.imdbID);
  const hideAddToFavoritesButton: boolean = isMovieAlreadyFavorited ? true : false;

  return (
    <Grid item xs={2} sm={4} md={4}>
      <Paper sx={{height: "100%"}}>
        <Card>
          <CardMedia
            component="img"
            sx={{ width: "100%", maxHeight: 450 }}
            image={props.Poster}
            title={props.Title}
          />
        </Card>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{textAlign: 'center'}}>
            {props.Title}
          </Typography>
          <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
            <Typography variant="body2" color="text.secondary">
              Year: {props.Year}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              IMDB ID: {props.imdbID}
            </Typography>
          </Box>
        </CardContent>
        <CardActions sx={{display: 'flex', justifyContent: 'space-around'}}>
          <LearnMoreButton size="small" href={`https://www.imdb.com/title/${props.imdbID}/`} target="_blank">Learn More</LearnMoreButton>
          {hideAddToFavoritesButton ?
            <RemoveFromFavoritesButton size="small" onClick={() => dispatch(removeMovieFromFavorites(props?.imdbID!))}>Remove from Favorites</RemoveFromFavoritesButton>
          :
            <AddToFavoritesButton size="small" onClick={() => dispatch(addMovieToFavorites(props))}>Add to Favorites</AddToFavoritesButton>
          }
        </CardActions>
      </Paper>
    </Grid>
  )
}

export default MovieDetailsCard;