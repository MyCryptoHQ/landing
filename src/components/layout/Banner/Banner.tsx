import { Flex, Text, Link, Image } from '@components';
import { URLS } from '@config';
import IcnAnnouncement from '@assets/icn-announcement.svg';

export const Banner = () => (
  <Flex
    bg="banner"
    flexDirection="row"
    justifyContent="center"
    alignItems="center"
    py="10px"
    px={{ _: '20px', sm: '50px' }}
  >
    <Image src={IcnAnnouncement} mr="15px" />
    <Text color="white">
      Change can be hard but{' '}
      <Link
        color="white"
        sx={{ fontWeight: 700 }}
        href="https://medium.com/@MyCrypto/7020f919f792"
      >
        it’s really worth it
      </Link>
      . If you are a MyCrypto pro, update your bookmark to{' '}
      <Link color="white" sx={{ fontWeight: 700 }} href={URLS.app}>
        {URLS.app}
      </Link>{' '}
      and skip this page in the future. 💖
    </Text>
  </Flex>
);
