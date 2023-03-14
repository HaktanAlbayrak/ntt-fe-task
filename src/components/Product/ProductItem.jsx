import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Checkbox,
  Link,
  Typography,
} from '@mui/material';
import { Favorite, FavoriteBorder } from '@mui/icons-material';
import { priceFormat } from '../../utils/utils';

import { addFavorite, deleteFavorite, useProducts } from './store';
import { useDispatch } from 'react-redux';

const ProductItem = ({ item }) => {
  const dispatch = useDispatch();
  const { favoriteItems } = useProducts();

  const handleAddFavorite = (data) => {
    const hasFavorite = favoriteItems.findIndex((item) => item.id === data.id);

    if (hasFavorite !== -1) {
      dispatch(deleteFavorite(data.id));
    } else {
      dispatch(addFavorite(data));
    }
  };

  return (
    <Link
      target='_blank'
      href='https://github.com/HaktanAlbayrak'
      sx={{ textDecoration: 'none' }}
    >
      <Card
        sx={{
          maxWidth: '100%',
          maxHeight: '375px',
          position: 'relative',
          padding: '15px',
          border: ' 1px solid #E6E6E6',
          borderRadius: '4px',
        }}
      >
        <CardMedia
          component='img'
          height='179'
          width='259'
          image={item.imageUrl}
          alt='Paella dish'
        />
        <CardContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            padding: '0px',
          }}
        >
          <Typography
            variant='span'
            sx={{
              color: '#00254F',
              fontWeight: 600,
              fontSize: '16px',
              lineHeight: '20px',
              padding: '4px 8px',
            }}
          >
            {item.name.length > 20
              ? item.name.substr(0, 15).concat('...')
              : item.name}
          </Typography>
          <Typography
            variant='span'
            sx={{
              backgroundColor: '#E6EEF8',
              color: '#00254F',
              fontWeight: '700',
              width: '100%',
              padding: '4px 8px',
            }}
          >
            {priceFormat(item.price)}
          </Typography>
          <Typography
            variant='span'
            sx={{
              color: '#00254F',
              fontWeight: '600',
              fontSize: '12px',
              lineHeight: '14px',
              padding: '4px 8px',
            }}
          >
            Description
          </Typography>
          <Typography
            variant='body2'
            sx={{
              color: '#00254F',
              fontWeight: '400',
              fontSize: '12px',
              lineHeight: '14px',
              width: '241px',
              height: '56px',
            }}
          >
            {item.description}
          </Typography>
          <Typography
            variant='span'
            sx={{
              color: '#000000',
              fontWeight: '400',
              fontSize: '10px',
              lineHeight: '12px',
              height: '12px',
            }}
            mt={1}
          >
            {item.shippingMethod}
          </Typography>
        </CardContent>
        <Checkbox
          onClick={() => handleAddFavorite(item)}
          sx={{
            width: '24px',
            height: '24px',
            position: 'absolute',
            zIndex: 999,
            top: 24,
            right: 24,
            backgroundColor: '#FFFFFF',
            '&:hover': { backgroundColor: '#FFFFFF' },
          }}
          icon={
            <FavoriteBorder
              sx={{
                width: '16px',
                height: '16px',
                color: '#D9D9D9',
              }}
            />
          }
          checkedIcon={
            <Favorite sx={{ color: 'red', width: '16px', height: '16px' }} />
          }
        />
      </Card>
    </Link>
  );
};

export default ProductItem;
