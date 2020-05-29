import React from 'react';
import { Section, Heading, Flex, Text, Icon } from '@components';
import { TIconWithText, ICONS_WITH_TEXT } from './config';

const IconWithText = ({ icon, heading, text }: TIconWithText) => {
  return (
    <Flex flexDirection="column" alignItems="center">
      <Icon name={icon} />
      <Heading fontWeight="bold" my="20px">
        {heading}
      </Heading>
      <Text textAlign="center">
        {text.map((text, index) => (
          <span key={index}>
            {text}
            <br />
          </span>
        ))}
      </Text>
    </Flex>
  );
};

const KeepAssetsSafe = () => {
  return (
    <Section
      type="landing"
      bg="muted"
      py={{ _: '45px', lg: '100px' }}
      px={{ _: '5%', lg: 0 }}
      color="text"
      alignItems="center"
    >
      <Heading textAlign="center">
        A Different Way to Keep Your Assets Safe
      </Heading>
      <Flex
        width="100%"
        flexDirection={{ _: 'column', lg: 'row' }}
        justifyContent="space-evenly"
        mt={{ _: '65px', lg: '100px' }}
      >
        {ICONS_WITH_TEXT.map((el, index) => (
          <IconWithText {...el} key={index} />
        ))}
      </Flex>
    </Section>
  );
};

export default KeepAssetsSafe;
