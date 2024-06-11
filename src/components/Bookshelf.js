import React, { useState, useEffect } from 'react';
import { Box, Grid, Typography, Button, Card, CardContent } from '@mui/material';

const Bookshelf = () => {
  const [bookshelf, setBookshelf] = useState([]);

  useEffect(() => {
    const storedBookshelf = JSON.parse(localStorage.getItem('bookshelf')) || [];
    setBookshelf(storedBookshelf);
  }, []);

  return (
    <Box sx={{ p: 5 }}>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={8}>
          <Typography variant="h4" component="div" gutterBottom>
            My Bookshelf
          </Typography>
        </Grid>
        <Grid item xs={4} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button 
            variant="contained" 
            color="secondary" 
            sx={{ height: '50px' }} 
            onClick={() => window.location.href = '/'}
          >
            Back to Search
          </Button>
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{ mt: 2 }}> {/* Add margin-top here */}
        {bookshelf.map(book => (
          <Grid item xs={12} sm={6} md={4} key={book.key}>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="h5" component="div">
                  {book.title}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {book.author_name ? book.author_name.join(', ') : 'Unknown Author'}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Bookshelf;
