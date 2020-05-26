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
  Box,
  Flex,
  WalletList,
  WALLET_CARDS,
  Testimonials,
} from '@components';

import users from '@assets/title-illustration.svg';

const HomePage = () => {
  return (
    <Flex flexDirection="column">
      <SEO title="Home" />
      {/* Get Started */}
      <Section
        color="text"
        pl={{ _: 0, lg: '7%' }}
        my={{ _: '0', lg: '20px' }}
        height={{ _: '100vh', lg: 'auto' }}
        sx={{
          backgroundImage: `url(${users})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: ['85%', null, null, null, 'contain'],
          backgroundPosition: [
            'center center',
            null,
            null,
            'right center',
            null,
            '80% center',
          ],
        }}
      >
        <Box
          width={{ _: '100%', lg: 1 / 2 }}
          height="100%"
          py={{ _: '20px', lg: '55px' }}
        >
          <Flex
            flexDirection="column"
            alignItems={{ _: 'center', lg: 'flex-start' }}
            justifyContent={{ _: 'space-between', lg: 'flex-start' }}
            height="100%"
          >
            <Box>
              <Heading
                textAlign={{ _: 'center', lg: 'left' }}
                variant="largeHeading"
              >
                You're In The Right Place.
              </Heading>
              <Heading
                textAlign={{ _: 'center', lg: 'left' }}
                sx={{ marginTop: '10px' }}
              >
                It's Time To Use MyCrypto
                <br />
                For Your Crypto.
              </Heading>
            </Box>
            <Flex
              flexDirection={{ _: 'row', lg: 'column' }}
              justifyContent={{ _: 'space-evenly', lg: 'flex-start' }}
              sx={{ marginTop: '70px' }}
              width="100%"
            >
              <Card
                variant="card"
                width={{ _: '30%', lg: '400px' }}
                height={{ _: '160px', lg: '110px' }}
                padding={{ _: '0', lg: '25px 30px' }}
                mb="15px"
              >
                <Flex
                  flexDirection={['column-reverse', null, null, null, 'row']}
                  justifyContent={{ _: 'center', lg: 'space-between' }}
                  alignItems="center"
                  height="100%"
                >
                  <Box>
                    <Heading
                      textAlign={{ _: 'center', lg: 'left' }}
                      variant="title"
                      my={{ _: '10px', lg: 'inherit' }}
                    >
                      I need a wallet
                    </Heading>
                    <Text
                      textAlign={{ _: 'center', lg: 'left' }}
                      variant="base"
                    >
                      Download app to create wallet
                    </Text>
                  </Box>
                  <Icon name="newWallet" height={{ _: '28%', lg: '60px' }} />
                </Flex>
              </Card>
              <Card
                variant="card"
                width={{ _: '30%', lg: '400px' }}
                height={{ _: '160px', lg: '110px' }}
                padding={{ _: '0', lg: '25px 30px' }}
                mb="15px"
              >
                <Flex
                  flexDirection={['column-reverse', null, null, null, 'row']}
                  justifyContent={{ _: 'center', lg: 'space-between' }}
                  alignItems="center"
                  height="100%"
                >
                  <Box>
                    <Heading
                      textAlign={{ _: 'center', lg: 'left' }}
                      variant="title"
                      my={{ _: '10px', lg: 'inherit' }}
                    >
                      I have a wallet
                    </Heading>
                    <Text
                      textAlign={{ _: 'center', lg: 'left' }}
                      variant="base"
                    >
                      Connect wallet to MyCrypto
                    </Text>
                  </Box>
                  <Icon
                    name="existingWallet"
                    height={{ _: '28%', lg: '60px' }}
                  />
                </Flex>
              </Card>
              <Card
                variant="card"
                width={{ _: '30%', lg: '400px' }}
                height={{ _: '160px', lg: '110px' }}
                padding={{ _: '0', lg: '25px 30px' }}
                mb="15px"
              >
                <Flex
                  flexDirection={{ _: 'column-reverse', lg: 'row' }}
                  justifyContent={{ _: 'center', lg: 'space-between' }}
                  alignItems="center"
                  height="100%"
                >
                  <Box>
                    <Heading
                      textAlign={{ _: 'center', lg: 'left' }}
                      variant="title"
                      my={{ _: '10px', lg: 'inherit' }}
                    >
                      I've used MyCrypto
                    </Heading>
                    <Text
                      textAlign={{ _: 'center', lg: 'left' }}
                      variant="base"
                    >
                      Continue to Dashboard
                    </Text>
                  </Box>
                  <Icon name="signIn" height={{ _: '28%', lg: '60px' }} />
                </Flex>
              </Card>
            </Flex>
          </Flex>
        </Box>
      </Section>
      {/* Compatible Wallets */}
      <Section
        bg="muted"
        flexDirection="row"
        py="20px"
        px={{ _: 0, lg: '140px' }}
        color="text"
      >
        <Flex
          flexDirection={{ _: 'column', lg: 'row' }}
          justifyContent="center"
          alignItems="center"
          height="100%"
          width="100%"
        >
          <Box width={{ _: 1 / 2, lg: 1 / 5 }}>
            <Flex flexDirection="column" justifyContent="center" height="100%">
              <Heading variant="title" textAlign={{ _: 'center', lg: 'left' }}>
                Fully Compatible
              </Heading>
              <Text textAlign={{ _: 'center', lg: 'left' }} variant="base">
                Use with your favorite hardware and software wallets:
              </Text>
            </Flex>
          </Box>
          <Box width={{ _: '100%', lg: 4 / 5 }}>
            <WalletList list={WALLET_CARDS} />
          </Box>
        </Flex>
      </Section>
      {/* Features */}
      <Section
        type="landing"
        alignItems="center"
        color="accent"
        pt="80px"
        pb="140px"
      >
        <Heading>
          Managing and storing your assets has never been easier
        </Heading>
        <Text variant="subHeading" color="accent">
          The MyCrypto apps put your safety & security first.
        </Text>
        <Flex justifyContent="space-between" my="65px" width="100%">
          <Box width={1 / 3} mt="120px">
            <Heading>Manage Your Wallets</Heading>
            <Text variant="largeBase" color="accent">
              MyCrypto allows you to create, import, and manage all the wallets
              you'll ever need.
            </Text>
          </Box>
          <Box width={2 / 3}>
            <Icon name="manageYourWallets" width="100%" />
          </Box>
        </Flex>
        <Flex justifyContent="space-between" my="65px" width="100%">
          <Box width={3 / 4}>
            <Icon name="dashboard" width="100%" />
          </Box>
          <Box width={1 / 4} mt="150px">
            <Heading>View Your Dashboard</Heading>
            <Text variant="largeBase" color="accent">
              See a detailed breakdown of all your wallets, tokens, and
              transactions.
            </Text>
          </Box>
        </Flex>
        <Flex justifyContent="space-between" my="65px" width="100%">
          <Box width={1 / 3} mt="280px">
            <Heading>Control Your Crypto</Heading>
            <Text variant="largeBase" color="accent">
              Manage your information and your cryptocurrency easily and without
              fear.
            </Text>
          </Box>
          <Box width={2 / 3}>
            <Icon name="controlCrypto" width="80%" />
          </Box>
        </Flex>
      </Section>
      {/* Download App */}
      <Section
        type="landing"
        justifyContent="space-between"
        flexDirection="row"
        bg="accent"
        color="textInvert"
        py="150px"
      >
        <Box width={1 / 2}>
          <Heading>Everythind is Even More Secure with our Desktop App</Heading>
          <Text variant="subHeading" color="textInvert" my="20px">
            Keep your keys out of the browser with the MyCrypto Desktop App. You
            get more access to your funds, and scammers get less access to you.
          </Text>
          <Button variant="primary">Download for macOS</Button>
        </Box>
        <Box width={1 / 2}>
          <Flex
            justifyContent="center"
            alignItems="center"
            width="100%"
            height="100%"
          >
            <Icon name="bottle" />
          </Flex>
        </Box>
      </Section>
      {/* Keep your assets safe */}
      <Section
        type="landing"
        bg="muted"
        py="100px"
        color="text"
        alignItems="center"
      >
        <Heading>A Different Way to Keep Your Assets Safe</Heading>
        <Flex width="100%" justifyContent="space-evenly" mt="100px">
          <Flex flexDirection="column" alignItems="center">
            <Icon name="bank" />
            <Heading fontWeight="bold" my="20px">
              With Banks
            </Heading>
            <Text textAlign="center">
              They control your account <br />
              They own your info <br />
              They add fees <br />
              They tell you what you can do <br />
            </Text>
          </Flex>
          <Flex flexDirection="column" alignItems="center">
            <Icon name="withMYC" />
            <Heading fontWeight="bold" my="20px">
              With MyCrypto
            </Heading>
            <Text textAlign="center">
              You control your account <br />
              You own your info <br />
              No fees are added <br />
              You do whatever you want <br />
            </Text>
          </Flex>
        </Flex>
      </Section>
      {/* Peace of Mind */}
      <Section type="landing" py="100px" alignItems="center" color="text">
        <Heading>Finally Enjoy Peace of Mind</Heading>
        <Text variant="subHeading">
          MyCrypto puts your safety & security first.
        </Text>
        <Flex
          width="100%"
          flexDirection="row"
          justifyContent="space-between"
          mt="60px"
          mb="100px"
        >
          <Flex width={1 / 3} flexDirection="column" alignItems="center">
            <Icon name="vault" />
            <Text variant="subHeading" textAlign="center" maxWidth="350px">
              Get your information out of other people's hands and back into
              yours
            </Text>
          </Flex>
          <Flex width={1 / 3} flexDirection="column" alignItems="center">
            <Icon name="protect" />
            <Text variant="subHeading" textAlign="center" maxWidth="350px">
              Protect yourself from phishing attacks and malicious extensions
            </Text>
          </Flex>
          <Flex width={1 / 3} flexDirection="column" alignItems="center">
            <Icon name="vault" />
            <Text variant="subHeading" textAlign="center" maxWidth="350px">
              Open-source, fully <br /> audited, and fully <br /> verifiable.
            </Text>
          </Flex>
        </Flex>
        <Flex width={2 / 3} justifyContent="space-between">
          <Button variant="primary">Get Started on Web</Button>
          <Button variant="primary">Download the Desktop App</Button>
        </Flex>
      </Section>
      {/* Testimonials */}
      <Section bg="muted" py="200px">
        <Testimonials />
      </Section>
      {/* Bottom Action */}
      <Section
        type="landing"
        flexDirection="column"
        alignItems="center"
        color="text"
        py="100px"
        relative
      >
        <Heading mb="60px">
          Ready to start managing your funds safely and confidently?
        </Heading>
        <Button variant="primary">Get Started</Button>
        <Link href={URLS.support} mt="20px" sx={{ textDecoration: 'none' }}>
          <Text variant="link" color="link">
            Have Questions? We&apos;re Here to Help!
          </Text>
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
