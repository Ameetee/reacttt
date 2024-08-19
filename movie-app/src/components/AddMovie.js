// src/AddMovie.js

import React, { useState } from 'react';

const AddMovie = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [posterURL, setPosterURL] = useState('');
  const [rating, setRating] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ title, description, posterURL, rating: parseFloat(rating) });
    setTitle('');
    setDescription('');
    setPosterURL('');
    setRating('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ margin: '20px 0' }}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Poster URL"
        value={posterURL}
        onChange={(e) => setPosterURL(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Rating"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        min="0"
        max="10"
        step="0.1"
        required
      />
      <button type="submit">Add Movie</button>
    </form>
  );
};

export default AddMovie;
