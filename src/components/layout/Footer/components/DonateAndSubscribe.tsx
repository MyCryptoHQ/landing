import React, { ReactNode } from 'react';
import { Flex, Button, Icon, Text, IconName, Box, SubInput } from '@components';

const DonateButton = ({
  icon,
  children,
}: {
  icon: IconName;
  children: ReactNode;
}) => {
  return (
    <Button variant="donation" width="auto">
      <Flex flexDirection="row" justifyContent="s">
        <Icon name={icon} height="15px" mr="10px" />
        <Text color="white" fontSize="14px">
          {children}
        </Text>
      </Flex>
    </Button>
  );
};

const SubscribeInput = () => {
  return (
    <Flex
      flexDirection="row"
      alignItems="center"
      width="100%"
      justifyContent={{ _: 'center', lg: 'flex-start' }}
    >
      <SubInput placeholder="Email Address" />
      <Button variant="sub">Subscribe</Button>
    </Flex>
  );
};

const DonateAndSubscribe = () => {
  return (
    <Flex
      flexDirection="column"
      justifyContent="space-evenly"
      width={{ _: '100%', lg: '20%' }}
      height="100%"
      order={{ _: 2, lg: 4 }}
    >
      <Flex
        flexDirection="column"
        alignItems={{ _: 'center', lg: 'flex-start' }}
      >
        <Text fontWeight="500" color="white">
          Donate
        </Text>
        <Flex
          flexDirection={{ _: 'column', lg: 'row' }}
          alignItems={{ _: 'center', lg: 'flex-start' }}
        >
          <DonateButton icon="ether">Ethereum</DonateButton>
          <DonateButton icon="bitcoin">Bitcoin</DonateButton>
        </Flex>
      </Flex>
      <Flex
        flexDirection="column"
        width="100%"
        alignItems={{ _: 'center', lg: 'flex-start' }}
        mt={{ _: '30px', lg: 0 }}
      >
        <Text color="white" mb="5px">
          Subscribe to MyCrypto
        </Text>
        <Text variant="footerLink" color="rgb(187, 194, 203)" mb="10px">
          Get updates from MyCrypto straight to your inbox!
        </Text>
        <SubscribeInput />
      </Flex>
    </Flex>
  );
};

export default DonateAndSubscribe;
