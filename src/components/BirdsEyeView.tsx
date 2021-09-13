import { Section, Carousel } from '@components';
import { CarouselElement } from '@types';

const elements: CarouselElement[] = [
  {
    title: 'Every Wallet ',
    text: 'MyCrypto allows you to create, import, and manage all the wallets you’ll ever need.',
    icon: 'every-wallet',
  },
  {
    title: 'Every Token',
    text: 'Got tokens? We’ll display them. MyCrypto supports over 1000 ERC20 tokens, with more being added each day. ',
    icon: 'every-token',
  },
  {
    title: 'Every Transaction ',
    text: 'Don’t miss a thing - you’ll get a comprehensive history of all of your transactions across all of your wallets.  ',
    icon: 'every-transaction',
  },
];

export const BirdsEyeView = () => (
  <Section type="landing" py="70px">
    <Carousel elements={elements} title="Get the bird's eye view" />
  </Section>
);
