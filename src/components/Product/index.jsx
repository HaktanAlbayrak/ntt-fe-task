import { East, Favorite, FavoriteBorder } from '@mui/icons-material';
import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  styled,
  Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import ProductItem from './ProductItem';
import { addFavorite, deleteFavorite, getProducts, useProducts } from './store';

const StyledButton = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#0059BC',
  borderRadius: '4px',
  gap: '10px',
  color: '#FFFFFF',
  fontSize: '16px',
  fontWeight: '500',
  width: '106px',
  height: '27px',
});

const StyledMoreButton = styled(Button)({
  width: '195px',
  height: '56px',
  backgroundColor: '#0059BC',
  fontSize: '20px',
  fontWeight: 400,
  borderRadius: '4px',
});

const Products = () => {
  const dispatch = useDispatch();
  const { items, favoriteItems } = useProducts();
  const [productCount, setProductCount] = useState(4);
  const [clickedFavoriteButton, setClickedFavoriteButton] = useState(false);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <Box mt={7}>
      <Container>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Typography variant='h4' fontWeight={700}>
            Content title goes here
          </Typography>
          <Box>
            <Stack direction='row' spacing={2}>
              {favoriteItems.length > 0 ? (
                <Favorite sx={{ color: 'red' }} />
              ) : (
                <FavoriteBorder />
              )}
              <Typography variant='span' fontWeight={700}>
                {favoriteItems.length} ÜRÜN
              </Typography>
              <StyledButton
                sx={{ cursor: 'pointer' }}
                onClick={() => setClickedFavoriteButton((prev) => !prev)}
              >
                Beğenilenler
              </StyledButton>
            </Stack>
          </Box>
        </Box>
        <Grid container mt={5} spacing={2}>
          {(!clickedFavoriteButton ? items : favoriteItems)
            .slice(0, productCount)
            .map((item) => {
              return <ProductItem item={item} key={item.id} />;
            })}
        </Grid>
        {productCount < items.length && (
          <Box sx={{ display: 'flex', justifyContent: 'center' }} mt={3}>
            <StyledMoreButton
              onClick={() => setProductCount((prev) => prev + 4)}
              variant='contained'
              endIcon={<East />}
            >
              Daha fazla
            </StyledMoreButton>
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default Products;
