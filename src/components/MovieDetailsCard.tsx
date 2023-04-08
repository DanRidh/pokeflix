import { Grid, Card, CardMedia, CardContent, Typography, CardActions, Button, Paper, Box } from '@mui/material';
import React from 'react';
import { MovieDetails } from '../features/omdbApiSlice';

const MovieDetailsCard: React.FC<MovieDetails> = (props) => {
  return (
    <Grid item xs={2} sm={4} md={4}>
      <Paper sx={{height: "100%"}}>
        <Card>
          <CardMedia
            component="img"
            sx={{ width: "100%" }}
            image={props.Poster}
            title={props.Title}
          />
        </Card>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
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
        <CardActions>
          <Button size="small" href={`https://www.imdb.com/title/${props.imdbID}/`} target="_blank">Learn More</Button>
          <Button size="small">Add to Favorites</Button>
        </CardActions>
      </Paper>
    </Grid>
  )
}

export default MovieDetailsCard;