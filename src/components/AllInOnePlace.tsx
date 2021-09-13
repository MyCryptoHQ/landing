import { Box, Section, Icon, Heading, Text, Link, Flex } from '@components';
import { WALLETS } from '@config';
import { WalletButton } from './WalletButton';

export const AllInOnePlace = () => {
  return (
    <Box
      position="relative"
      width="100%"
      height={{ _: '740px', sm: '120vh' }}
      mb="50px"
      pt="30px"
      pb={{ _: 0, sm: '45vh' }}
    >
      <Box
        position="absolute"
        left="0"
        top={{ _: '22%', sm: '50px' }}
        zIndex={-1}
      >
        <Icon name="summerLeft" width={{ _: '120px', sm: 'auto' }} />
      </Box>
      <Box
        position="absolute"
        right={{ _: 0, sm: '180px' }}
        bottom={{ _: '50px', sm: '20%' }}
        zIndex={-1}
      >
        <Icon name="summerRight" width={{ _: '120px', sm: 'auto' }} />
      </Box>
      <Box position="absolute" width="100%" bottom="0" left="0" zIndex={-2}>
        <Icon name="summerBackground" width="100%" />
      </Box>
      <Flex
        width={{ _: '100%', md: '80%', lg: '75%' }}
        maxWidth="1920px"
        margin="0 auto"
        flexDirection="column"
        alignItems="center"
        justifyContent={{ _: 'flex-start', sm: 'center' }}
        height="100%"
        sx={{ zIndex: 3 }}
      >
        <Flex flexDirection={{ _: 'column', sm: 'row' }}>
          <Heading>All your ETH.</Heading>
          <Heading ml={{ _: 0, sm: '10px' }}>All in one place.</Heading>
        </Flex>
        <Flex
          flexDirection={{ _: 'column', sm: 'row' }}
          mt={{ _: '20px', sm: '64px' }}
          mb="20px"
          textAlign="center"
        >
          <Heading
            variant="heading.secondary"
            fontSize={{ _: '22px', sm: '1.5rem' }}
          >
            Ready to dive in?
          </Heading>
          <Heading
            variant="heading.secondary"
            fontSize={{ _: '22px', sm: '1.5rem' }}
            ml={{ _: 0, sm: '5px' }}
          >
            Connect your wallet:
          </Heading>
        </Flex>
        <Flex flexDirection={{ _: 'column', sm: 'row' }} textAlign="center">
          <Text color="greyed">Don't see yout wallet here?</Text>
          <Link
            blank={false}
            href="#wallets"
            ml={{ _: 0, sm: '5px' }}
            mt={{ _: '10px', sm: 0 }}
          >
            See all Wallets
          </Link>
        </Flex>
        <Flex
          maxWidth="500px"
          width="100%"
          flexDirection="row"
          flexWrap="wrap"
          justifyContent="center"
          mt={{ _: '50px', sm: '25px' }}
          mb="80px"
        >
          {WALLETS.map((wallet) => (
            <WalletButton wallet={wallet} />
          ))}
        </Flex>
        <Flex flexDirection={{ _: 'column', sm: 'row' }} textAlign="center">
          <Text fontSize="1.125em" fontWeight={700}>
            Not quite ready for the deep end?
          </Text>
          <Link
            blank={false}
            href="#safeandeasy"
            fontSize="1.125em"
            ml={{ _: 0, sm: '5px' }}
            mt={{ _: '10px', sm: 0 }}
          >
            Start Here <Icon name="caret" width={{ _: '16px', sm: '20px' }} />
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};
