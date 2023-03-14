import React from 'react';

import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import ProductItem from './ProductItem';
import { Box } from '@mui/material';

import './productSlider.css';

const ProductSlider = ({
  clickedFavoriteButton,
  items,
  favoriteItems,
  productCount,
}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Box component='div' mb={3}>
      <Slider className='product-slider' {...settings}>
        {(!clickedFavoriteButton ? items : favoriteItems).map((item) => {
          return (
            <Box key={item.id}>
              <ProductItem item={item} />
            </Box>
          );
        })}
      </Slider>
    </Box>
  );
};

export default ProductSlider;
