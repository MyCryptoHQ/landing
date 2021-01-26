import React from 'react';

import { Box, Media, Heading, Icon, Text, Flex, Section } from '@components';

const Features = () => {
  return (
    <Section
      type="landing"
      alignItems="center"
      color="accent"
      pt={{ _: '40px', lg: '80px' }}
      pb={{ _: '40px', lg: '140px' }}
    >
      <Heading textAlign="center" width={{ _: '90%', lg: 'auto' }}>
        Managing and storing your assets has never been easier.
      </Heading>
      <Text
        textAlign="center"
        variant="subHeading"
        color="accent"
        my={{ _: '15px', lg: '0' }}
        width={{ _: '90%', lg: 'auto' }}
      >
        The MyCrypto apps give you control of your crypto.
      </Text>
      <Flex
        flexDirection={{ _: 'column', lg: 'row' }}
        justifyContent={{ _: 'center', lg: 'space-between' }}
        alignItems={{ _: 'center', lg: 'flex-start' }}
        my={{ _: '20px', sm: '50px', lg: '65px' }}
        width="100%"
      >
        <Box
          width={{ _: '90%', lg: 1 / 3 }}
          mt={{ _: '0', lg: '120px' }}
          mb="20px"
        >
          <Heading textAlign={{ _: 'center', lg: 'inherit' }}>
            Manage Your Accounts
          </Heading>
          <Text
            textAlign={{ _: 'center', lg: 'inherit' }}
            variant="largeBase"
            color="accent"
            my={{ _: '15px', lg: '0' }}
          >
            MyCrypto allows you to import and manage all of the Ethereum
            accounts that you have control of.
          </Text>
        </Box>
        <Flex width={{ _: '100%', lg: 2 / 3 }} justifyContent="center">
          <Media type="desktop" width={{ sm: '70%', lg: '100%' }}>
            <Flex width="100%" justifyContent="center">
              <Icon name="manageYourWallets" />
            </Flex>
          </Media>
          <Media type="mobile">
            <Icon name="manageYourWalletsMobile" width="100%" />
          </Media>
        </Flex>
      </Flex>
      <Flex
        flexDirection={{ _: 'column-reverse', lg: 'row' }}
        justifyContent={{ _: 'center', lg: 'space-between' }}
        alignItems="center"
        my={{ _: '20px', sm: '50px', lg: '65px' }}
        mb="20px"
        width="100%"
      >
        <Flex width={{ _: '100%', lg: 3 / 4 }} justifyContent="center">
          <Media type="desktop" width={{ sm: '100%' }}>
            <Flex width="100%" justifyContent="center">
              <Icon name="dashboard" width="90%" />
            </Flex>
          </Media>
          <Media type="mobile">
            <Icon name="dashboard" width="100%" />
          </Media>
        </Flex>
        <Box width={{ _: '90%', lg: 1 / 4 }}>
          <Heading textAlign={{ _: 'center', lg: 'right' }}>
            View All Your Transactions
          </Heading>
          <Text
            textAlign={{ _: 'center', lg: 'right' }}
            variant="largeBase"
            color="accent"
            my={{ _: '15px', lg: '0' }}
          >
            One combined view for all of the transaction histories across all of
            your accounts.
          </Text>
        </Box>
      </Flex>
      <Flex
        flexDirection={{ _: 'column', lg: 'row' }}
        justifyContent={{ _: 'center', lg: 'space-between' }}
        alignItems={{ _: 'center', lg: 'center' }}
        my={{ _: '20px', sm: '50px', lg: '65px' }}
        width="100%"
      >
        <Box width={{ _: '90%', lg: 1 / 3 }} mt={{ _: '0' }} mb="20px">
          <Heading textAlign={{ _: 'center', lg: 'inherit' }}>
            Keep It Safe
          </Heading>
          <Text
            textAlign={{ _: 'center', lg: 'inherit' }}
            variant="largeBase"
            color="accent"
            my={{ _: '15px', lg: '0' }}
          >
            Check your transaction recipient against 50M+ labeled Ethereum
            accounts to be sure you're sending to the right place.
          </Text>
        </Box>
        <Flex width={{ _: '100%', lg: 2 / 3 }} justifyContent="center">
          <Media type="desktop" height={{ sm: '100%' }}>
            <Flex width="100%" justifyContent="center">
              <Icon name="controlCrypto" width="100%" />
            </Flex>
          </Media>
          <Media type="mobile">
            <Icon name="controlCrypto" width="100%" />
          </Media>
        </Flex>
      </Flex>
    </Section>
  );
};

export default Features;
