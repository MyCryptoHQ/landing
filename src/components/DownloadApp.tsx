import React from 'react';
import { Section, Heading, Text, Box, Flex, Icon, Button } from '@components';

const DownloadApp = () => {
  return (
    <Section
      type="landing"
      justifyContent={{ _: 'center', lg: 'space-between' }}
      flexDirection={{ _: 'column-reverse', lg: 'row' }}
      bg="accent"
      color="textInvert"
      py={{ _: '50px', lg: '150px' }}
      px={{ _: '5%', lg: 0 }}
    >
      <Box width={{ _: '100%', lg: 1 / 2 }}>
        <Heading textAlign={{ _: 'center', lg: 'inherit' }}>
          Everythind is Even More Secure with our Desktop App
        </Heading>
        <Text
          textAlign={{ _: 'center', lg: 'inherit' }}
          variant="subHeading"
          color="textInvert"
          my="20px"
          mb={{ _: '70px', lg: '20px' }}
        >
          Keep your keys out of the browser with the MyCrypto Desktop App. You
          get more access to your funds, and scammers get less access to you.
        </Text>
        <Button width={{ _: '100%', lg: '300px' }} variant="primary">
          Download for macOS
        </Button>
      </Box>
      <Box width={{ _: '100%', lg: 1 / 2 }} mb={{ _: '30px', lg: 0 }}>
        <Flex
          justifyContent="center"
          alignItems="center"
          width="100%"
          height="100%"
        >
          <Icon name="bottle" width={{ _: '50%', lg: 'auto' }} />
        </Flex>
      </Box>
    </Section>
  );
};

export default DownloadApp;
