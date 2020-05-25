import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import moreIcon from '@assets/icn-more.svg';
import { Box, Text, Image } from '@components';
import { TESTIMONIALS } from './config';
import { theme } from '@theme';

import sparklesTop from '@assets/icn-sparkles01.svg';
import sparklesBottom from '@assets/icn-sparkles02.svg';
import sparklesMiddle from '@assets/icn-sparkles03.svg';

const SliderBox = styled(Box)`
  .slick-slider {
    width: 100%;

    .slick-disabled {
      display: none !important;
    }

    .slick-prev {
      z-index: 9999;
      left: 0px;
      background: url(${moreIcon}) center center;
      background-size: cover;
      background-repeat: no-repeat;
      transform: translate(0, -50%) rotate(180deg);

      @media (min-width: ${theme.breakpoints.xs}) and (max-width: ${theme
          .breakpoints.sm}) {
        left: calc(50% - 250px);
      }

      @media (max-width: ${theme.breakpoints.xs}) {
        left: 5px;
      }
    }

    .slick-next {
      right: 0px;
      background: url(${moreIcon}) center center;
      background-size: cover;
      background-repeat: no-repeat;

      @media (min-width: ${theme.breakpoints.xs}) and (max-width: ${theme
          .breakpoints.sm}) {
        left: calc(50% + 200px);
      }

      @media (max-width: ${theme.breakpoints.xs}) {
        right: 5px;
      }
    }

    button {
      width: 24px;
      height: 26px;

      &:before {
        opacity: 1;
        content: '';
      }
    }
  }
`;

interface TestimonialProps {
  text: string;
  author: string;
  sparkles: string;
  placement: object;
}

const sparkles = [sparklesTop, sparklesBottom, sparklesMiddle];
const positions = [
  { left: '0', top: '10px' },
  { right: '75px', bottom: '0' },
  { right: '75px', bottom: '50px' },
];

const Testimonial = ({
  text,
  author,
  sparkles,
  placement,
}: TestimonialProps) => {
  return (
    <Box
      maxWidth="420px"
      padding="50px"
      margin="0 auto"
      sx={{ position: 'relative' }}
    >
      <Image
        src={sparkles}
        height="60px"
        width="auto"
        sx={{
          position: 'absolute',
          ...placement,
        }}
      />
      <Text>{text}</Text>
      <Text variant="subHeading" mt="30px">
        {author}
      </Text>
    </Box>
  );
};

const Testimonials = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    swipe: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <SliderBox mx="50px">
      <Slider {...settings}>
        {TESTIMONIALS.map((testimonial, index) => (
          <Testimonial
            key={index}
            sparkles={sparkles[index % 3]}
            placement={positions[index % 3]}
            {...testimonial}
          />
        ))}
      </Slider>
    </SliderBox>
  );
};

export default Testimonials;
