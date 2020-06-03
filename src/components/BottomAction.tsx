import React from 'react';
import {
  Section,
  Heading,
  Button,
  Link,
  Box,
  Icon,
  Media,
  Text,
} from '@components';
import { URLS } from '@config';
import { getRoute } from '@utils';

const BottomAction = () => {
  return (
    <Section
      type="landing"
      flexDirection="column"
      alignItems="center"
      color="text"
      py={{ _: '30px', lg: '100px' }}
      px={{ _: '5%', lg: 0 }}
      height={{ _: '100vh', lg: 'auto' }}
      relative
      overflow="hidden"
    >
      <Heading mt={{ _: '100px', lg: 0 }} mb="60px" textAlign="center">
        Ready to start managing your funds safely and confidently?
      </Heading>
      <Button
        width={{ _: '100%', lg: '300px' }}
        variant="primary"
        onClick={() =>
          window.open(getRoute('DASHBOARD'), '_blank', 'noopener noreferrer')
        }
      >
        Get Started
      </Button>
      <Link href={URLS.support} mt="20px" sx={{ textDecoration: 'none' }}>
        <Text variant="link" color="link">
          Have Questions? We're Here to Help!
        </Text>
      </Link>
      <Media type="mobile">
        <Box position="absolute" left="10%" bottom="20%">
          <Icon name="swoosh" />
        </Box>
        <Box position="absolute" right="-15px" bottom="50px">
          <Icon name="circle" />
        </Box>
        <Box position="absolute" right="15%" top="7%">
          <Icon name="plus" />
        </Box>
        <Box position="absolute" right="20px" bottom="200px">
          <Icon name="rectangle" />
        </Box>
        <Box position="absolute" right="30px" bottom="180px">
          <Icon name="rectangle" />
        </Box>
      </Media>
    </Section>
  );
};

export default BottomAction;
