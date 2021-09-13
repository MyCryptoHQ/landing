import { Section, Flex, Heading, GetStartedButton } from '@components';
import { getRoute } from '@utils';

export const SafeAndEasy = () => (
  <Section type="landing" alignItems="center" pb="70px" id="safeandeasy">
    <Flex flexDirection={{ _: 'column', sm: 'row' }} textAlign="center">
      <Heading>Safe and easy. </Heading>
      <Heading ml={{ _: 0, sm: '10px' }}>Get started now</Heading>
    </Flex>
    <Flex
      flexDirection={{ _: 'column', md: 'row' }}
      justifyContent="center"
      alignItems="center"
      mt={{ _: '40px', md: '125px' }}
      width="100%"
    >
      <GetStartedButton
        icon="buy"
        title="Don't have ETH?"
        link="Buy Now"
        href={getRoute('BUY')}
      />
      <GetStartedButton
        icon="create"
        title="New to crypto?"
        link="Create a Wallet"
        href={getRoute('DOWNLOAD')}
      />
      <GetStartedButton
        icon="demo"
        title="Want to explore?"
        link="Try Demo"
        href={getRoute('ADD_ACCOUNT')}
      />
    </Flex>
  </Section>
);
