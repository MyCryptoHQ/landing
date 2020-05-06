import React from 'react';

import { URLS } from '@config';
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
  WalletList,
  WALLET_CARDS,
} from '@components';

const HomePage = () => {
  return (
    <Flex flexDirection="column" width="100%">
      <SEO title="Home" />
      {/* Get Started */}
      <Section type="landing">
        <Heading>You're in the right place</Heading>
        <Text>It's Time To Use MyCrypto For Your Crypto</Text>
      </Section>
      {/* Compatible Wallets */}
      <Section type="landing">
        <Heading>Fully Compatible</Heading>
        <Text>Use with your favorite hardware and software wallets</Text>
        <WalletList list={WALLET_CARDS} />
      </Section>
      {/* Features */}
      <Section type="landing">
        <Heading>
          Managing and storing your assets has never been easier
        </Heading>
        <Text>The MyCrypto apps put the power in your hands.</Text>
        <Box>
          <Heading>Manage Your Wallets</Heading>
          <Text>
            MyCrypto allows you to create, import, and manage all the wallets
            you'll ever need.
          </Text>
          <Icon name="manageYourWallets" />
        </Box>
        <Box>
          <Heading>View Your Dashboard</Heading>
          <Text>
            See a detailed breakdown of all your wallets, tokens, and
            transactions.
          </Text>
          <Icon name="dashboard" width="auto" maxWidth="70%" maxHeight="550" />
        </Box>
        <Box>
          <Heading>Control Your Crypto</Heading>
          <Text>
            Manage your information and your cryptocurrency easily and without
            fear.
          </Text>
          <Icon name="controlCrypto" />
        </Box>
      </Section>
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
        <Flex>
          <Box>
            <Icon name="bank" />
            <Text fontWeight="bold">With Banks</Text>
            <Text>
              They control your account <br />
              They own your info <br />
              They add fees <br />
              They tell you what you can do <br />
            </Text>
          </Box>
          <Box>
            <Icon name="withMYC" />
            <Text fontWeight="bold">With MyCrypto</Text>
            <Text>
              You control your account <br />
              You own your info <br />
              No fees are added <br />
              You do whatever you want <br />
            </Text>
          </Box>
        </Flex>
      </Section>
      {/* Peace of Mind */}
      <Section type="landing">
        <Heading>Finally Enjoy Peace of Mind</Heading>
        <Heading>MyCrypto puts your safety & security first.</Heading>
        <Button>Get Started on Web</Button>
        <Button>Download the Desktop App</Button>
        <Box>
          <Icon name="vault" />
          <Text>
            Get your information out of other people's hands and back into yours
          </Text>
        </Box>
        <Box>
          <Icon name="protect" />
          <Text>
            Protect yourself from phishing attacks and malicious extensions
          </Text>
        </Box>
        <Box>
          <Icon name="vault" />
          <Text>Open-source, fully audited, and full verifiable.</Text>
        </Box>
      </Section>
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
