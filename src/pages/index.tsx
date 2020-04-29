import React from 'react';

import { URLS } from '@/config';
import {
  Section,
  SEO,
  Heading,
  Button,
  Link,
  Text,
  Icon,
  Media,
  Box,
  Flex,
} from '@/components';

const HomePage = () => {
  return (
    <Flex flexDirection="column" width="100%">
      <SEO title="Home" />
      {/* Get Started */}
      <Section type="landing">Get Started</Section>
      {/* Compatible Wallets */}
      <Section type="landing">Compatible Wallets</Section>
      {/* Features */}
      <Section type="landing">Features</Section>
      {/* Download App */}
      <Section type="landing" bg="accent" color="textInvert">
        <Heading>Everythind is Even More Secure with our Desktop App</Heading>
        <Text>
          Keep your keys out of the browser with the MyCrypto Desktop App. You
          get more access to your funds, and scammers get less access to you.
        </Text>
        <Button variant="primary">Download for macOS</Button>
      </Section>
      {/* Keep your assets safe */}
      <Section type="landing" bg="muted">
        <Heading>A Different Way to Keep Your Assets Safe</Heading>
      </Section>
      {/* Peace of Mind */}
      <Section type="landing">Peace of Mind</Section>
      {/* Testimonials */}
      <Section type="landing" bg="muted">
        Testimonials
      </Section>
      {/* Bottom Action */}
      <Section type="landing" flexDirection="column" relative>
        <Box
          sx={{
            width: '44px',
            height: '132px',
            position: 'absolute',
            top: '-40px',
            right: '-30px',
          }}
        >
          <Icon name="sparkles" />
        </Box>
        <Heading>
          Ready to start managing your funds safely and confidently?
        </Heading>
        <Button variant="primary">Get Started</Button>
        <Link href={URLS.support}>
          <Text>Have Questions? We&apos;re Here to Help!</Text>
        </Link>
        <Media type="mobile">
          <Flex justifyContent="space-between">
            <Icon name="swoosh" />
            <Icon name="oval" />
          </Flex>
        </Media>
      </Section>
    </Flex>
  );
};

export default HomePage;
