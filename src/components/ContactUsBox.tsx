import React from 'react';
import { Flex, Heading, Text } from '@components';

const ContactUsBox = () => {
  return (
    <Flex variant="card" width="300px" padding="24px">
      <Flex flexDirection="column" alignItems="left">
        <Heading variant="greyHeader" mt="20px" display="block">
          Contact Us
        </Heading>
        <Text
          variant="smallBase"
          mt="14px"
          mb="14px"
          lineHeight="17px"
          fontSize="14px"
        >
          If you have any questions, comments, or suggestions about our
          disclaimer, please contact MyCrypto support at{' '}
          <a href="mailto:support@mycrypto.com">support@mycrypto.com</a>
        </Text>
      </Flex>
    </Flex>
  );
};

export default ContactUsBox;
