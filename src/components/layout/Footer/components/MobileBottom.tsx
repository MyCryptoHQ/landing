import React from 'react';
import { Socials, SOCIAL_LINKS } from '.';
import { Media, Text, Flex } from '@components';

const MobileBottom = () => {
  return (
    <Flex flexDirection="column" alignItems="center" order={6}>
      <Media type="mobile">
        <Socials socials={SOCIAL_LINKS} />
        <Text
          variant="footerSmall"
          color="white"
          textAlign="center"
        >{`© ${new Date().getFullYear()} MyCrypto, Inc.`}</Text>
      </Media>
    </Flex>
  );
};

export default MobileBottom;
