import React from 'react';

import {
  Section,
  Box,
  Flex,
  Heading,
  Text,
  Icon,
  Link,
  Card,
} from '@components';

import { START_CTAS, TStartCta } from './config';

import users from '@assets/title-illustration.svg';

const ActionCard = ({ icon, title, subTitle, url }: TStartCta) => {
  return (
    <Card
      variant="card"
      width={{ _: '30%', lg: '400px' }}
      height={{ _: '180px', lg: '110px' }}
      padding={{ _: '0', lg: '25px 30px' }}
      mb="15px"
      sx={{
        ':hover': { transform: 'scale(1.03)', transition: 'all .3s' },
        transition: 'all .3s',
      }}
    >
      <Link href={url} sx={{ textDecoration: 'none' }}>
        <Flex
          flexDirection={{ _: 'column-reverse', lg: 'row' }}
          justifyContent={{ _: 'center', lg: 'space-between' }}
          alignItems="center"
          height="100%"
        >
          <Box>
            <Heading
              textAlign={{ _: 'center', lg: 'left' }}
              variant="title"
              my={{ _: '10px', lg: 'inherit' }}
              color="text"
              minHeight={{ _: '3rem', sm: 'auto' }}
            >
              {title}
            </Heading>
            <Text
              textAlign={{ _: 'center', lg: 'left' }}
              variant="base"
              minHeight={{ _: '2rem', sm: 'auto' }}
            >
              {subTitle}
            </Text>
          </Box>
          <Icon name={icon} height={{ _: '28%', lg: '60px' }} />
        </Flex>
      </Link>
    </Card>
  );
};

const GetStarted = () => {
  return (
    <Section
      color="text"
      pl={{ _: 0, lg: '7%' }}
      my={{ _: '0', lg: '20px' }}
      height={{ _: '90vh', lg: 'auto' }}
      sx={{
        backgroundImage: `url(${users})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: ['65%', '65%', '50%', '40%', '60%', 'contain'],
        backgroundPosition: [
          'center center',
          null,
          null,
          null,
          'right center',
          '80% center',
        ],
      }}
    >
      <Box
        width={{ _: '100%', lg: 1 / 2 }}
        height="100%"
        py={{ _: '20px', lg: '55px' }}
      >
        <Flex
          flexDirection="column"
          alignItems={{ _: 'center', lg: 'flex-start' }}
          justifyContent={{ _: 'space-between', lg: 'flex-start' }}
          height="100%"
        >
          <Box>
            <Heading
              textAlign={{ _: 'center', lg: 'left' }}
              variant="largeHeading"
            >
              You're In The Right Place.
            </Heading>
            <Heading
              textAlign={{ _: 'center', lg: 'left' }}
              sx={{ marginTop: '10px' }}
            >
              It's Time To Use MyCrypto
              <br />
              For Your Crypto.
            </Heading>
          </Box>
          <Flex
            flexDirection={{ _: 'row', lg: 'column' }}
            justifyContent={{ _: 'space-evenly', lg: 'flex-start' }}
            sx={{ marginTop: '70px' }}
            width="100%"
          >
            {START_CTAS.map((CTA, index) => (
              <ActionCard {...CTA} key={index} />
            ))}
          </Flex>
        </Flex>
      </Box>
    </Section>
  );
};

export default GetStarted;
