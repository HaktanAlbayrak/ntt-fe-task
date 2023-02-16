import React from 'react';
import './App.css';
import { Container } from '@mui/system';
import { Grid } from '@mui/material';

function App() {
  return (
    <>
      <Container maxWidth={'lg'} style={{ background: 'black' }}>
        <Grid
          container
          rowSpacing={2}
          columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 4 }}
        >
          <Grid item lg={4} style={{ color: 'white', background: 'pink' }}>
            Selam
          </Grid>
          <Grid item lg={6} style={{ color: 'white', background: 'blue' }}>
            Selam 2
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default App;
