// src/MovieCard.js

import React from 'react';
import { Card } from 'react-bootstrap';

const MovieCard = ({ title, description, posterURL, rating }) => {
  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img variant="top" src={posterURL} alt={title} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Text>
          <strong>Rating:</strong> {rating}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default MovieCard;
