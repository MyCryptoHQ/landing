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
  Card,
  Image,
  Box,
  Flex,
  WalletList,
  WALLET_CARDS,
} from '@components';

import users from '@assets/title-illustration.svg';

const HomePage = () => {
  return (
    <Flex flexDirection="column" width="100%">
      <SEO title="Home" />
      {/* Get Started */}
      <Section type="landing" flexDirection="row">
        <Box width={1 / 2}>
          <Heading variant="largeHeading">You're In The Right Place.</Heading>
          <Heading sx={{ marginTop: '10px' }}>
            It's Time To Use MyCrypto
            <br />
            For Your Crypto.
          </Heading>
          <Box sx={{ marginTop: '30px' }}>
            <Card
              variant="card"
              sx={{
                width: '400px',
                height: '110px',
                padding: '25px 30px',
                marginBottom: '15px',
              }}
            >
              <Flex
                flexDirection="row"
                justifyContent="space-between"
                alignItems="center"
                height="100%"
              >
                <Box>
                  <Heading variant="title">I need a wallet</Heading>
                  <Text variant="base">Download app to create wallet</Text>
                </Box>
                <Icon name="newWallet" width="60px" />
              </Flex>
            </Card>
            <Card
              variant="card"
              sx={{
                width: '400px',
                height: '110px',
                padding: '25px 30px',
                marginBottom: '15px',
              }}
            >
              <Flex
                flexDirection="row"
                justifyContent="space-between"
                alignItems="center"
                height="100%"
              >
                <Box>
                  <Heading variant="title">I have a wallet</Heading>
                  <Text variant="base">Connect wallet to MyCrypto</Text>
                </Box>
                <Icon name="existingWallet" width="60px" />
              </Flex>
            </Card>
            <Card
              variant="card"
              sx={{
                width: '400px',
                height: '110px',
                padding: '25px 30px',
              }}
            >
              <Flex
                flexDirection="row"
                justifyContent="space-between"
                alignItems="center"
                height="100%"
              >
                <Box>
                  <Heading variant="title">I've used MyCrypto</Heading>
                  <Text variant="base">Continue to Dashboard</Text>
                </Box>
                <Icon name="signIn" width="60px" />
              </Flex>
            </Card>
          </Box>
        </Box>
        <Box width={1 / 2}>
          <img src={users} width="105%" height="auto" />
        </Box>
      </Section>
      {/* Compatible Wallets */}
      <Section type="landing" bg="muted" flexDirection="row" py="20px">
        <Flex
          flexDirection="row"
          justifyContent="center"
          height="100%"
          width="100%"
        >
          <Box width={1 / 3}>
            <Flex flexDirection="column" justifyContent="center" height="100%">
              <Heading variant="title">Fully Compatible</Heading>
              <Text variant="base">
                Use with your favorite hardware and software wallets:
              </Text>
            </Flex>
          </Box>
          <Box width={2 / 3}>
            <WalletList list={WALLET_CARDS} />
          </Box>
        </Flex>
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
