import { IWallet, defaultWallet } from '@mycrypto/wallet-list';
import { useState } from 'react';
import { Flex, Image, Text, Box } from '@components';
import { BoxProps } from 'rebass/styled-components';

export const WalletButton = ({
  wallet,
  ...props
}: BoxProps & { wallet: IWallet }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Box
      width={{ _: '95px', sm: '130px' }}
      height={{ _: '95px', sm: '130px' }}
      position="relative"
      {...props}
    >
      <Flex
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        flexDirection="column"
        alignItems="center"
        backgroundColor="white"
        justifyContent="center"
        width={{ _: isOpen ? '190px' : '95px', sm: isOpen ? '283px' : '130px' }}
        height={{
          _: isOpen ? '190px' : '95px',
          sm: isOpen ? '283px' : '130px',
        }}
        sx={{
          borderRadius: '50%',
          boxShadow: '0px 2.98162px 5.96325px rgba(0, 0, 0, 0.15);',
          position: 'absolute',
          bottom: isOpen ? '-40px' : 0,
          left: isOpen ? '-40px' : 0,
          zIndex: isOpen ? 999 : 1,
          transition: 'all .3s ease-in-out',
        }}
      >
        {isOpen ? (
          <Flex
            flexDirection="column"
            justifyContent="center"
            alignItems="flex-start"
          >
            <Text mt="15px" fontWeight={700} fontSize="1.125em">
              {wallet.name}
            </Text>
            <Text mt="10px" mb="20px" color="greyed">
              This is a test message
            </Text>
            <Image
              src={wallet.icon}
              width={{ _: '30px', sm: '41px' }}
              height="auto"
            />
            {wallet.tags && wallet.tags[0] && (
              <Box
                position="absolute"
                right={0}
                top={0}
                width="63px"
                height="63px"
                backgroundColor="alert_purple"
                sx={{
                  borderRadius: '50%',
                }}
              >
                {wallet.tags[0]}
              </Box>
            )}
          </Flex>
        ) : (
          <Flex
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Image
              src={wallet.icon ?? defaultWallet}
              width={{ _: '30px', sm: '41px' }}
              height="auto"
            />

            <Text
              mt="15px"
              fontWeight={700}
              fontSize="0.875em"
              width="90%"
              textAlign="center"
            >
              {wallet.name}
            </Text>
          </Flex>
        )}
        {wallet.mostPopular && (
          <>
            <Text
              display={{ _: 'none', sm: 'block' }}
              backgroundColor="alert_purple"
              opacity={isOpen ? 0 : 1}
              color="white"
              fontSize="0.75em"
              py="5px"
              fontWeight={700}
              width="130px"
              textAlign="center"
              sx={{
                textTransform: 'uppercase',
                position: 'absolute',
                left: '0',
                bottom: '-5px',
                borderRadius: '22px',
                transition: 'all .1s ease',
              }}
            >
              Most Popular
            </Text>
            <Text
              display={{ _: 'block', sm: 'none' }}
              backgroundColor="alert_purple"
              opacity={isOpen ? 0 : 1}
              color="white"
              fontSize="0.75em"
              py="5px"
              fontWeight={700}
              width="90px"
              textAlign="center"
              sx={{
                textTransform: 'uppercase',
                position: 'absolute',
                left: '0',
                bottom: '-5px',
                borderRadius: '22px',
                transition: 'all .1s ease',
              }}
            >
              Popular
            </Text>
          </>
        )}
      </Flex>
    </Box>
  );
};
