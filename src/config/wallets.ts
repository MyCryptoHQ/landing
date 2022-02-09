import metamask from '@assets/wallets/metamask.svg';
import ledger from '@assets/wallets/ledger.svg';
import trezor from '@assets/wallets/trezor.svg';
import {
  IWallet,
  WALLET_CONNECTIVITY,
  WALLET_TAGS,
  WALLET_TYPES,
} from '@types';

export const WALLETS: IWallet[] = [
  {
    name: 'MetaMask',
    desc: 'Metamask is a thing.',
    type: WALLET_TYPES.WALLET,
    connectivity: WALLET_CONNECTIVITY.WEB3,
    icon: metamask,
    tags: [WALLET_TAGS.WEB, WALLET_TAGS.MOBILE],
    urls: {
      website: 'metamask.io',
      support:
        'https://support.mycrypto.com/how-to/migrating/moving-from-mycrypto-to-metamask',
    },
    priority: 5,
    mostPopular: true,
  },
];
