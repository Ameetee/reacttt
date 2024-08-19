// src/App.js

import React, { useState } from 'react';
import './Apps.css';
import MovieList from './components/MovieList';
import Filter from './components/filter';
import AddMovie from './components/AddMovie';

const App = () => {
  const [movies, setMovies] = useState([
    {
      title: 'Inception',
      description: 'A mind-bending thriller.',
      posterURL: 'https://youtu.be/xXBTImqyeU0',
      rating: 8.8,
    },
    {
      title: 'The Matrix',
      description: 'A sci-fi action film.',
      posterURL: 'https://example.com/matrix.jpg',
      rating: 8.7,
    },
    // Add more initial movies if needed
  ]);

  const [filters, setFilters] = useState({ title: '', rating: '' });

  const handleAddMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  const handleFilter = (filters) => {
    setFilters(filters);
  };

  const filteredMovies = movies.filter((movie) => {
    const titleMatch = movie.title.toLowerCase().includes(filters.title.toLowerCase());
    const ratingMatch = filters.rating ? movie.rating >= parseFloat(filters.rating) : true;
    return titleMatch && ratingMatch;
  });

  return (
    <div className="App">
      <header className="App-header">
        <h1>Movie App</h1>
      </header>
      <AddMovie onAdd={handleAddMovie} />
      <Filter onFilter={handleFilter} />
      <MovieList movies={filteredMovies} />
    </div>
  );
};

export default App;
