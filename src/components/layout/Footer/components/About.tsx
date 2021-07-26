import { Flex, Text, Icon, Box } from '@components';
import { Socials, SOCIAL_LINKS } from '.';

const About = () => {
  return (
    <Flex
      height="100%"
      width={{ _: '100%', lg: '20%' }}
      flexDirection="column"
      justifyContent="space-evenly"
      alignItems={{ _: 'center', lg: 'flex-start' }}
      order={0}
    >
      <Icon name="MYCLogo" height="35px" />
      <Text
        variant="footerSmall"
        color="white"
        mt="20px"
        width={{ _: '80%', lg: 'auto' }}
        textAlign={{ _: 'center', lg: 'left' }}
      >
        MyCrypto is an open-source tool that allows you to manage your Ethereum
        accounts privately and securely. Developed by and for the community
        since 2015, we’re focused on building awesome products that put the
        power in people’s hands.
      </Text>
      <Box display={{ _: 'none', lg: 'block' }}>
        <Socials socials={SOCIAL_LINKS} />
        <Text
          variant="footerSmall"
          color="white"
          mt="20px"
        >{`© ${new Date().getFullYear()} MyCrypto, Inc.`}</Text>
      </Box>
    </Flex>
  );
};

export default About;
