import { ActionCard, Section } from '@components';

const ACTION_CARDS = [
  {
    icon: 'create-wallet',
    title: 'Taking your first steps?',
    text: 'You’ve come to the right place. Create a wallet and start your crypto journey now!',
    button: 'Create Wallet',
    link: 'https://exemple.com',
  },
  {
    icon: 'connect-wallet',
    title: 'Already have ETH?',
    text: 'You know why you’re here! Connect your wallet(s) now.',
    button: 'Connect Wallet',
    link: 'https://exemple.com',
  },
];
export const BottomActions = () => (
  <Section
    type="landing"
    flexDirection={{ _: 'column', md: 'row' }}
    justifyContent="center"
    alignItems={{ _: 'center', md: 'flex-start' }}
    py="120px"
  >
    {ACTION_CARDS.map((card) => (
      <ActionCard {...card} />
    ))}
  </Section>
);
