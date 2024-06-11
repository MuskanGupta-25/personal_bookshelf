// src/components/SearchPage.js
import React, { useState, useEffect } from 'react';
import { CircularProgress, TextField, Box, Button, Grid, Typography } from '@mui/material';
import BookCard from './Bookcard';

const SearchPage = ({ onAddToBookshelf }) => {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sampleBooks] = useState([
    { key: 'OL1M', title: 'Sample Book 1', author_name: ['Author 1'] },
    { key: 'OL2M', title: 'Sample Book 2', author_name: ['Author 2'] },
    { key: 'OL3M', title: 'Sample Book 3', author_name: ['Author 3'] },
    { key: 'OL4M', title: 'Sample Book 4', author_name: ['Author 4'] },
    { key: 'OL5M', title: 'Sample Book 5', author_name: ['Author 5'] },
    { key: 'OL6M', title: 'Sample Book 6', author_name: ['Author 6'] },
    { key: 'OL7M', title: 'Sample Book 7', author_name: ['Author 7'] },
    { key: 'OL8M', title: 'Sample Book 8', author_name: ['Author 8'] },
    { key: 'OL9M', title: 'Sample Book 9', author_name: ['Author 9'] },
    { key: 'OL10M', title: 'Sample Book 10', author_name: ['Author 10'] }
  ]);

  useEffect(() => {
    if (query.length > 0) {
      setLoading(true);
      fetch(`https://openlibrary.org/search.json?q=${query}&limit=10&page=1`)
        .then(response => response.json())
        .then(data => {
          setBooks(data.docs);
          setLoading(false);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
          setLoading(false);
        });
    } else {
      setBooks([]);
    }
  }, [query]);

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h4" component="h2" align="center" gutterBottom>
        Search By Book Name:
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
        <Grid container spacing={2} alignItems="center" justifyContent="center">
          <Grid item>
            <TextField 
            //   label="Search for a book..." 
              variant="outlined" 
              value={query} 
              onChange={e => setQuery(e.target.value)} 
              sx={{ height: '50px', width: '300px'}}
            />
          </Grid>
          <Grid item>
            <Button 
              variant="contained" 
              color="secondary" 
              sx={{ height: '50px', width: '300px', ml: 2 }}
              onClick={() => window.location.href = '/bookshelf'}
            >
              My Bookshelf
            </Button>
          </Grid>
        </Grid>
      </Box>
      {loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
          <CircularProgress />
        </Box>
      ) : (
        <Grid container spacing={2} sx={{ mt: 2 }}>
          {books.length === 0 && query.length === 0 && sampleBooks.map(book => (
            <Grid item xs={12} sm={6} md={4} lg={2.4} key={book.key}>
              <BookCard book={book} onAddToBookshelf={onAddToBookshelf} />
            </Grid>
          ))}
          {books.length > 0 && books.map(book => (
            <Grid item xs={12} sm={6} md={4} lg={2.4} key={book.key}>
              <BookCard book={book} onAddToBookshelf={onAddToBookshelf} />
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default SearchPage;
