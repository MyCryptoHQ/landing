import { Section, Heading, Flex, ArticleLink } from '@components';
import { ARTICLES } from '@config';

export const GetCaughtUp = () => (
  <Section type="landing" bg="background_grey" py="80px" alignItems="center">
    <Heading>Get caught up on all things crypto</Heading>
    <Heading variant="heading.secondary" mt="25px" mb="60px" textAlign="center">
      We’re here to help. Peruse our curated collection of resources
      <br /> to be safer, smarter, and more confident.
    </Heading>
    <Flex flexDirection="row" flexWrap="wrap" justifyContent="center">
      {ARTICLES.map((article) => (
        <ArticleLink {...article} />
      ))}
    </Flex>
  </Section>
);
