import React from 'react';
import { Flex } from '@components';
import {
  Separator,
  About,
  Links,
  LINK_COLUMNS,
  DonateAndSubscribe,
  MobileBottom,
} from './components';

const Footer = () => {
  return (
    <Flex
      height={{ _: 'auto', lg: '300px' }}
      flexDirection={{ _: 'column', lg: 'row' }}
      justifyContent="center"
      alignItems="center"
      padding={{ _: '40px 30px', lg: '40px 50px', xl: '40px 115px' }}
      backgroundColor="accent"
    >
      <About />
      <Separator order={1} />
      <Links links={LINK_COLUMNS} />
      <Separator order={3} />
      <DonateAndSubscribe />
      <MobileBottom />
    </Flex>
  );
};

export default Footer;
