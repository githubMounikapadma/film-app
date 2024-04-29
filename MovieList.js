import React from 'react';
import { Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';

function MovieList({ movies }) {
    return (
        <Grid container spacing={2}>
            {movies.map((movie, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                    <Card>
                        <CardMedia
                            component="img"
                            height="140"
                            image={movie.moviemainphotos[0]}
                            alt={movie.movietitle}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {movie.movietitle}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Genres: {movie.moviegenres.join(', ')}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
}

export default MovieList;
