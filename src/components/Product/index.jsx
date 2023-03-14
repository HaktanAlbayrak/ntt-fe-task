import { East, Favorite, FavoriteBorder } from '@mui/icons-material';
import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  styled,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Checkbox,
  Link,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import ProductItem from './ProductItem';
import { getProducts, useProducts } from './store';

import ProductSlider from './ProductSlider';

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
            padding: { xs: '10px', sm: '0px' },
          }}
        >
          <Typography
            variant='h4'
            fontWeight={700}
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            Content title goes here
          </Typography>
          <Typography
            variant='h7'
            fontWeight={700}
            sx={{
              display: { xs: 'block', sm: 'none' },
              fontSize: '14px',
            }}
          >
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
        <Grid
          container
          mt={5}
          spacing={2}
          sx={{ display: { xs: 'none', sm: 'flex' } }}
        >
          {(!clickedFavoriteButton ? items : favoriteItems)
            .slice(0, productCount)
            .map((item) => {
              return (
                <Grid item md={3} key={item.id}>
                  <ProductItem item={item} />
                </Grid>
              );
            })}
        </Grid>
        <Box
          mt={5}
          sx={{
            display: { xs: 'block', sm: 'none' },
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <ProductSlider
            clickedFavoriteButton={clickedFavoriteButton}
            items={items}
            favoriteItems={favoriteItems}
            productCount={productCount}
          />
        </Box>
        {productCount < items.length && (
          <Box
            sx={{
              display: { xs: 'none', sm: 'flex' },
              justifyContent: 'center',
            }}
            mt={3}
          >
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
