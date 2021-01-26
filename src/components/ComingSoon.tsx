import React from 'react';
import { SEO, Flex, Heading, Icon, Text, Link, Button } from '@components';

export const ComingSoon = () => (
  <>
    <SEO title="Page Not Found" />
    <Flex
      justifyContent="center"
      alignItems="center"
      backgroundColor="rgb(246, 248, 250)"
    >
      <Flex
        variant="card"
        flexDirection="column"
        alignItems="center"
        padding="25px"
        maxWidth="1245px"
        width="100%"
        margin={{ _: '60px 15px', lg: '150px 0' }}
      >
        <Icon name="bottle" width="300px" />
        <Heading variant="subHeading" color="accent" mt="20px">
          Coming Soon
        </Heading>
        <Text variant="largeBase" textAlign="center" mt="20px" mb="30px">
          This page is under construction
          <br />
          Don't worry, it will be available soon!
        </Text>
        <Link href="/" internal={true}>
          <Button width="230px" height="45px">
            Go Home
          </Button>
        </Link>
      </Flex>
    </Flex>
  </>
);
