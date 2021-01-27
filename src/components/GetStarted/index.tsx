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
      width={{ _: '45%', lg: '500px' }}
      height={{ _: '200px', lg: '140px' }}
      padding={{ _: '10px 0', lg: '25px 30px' }}
      mb="15px"
      sx={{
        ':hover': { transform: 'scale(1.03)', transition: 'all .3s' },
        transition: 'all .3s',
      }}
    >
      <Link href={url} sx={{ textDecoration: 'none' }}>
        <Flex
          flexDirection={{ _: 'column-reverse', lg: 'row' }}
          justifyContent={{ _: 'flex-end', lg: 'space-between' }}
          alignItems="center"
          height="100%"
        >
          <Box width={{ lg: '75%' }}>
            <Heading
              textAlign={{ _: 'center', lg: 'left' }}
              variant="title"
              my={{ _: '10px', lg: 'inherit' }}
              color="text"
              minHeight={{ _: '4rem', lg: 'auto' }}
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
          <Icon name={icon} height={{ _: '4rem', lg: '60px' }} />
        </Flex>
      </Link>
    </Card>
  );
};

const GetStarted = () => {
  return (
    <Section color="text">
      <Box
        height={{ _: '110vh', lg: '80vh' }}
        pl={{ _: 0, lg: '7%' }}
        my={{ _: '0', lg: '20px' }}
        sx={{
          backgroundImage: `url(${users})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: ['65%', '65%', '50%', '40%', '60%', '50%'],
          backgroundPosition: [
            'center 40%',
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
          height="95%"
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
                Welcome to the new MyCrypto
              </Heading>
              <Heading
                textAlign={{ _: 'center', lg: 'left' }}
                sx={{ marginTop: '10px' }}
                fontSize={{ _: '1.8rem', sm: '2.2rem' }}
                width={{ lg: '95%', xxl: 'auto' }}
              >
                Unify all your Ethereum accounts
                <br />
                without giving up your privacy or security.
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
      </Box>
    </Section>
  );
};

export default GetStarted;
