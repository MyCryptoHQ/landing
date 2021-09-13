import { Section, Heading, Flex, ArticleLink } from '@components';
import { Article } from '@types';

const ARTICLES: Article[] = [
  {
    icon: 'announcement',
    title: 'A Gentle Introduction to Bloackchain Technology',
    text: 'Learn about the magic behind the entire industry.',
    link: 'https://bitsonblocks.net/2015/09/09/gentle-introduction-blockchain-technology/',
  },
  {
    icon: 'alert',
    title: 'Stay Aware of the Latest Scams',
    text: 'Train your crypto radar and learn what to avoid.',
    link: 'https://cryptoscamdb.org/',
  },
  {
    icon: 'star',
    title: 'Ethereum 101',
    text: 'Why Ethereum? Here’s why.',
    link: 'https://kauri.io/ethereum-101/5bb65f0f4f34080001731dc2/c',
  },

  {
    icon: 'lock',
    title: 'Protecting Yourself and Your Funds',
    text: 'Learn the best methods of protection.',
    link: 'https://support.mycrypto.com/staying-safe/protecting-yourself-and-your-funds',
  },
  {
    icon: 'question',
    title: 'What is Decentralized Finance (DeFi)?',
    text: 'Explore the next revolution of finance.',
    link: 'https://defipulse.com/blog/what-is-defi/',
  },
  {
    icon: 'notification',
    title: 'Community Members Worth Following',
    text: 'These lists are full of gold.',
    link: 'https://twitter.com/mycrypto/lists',
  },
];

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
