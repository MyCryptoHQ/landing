import { WalletTags } from '@mycrypto/wallet-list';
import { Box, Icon, IconName, Text } from '@components';
import { BoxProps } from 'rebass';
import { PositionProps } from 'styled-system';

export const getWalletTag = (
  tag: WalletTags
): { icon: IconName; text: string } => {
  switch (tag) {
    case WalletTags.Hardware:
      return {
        icon: 'hardware-tag',
        text: 'Hardware Wallet',
      };
    case WalletTags.Web:
      return {
        icon: 'web-tag',
        text: 'Browser Based',
      };
    case WalletTags.Mobile:
      return {
        icon: 'mobile-tag',
        text: 'Mobile',
      };
    case WalletTags.Desktop:
      return {
        icon: 'desktop-tag',
        text: 'Desktop',
      };
    case WalletTags.Exchange:
      return {
        icon: 'exchange-tag',
        text: 'Exchange',
      };
    case WalletTags.WalletConnect:
      return {
        icon: 'walletconnect-tag',
        text: 'via Wallet Connect',
      };
    case WalletTags.Other:
      return {
        icon: 'other-tag',
        text: 'Other',
      };
  }
};

export const WalletTag = ({
  tag,
  top,
  bottom,
  right,
  ...props
}: {
  tag: WalletTags;
} & BoxProps &
  PositionProps) => {
  const tagConfig = getWalletTag(tag);
  return (
    <Box
      position="absolute"
      display="flex"
      alignItems="center"
      justifyContent="center"
      right={right}
      top={top}
      bottom={bottom}
      width={{ _: '60px', sm: '80px' }}
      height={{ _: '60px', sm: '80px' }}
      backgroundColor="faded_purple"
      sx={{
        borderRadius: '50%',
      }}
      {...props}
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        m="15px"
      >
        <Icon
          name={tagConfig.icon}
          width={{ _: '10px', sm: '16px' }}
          color="white"
          mb="5px"
        />
        <Text
          color="white"
          fontSize={{ _: '9px', sm: '10px' }}
          mb="0"
          textAlign="center"
          fontWeight={400}
        >
          {tagConfig.text}
        </Text>
      </Box>
    </Box>
  );
};
