import { Socials, SOCIAL_LINKS } from '.';
import { Box, Text, Flex } from '@components';

const MobileBottom = () => {
  return (
    <Flex flexDirection="column" alignItems="center" order={6}>
      <Box display={{ _: 'block', lg: 'none' }}>
        <Socials socials={SOCIAL_LINKS} />
        <Text
          variant="footerSmall"
          color="white"
          textAlign="center"
        >{`© ${new Date().getFullYear()} MyCrypto, Inc.`}</Text>
      </Box>
    </Flex>
  );
};

export default MobileBottom;
