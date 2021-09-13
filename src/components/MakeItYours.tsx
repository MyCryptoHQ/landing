import { Section, Carousel } from '@components';
import { CarouselElement } from '@types';

const elements: CarouselElement[] = [
  {
    title: 'Swap',
    text: 'Trade hundreds of tokens on Ethereum, Polygon, and Binance Smart Chain without ever leaving MyCrypto.',
    icon: 'decentralized-swap',
  },
  {
    title: 'Portfolio View',
    text: 'Aggregate all of your balances into one comprehensive portfolio view and balance breakdown.',
    icon: 'portfolio-view',
  },
  {
    title: 'MyCrypto Membership',
    text: 'Become a member to gain access to extra features, expanded functionality, and visual upgrades. ',
    icon: 'membership',
  },
];

export const MakeItYours = () => (
  <Section type="landing" py="70px" bg="background_grey">
    <Carousel elements={elements} title="Make it yours" />
  </Section>
);
