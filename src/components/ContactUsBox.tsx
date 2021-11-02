import React from 'react';
import { Flex, Heading, Text, Link } from '@components';

interface props {
  title?: string;
  children?: any;
  footertitle?: string;
}

const ContactUsBox = ({
  title = 'Contact Us',
  children,
  footertitle,
}: props) => {
  return (
    <Flex variant="card" width="300px" padding="24px">
      <Flex flexDirection="column" alignItems="left">
        <Heading
          variant="greyHeader"
          mt="20px"
          display="block"
          paddingBottom="15px"
          sx={{
            borderBottom: '1px solid #B5BFC7',
            borderBottomStyle: 'solid',
            marginBottom: '15px',
          }}
        >
          {title}
        </Heading>
        {children}
        {footertitle && (
          <Heading
            variant="greyHeader"
            mt="20px"
            display="block"
            paddingBottom="10px"
          >
            {footertitle}
          </Heading>
        )}
        <Text
          variant="smallBase"
          mt="14px"
          mb="14px"
          lineHeight="17px"
          fontSize="14px"
        >
          If you have any questions, comments, or suggestions about our
          disclaimer, please contact MyCrypto support at{' '}
          <Link href="mailto:support@mycrypto.com">support@mycrypto.com</Link>
        </Text>
      </Flex>
    </Flex>
  );
};

export default ContactUsBox;
