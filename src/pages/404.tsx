import { Link } from 'gatsby';

import { SEO, Flex, Icon, Heading, Text, Button } from '@components';

const NotFoundPage = () => (
  <>
    <SEO title="Page Not Found" />
    <Flex
      justifyContent="center"
      alignItems="center"
      backgroundColor="rgb(246, 248, 250)"
    >
      <Flex
        variant="card"
        flexDirection="column"
        alignItems="center"
        padding="25px"
        maxWidth="1245px"
        width="100%"
        margin={{ _: '60px 15px', lg: '150px 0' }}
      >
        <Icon name="sadWallet" width="300px" />
        <Heading variant="subHeading" color="accent" mt="20px">
          Page Not Found
        </Heading>
        <Text variant="largeBase" textAlign="center" mt="20px" mb="30px">
          Looks like you got lost somewhere along the way.
          <br />
          Don't worry, the wizard can help you get back!
        </Text>
        <Link to="/">
          <Button width="230px" height="45px">
            Go Home
          </Button>
        </Link>
      </Flex>
    </Flex>
  </>
);

export default NotFoundPage;
