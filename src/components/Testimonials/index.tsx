import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import moreIcon from '@assets/icn-more.svg';
import { Box, Text } from '@components';
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
  position: string;
}

const sparkles = [sparklesTop, sparklesBottom, sparklesMiddle];
const positions = ['top left', '65% 100%', '80% 65%'];

const Testimonial = ({
  text,
  author,
  sparkles,
  position,
}: TestimonialProps) => {
  return (
    <Box
      maxWidth="420px"
      padding="60px"
      sx={{
        background: `url(${sparkles})}`,
        backgroundPosition: position,
        backgroundRepeat: 'no-repeat',
      }}
    >
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
            position={positions[index % 3]}
            {...testimonial}
          />
        ))}
      </Slider>
    </SliderBox>
  );
};

export default Testimonials;
