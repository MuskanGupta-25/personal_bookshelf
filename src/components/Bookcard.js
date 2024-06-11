// src/components/BookCard.js
import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';

const BookCard = ({ book, onAddToBookshelf }) => {
  return (
    <Card variant="outlined" sx={{ maxWidth: 345, m: 2 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {book.title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {book.author_name ? book.author_name.join(', ') : 'Unknown Author'}
        </Typography>
        <Button variant="contained" color="primary" onClick={() => onAddToBookshelf(book)}>
          Add to Bookshelf
        </Button>
      </CardContent>
    </Card>
  );
};

export default BookCard;
