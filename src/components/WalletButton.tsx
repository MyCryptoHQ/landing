import {
  IWallet,
  defaultWallet,
  WalletTags,
  WalletTypes,
  WalletConnectivity,
} from '@mycrypto/wallet-list';
import { useState } from 'react';
import { Flex, Image, Text, Box, WalletTag, Link } from '@components';
import { BoxProps } from 'rebass/styled-components';
import { getRoute } from '@utils';

export const getConnectionPhrase = (wallet: IWallet) => {
  switch (wallet.connectivity) {
    case WalletConnectivity.Ledger:
    case WalletConnectivity.Trezor:
    case WalletConnectivity.Web3:
      return (
        <Text color="greyed">
          <Link href={`${getRoute('ADD_ACCOUNT')}/${wallet.id}`}>
            Connect & sign
          </Link>{' '}
          transactions directly with your noncustodial wallet.
        </Text>
      );
    case WalletConnectivity.ViewOnly:
      return (
        <Text color="greyed">
          <Link href={`${getRoute('ADD_ACCOUNT')}/${wallet.id}`}>
            Import an account
          </Link>{' '}
          and track your balances.
        </Text>
      );
    case WalletConnectivity.WalletConnect:
      return (
        <Text color="greyed">
          <Link href={`${getRoute('ADD_ACCOUNT')}/${wallet.id}`}>
            Connect & sign
          </Link>{' '}
          via WalletConnect QR codes.
        </Text>
      );
    case WalletConnectivity.MigrateCustodial:
    case WalletConnectivity.MigrateNonCustodial:
      return (
        <Text color="greyed">
          <Link href={`${getRoute('ONBOARDING')}/${wallet.id}`}>
            Migrate your funds
          </Link>{' '}
          and control your keys.
        </Text>
      );
    case WalletConnectivity.MyCrypto:
      return (
        <Text color="greyed">
          <Link href={getRoute('DOWNLOAD')}>Download Quill</Link> and import
          your {wallet.name}
        </Text>
      );
    case WalletConnectivity.Interface:
      return (
        <Text color="greyed">
          Select and connect to a wallet supported by this interface.
        </Text>
      );
  }
};

export const WalletButton = ({
  wallet,
  ...props
}: BoxProps & { wallet: IWallet }) => {
  const [isOpen, setIsOpen] = useState(false);
  const connectLink = getConnectionPhrase(wallet);
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
            ml={{ _: '20px', sm: '0' }}
          >
            <Text mt="15px" fontWeight={700} fontSize="1.125em">
              {wallet.name}
            </Text>
            <Box
              mt="10px"
              mb={{ _: '10px', sm: '20px' }}
              maxWidth={{ _: '130px', sm: '150px' }}
            >
              {connectLink}
            </Box>
            <Image
              src={wallet.icon}
              width={{ _: '30px', sm: '41px' }}
              height="auto"
            />
            {wallet.tags && wallet.tags[0] && (
              <WalletTag
                tag={wallet.tags[0]}
                top={{ _: 'auto', sm: '5px' }}
                right={{ _: '40px', sm: '5px' }}
                bottom={{ _: '-25px', sm: 'auto' }}
              />
            )}
            {wallet.tags && wallet.tags[1] && (
              <WalletTag
                tag={wallet.tags[1]}
                top={{ _: 'auto', sm: '85px' }}
                right={{ _: '-15px', sm: '-35px' }}
                bottom={{ _: '10px', sm: 'auto' }}
              />
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
