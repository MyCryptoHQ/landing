import { Section, Carousel } from '@components';
import { CarouselElement } from '@types';

const elements: CarouselElement[] = [
  {
    title: 'Screen Lock',
    text: 'Lock your account after a set amount of time to prevent unauthorized access when you’re away from your screen.',
    icon: 'screen-lock',
  },
  {
    title: 'Protected Transaction',
    text: 'Check your transaction recipient against 50M+ labeled Ethereum wallets, thanks to Nansen, to be sure you’re sending to the right place.',
    icon: 'protected-transaction',
  },
  {
    title: 'Desktop App',
    text: 'Get away from the browser and download the MyCrypto Desktop App for an extra layer of security.',
    icon: 'desktop-app',
  },
];

export const KeepItSafe = () => (
  <Section type="landing" bg="background_grey" py="70px">
    <Carousel elements={elements} inverted={true} title="Keep it Safe" />
  </Section>
);
