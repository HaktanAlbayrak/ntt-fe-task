import { CssBaseline, Stack } from '@mui/material';
import React from 'react';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Products from './components/Product';
import ResponsiveSlider from './components/Slider';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <CssBaseline />
      <Header />
      <Stack direction='column'>
        <NavBar />
        <ResponsiveSlider />
        <Products />
        <Footer />
      </Stack>
    </>
  );
};

export default App;
