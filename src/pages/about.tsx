import React from 'react';
import { Text, Flex, Image, Link, Icon } from '@components';
import { IMember } from '@types';
import TEAM_MEMBERS from '@assets/team-profiles/team';

const Member = ({ name, profileUrl, title, socials }: IMember) => (
  <Flex
    flexDirection="column"
    alignItems="center"
    width={{ _: '100%', xs: '50%', sm: '33%', md: '25%' }}
    my="25px"
    flex={{ _: '0 0 100%', xs: '0 0 50%', sm: '0 0 33%', md: '0 0 25%' }}
  >
    <Image
      alt={name}
      src={profileUrl}
      width="220px"
      height="220px"
      mb="20px"
      sx={{ borderRadius: '100%', objectFit: 'cover' }}
    />
    <Text variant="largeBase" fontWeight="700" mb="5px">
      {name}
    </Text>
    <Text textAlign="center" mb="5px" width="250px">
      {title}
    </Text>
    <Flex flexDirection="row" justifyContent="center">
      {socials &&
        socials.map(({ url, type }, i) => (
          <Link href={url} key={i}>
            <Icon name={type} width="28px" />
          </Link>
        ))}
    </Flex>
  </Flex>
);

const About = () => (
  <Flex
    mx={{ _: '10px', xs: '20px', sm: '40px' }}
    mt="40px"
    flexDirection="column"
    alignItems="center"
  >
    <Text variant="base" mb="50px">
      MyCrypto is an open-source, client-side tool for interacting with the
      blockchain. Developed by and for the community beginning in 2015, we’re
      focused on building awesome products that put the power in people’s hands.
    </Text>
    <Flex flexDirection="row" flexWrap="wrap" maxWidth="1200px" mb="20px">
      {TEAM_MEMBERS.map((member, i) => (
        <Member key={i} {...member} />
      ))}
    </Flex>
  </Flex>
);

export default About;
