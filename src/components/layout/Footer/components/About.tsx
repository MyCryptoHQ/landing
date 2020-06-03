import React from 'react';
import { Flex, Text, Icon, Media } from '@components';
import { Socials, SOCIAL_LINKS } from '.';

const About = () => {
  return (
    <Flex
      height="100%"
      width={{ _: '100%', lg: '20%' }}
      flexDirection="column"
      justifyContent="space-evenly"
      alignItems={{ _: 'center', lg: 'flex-start' }}
      order={0}
    >
      <Icon name="MYCLogo" height="35px" />
      <Text
        variant="footerSmall"
        color="white"
        textAlign={{ _: 'center', lg: 'left' }}
      >
        MyCrypto is an open-source, client-side tool for generating ether
        wallets, handling ERC-20 tokens, and interacting with the blockchain
        more easily. Developed by and for the community since 2015, we’re
        focused on building awesome products that put the power in people’s
        hands.
      </Text>
      <Media type="desktop">
        <Socials socials={SOCIAL_LINKS} />
        <Text
          variant="footerSmall"
          color="white"
          mt="20px"
        >{`© ${new Date().getFullYear()} MyCrypto, Inc.`}</Text>
      </Media>
    </Flex>
  );
};

export default About;
