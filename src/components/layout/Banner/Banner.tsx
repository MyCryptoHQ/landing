import React from 'react';
import { Flex, Text, Link, Image } from '@components';
import { URLS } from '@config';
import IcnAnnouncement from '@assets/icn-announcement.svg';

export const Banner = () => (
  <Flex
    bg="banner"
    flexDirection="row"
    justifyContent="center"
    alignItems="center"
    py="10px"
    px={{ _: '20px', sm: '50px' }}
  >
    <Image src={IcnAnnouncement} mr="15px" />
    <Text color="white">
      You're on the landing page for the new MyCrypto. Clicking any buttons on
      this page will open{' '}
      <Link color="white" sx={{ fontWeight: 700 }} href={URLS.app}>
        https://app.mycrypto.com
      </Link>{' '}
      in a new tab. For more information, visit the{' '}
      <Link
        color="white"
        sx={{ fontWeight: 700 }}
        href="https://medium.com/@MyCrypto/7020f919f792"
      >
        release post
      </Link>
      .
    </Text>
  </Flex>
);
