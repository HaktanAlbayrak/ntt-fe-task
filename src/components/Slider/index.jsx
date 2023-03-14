import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './slider.css';

const imageData = [
  {
    id: 1,
    title: 'First slide',
    imgLink: '/src/assets/images/slider-1.png',
  },
  {
    id: 2,
    title: 'Second slide',
    imgLink: '/src/assets/images/slider-2.png',
  },
  {
    id: 3,
    title: 'Third slide',
    imgLink: '/src/assets/images/slider-3.png',
  },
  {
    id: 4,
    title: 'Fourth slide',
    imgLink: '/src/assets/images/slider-4.png',
  },
];

const ResponsiveSlider = () => {
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
    <Slider {...settings}>
      {imageData.map((item, index) => (
        <div key={index} className='card'>
          <div className='card-top'>
            <img src={item.imgLink} alt={item.title} />
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default ResponsiveSlider;
