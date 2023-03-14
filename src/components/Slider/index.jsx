import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './slider.css';

import slider1 from '/src/assets/images/slider-1.png';
import slider2 from '/src/assets/images/slider-2.png';
import slider3 from '/src/assets/images/slider-3.png';
import slider4 from '/src/assets/images/slider-4.png';

const imageData = [
  {
    id: 1,
    title: 'First slide',
    imgLink: slider1,
  },
  {
    id: 2,
    title: 'Second slide',
    imgLink: slider2,
  },
  {
    id: 3,
    title: 'Third slide',
    imgLink: slider3,
  },
  {
    id: 4,
    title: 'Fourth slide',
    imgLink: slider4,
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
