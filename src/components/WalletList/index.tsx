import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';

import {
  Section,
  Heading,
  Flex,
  Card,
  Icon,
  Text,
  Link,
  Media,
  Box,
} from '@components';
import { theme } from '@theme';
import { WALLET_CARDS, TWalletCard } from './config';

const SliderBox = styled(Box)`
  .slick-dots {
    bottom: -35px;

    li {
      margin: 0;
      height: 0px;
      width: 16px;
    }

    button:before {
      font-size: 12px;
      color: #ece8e8;
      opacity: 1;
      line-height: 12px;
      width: 12px;
      height: 12px;
    }

    .slick-active button:before {
      color: #c5c2c2;
      opacity: 1;
    }
  }

  @media (min-width: ${theme.breakpoints.sm}) {
    .slick-dots {
      display: none !important;
    }

    .slick-track {
      min-width: 800px !important;
    }
  }
`;

const WalletCard = ({ name, icon, path }: TWalletCard) => {
  return (
    <Card
      sx={{
        width: '130px',
        height: '130px',
        marginX: '5px',
      }}
    >
      <Link
        href={path}
        height="100%"
        width="100%"
        sx={{ textDecoration: 'none' }}
      >
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          height="100%"
          width="100%"
        >
          <Icon name={icon} height="60px" pb="15px" />
          <Text variant="base">{name}</Text>
        </Flex>
      </Link>
    </Card>
  );
};

type WalletListProp = { list: TWalletCard[] };

const WalletSlider = ({ list }: WalletListProp) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 50,
    slidesToShow: 5,
    arrows: false,
    swipe: false,
    variableWidth: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 820,
        settings: {
          swipe: true,
          slidesToShow: 1,
          centerMode: true,
          swipeToSlide: false,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 470,
        settings: {
          swipe: true,
          slidesToShow: 1,
          centerMode: true,
          swipeToSlide: true,
          initialSlide: 0,
        },
      },
    ],
  };
  return (
    <>
      <Media type="desktop">
        <Flex justifyContent="center" width="100%">
          {list.map((w, idx) => (
            <WalletCard key={idx} name={w.name} icon={w.icon} path={w.path} />
          ))}
        </Flex>
      </Media>
      <Media type="mobile">
        <SliderBox>
          <Slider {...settings}>
            {list.map((w, idx) =>
              w.mobile ? (
                <WalletCard
                  key={idx}
                  name={w.mobile.name}
                  icon={w.mobile.icon}
                  path={w.mobile.path}
                />
              ) : (
                <WalletCard
                  key={idx}
                  name={w.name}
                  icon={w.icon}
                  path={w.path}
                />
              )
            )}
          </Slider>
        </SliderBox>
      </Media>
    </>
  );
};

const WalletList = () => {
  return (
    <Section
      bg="muted"
      flexDirection="row"
      py="20px"
      px={{ _: 0, lg: '140px' }}
      height={{ _: '350px', lg: 'auto' }}
      color="text"
    >
      <Flex
        flexDirection={{ _: 'column', lg: 'row' }}
        justifyContent={{ _: 'space-evenly', lg: 'space-between' }}
        alignItems="center"
        height="100%"
        width="100%"
      >
        <Box width={{ _: 1 / 2, lg: 1 / 5, xxl: 2 / 5 }}>
          <Flex flexDirection="column" justifyContent="center" height="100%">
            <Heading variant="title" textAlign={{ _: 'center', lg: 'left' }}>
              Fully Compatible
            </Heading>
            <Text textAlign={{ _: 'center', lg: 'left' }} variant="base">
              Use with your favorite hardware and software wallets:
            </Text>
          </Flex>
        </Box>
        <Box width={{ _: '100%', lg: 3 / 5 }}>
          <WalletSlider list={WALLET_CARDS} />
        </Box>
      </Flex>
    </Section>
  );
};

export default WalletList;
