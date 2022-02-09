import { Action } from '@types';
import { getRoute } from '@utils';

export const ACTION_CARDS: Action[] = [
  {
    icon: 'create-wallet',
    title: 'Taking your first steps?',
    text: 'You’ve come to the right place. Create a wallet and start your crypto journey now!',
    button: 'Create Wallet',
    link: getRoute('DOWNLOAD'),
  },
  {
    icon: 'connect-wallet',
    title: 'Already have ETH?',
    text: 'You know why you’re here! Connect your wallet(s) now.',
    button: 'Connect Wallet',
    link: getRoute('ADD_ACCOUNT'),
  },
];
