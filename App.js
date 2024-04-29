import React, { useState, useEffect } from 'react';
import moviesData from './data/movies.json';
import MovieList from './components/MovieList';
import Filter from './components/Filters';
import { Container } from '@mui/material';

function App() {
    const [movies, setMovies] = useState(moviesData);
    const [language, setLanguage] = useState('');

    const handleLanguageChange = (event) => {
        setLanguage(event.target.value);
        filterMovies(event.target.value);
    };

    const filterMovies = (language) => {
        const filtered = moviesData.filter(movie => movie.movielanguages.includes(language));
        setMovies(filtered);
    };

    return (
        <Container>
            <Filter
                options={[...new Set(moviesData.flatMap(movie => movie.movielanguages))]}
                label="Language"
                value={language}
                onChange={handleLanguageChange}
            />
            <MovieList movies={movies} />
        </Container>
    );
}

export default App;
