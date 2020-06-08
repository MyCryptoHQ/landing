import React from 'react';
import { Section, Heading, Text, Flex, Icon, Button } from '@components';
import { PEACE_OF_MIND, TPeaceOfMind } from './config';
import { getRoute } from '@utils';

const PeaceOfMindElement = ({ icon, text }: TPeaceOfMind) => {
  return (
    <Flex
      width={{ _: '100%', lg: 1 / 3 }}
      flexDirection="column"
      alignItems="center"
      mt={{ _: '30px', lg: 0 }}
    >
      <Icon name={icon} />
      <Text variant="subHeading" textAlign="center" maxWidth="350px">
        {text}
      </Text>
    </Flex>
  );
};

const PeaceOfMind = () => {
  return (
    <Section
      type="landing"
      px={{ _: '5%', lg: 0 }}
      py={{ _: '30px', lg: '100px' }}
      alignItems="center"
      color="text"
    >
      <Heading textAlign="center">Finally Enjoy Peace of Mind</Heading>
      <Text textAlign="center" variant="subHeading">
        MyCrypto puts your safety & security first.
      </Text>
      <Flex
        width="100%"
        flexDirection={{ _: 'column', lg: 'row' }}
        justifyContent="space-between"
        alignItems={{ _: 'center', lg: 'flex-start' }}
        my={{ _: '20px', lg: '60px' }}
        order={{ _: 2, lg: 1 }}
      >
        {PEACE_OF_MIND.map((el, index) => (
          <PeaceOfMindElement {...el} key={index} />
        ))}
      </Flex>
      <Flex
        width={{ _: '100%', lg: 2 / 3 }}
        flexDirection={{ _: 'column', lg: 'row' }}
        justifyContent="space-between"
        alignItems="center"
        order={{ _: 1, lg: 2 }}
      >
        <Button
          mt={{ _: '20px', lg: 0 }}
          width={{ _: '100%', sm: '50%', lg: '300px' }}
          variant="primary"
          onClick={() =>
            window.open(getRoute('DASHBOARD'), '_blank', 'noopener noreferrer')
          }
        >
          Get Started on Web
        </Button>
        <Button
          mt={{ _: '20px', lg: 0 }}
          width={{ _: '100%', sm: '50%', lg: '300px' }}
          variant="primary"
          onClick={() =>
            window.open(getRoute('DOWNLOAD'), '_blank', 'noopener noreferrer')
          }
        >
          Download the Desktop App
        </Button>
      </Flex>
    </Section>
  );
};

export default PeaceOfMind;
