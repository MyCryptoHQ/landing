import { IconName } from '@components';
import { URLS } from '@config';

export interface TWalletCard {
  name: string;
  icon: IconName;
  path: string;
}

export const WALLET_CARDS: TWalletCard[] = [
  {
    name: 'Metamask',
    icon: 'metamask',
    path: `${URLS.app}/add-account/web3`,
  },
  {
    name: 'Ledger',
    icon: 'ledger',
    path: `${URLS.app}/add-account/ledger_nano_s`,
  },
  {
    name: 'Trezor',
    icon: 'trezor',
    path: `${URLS.app}/add-account/trezor`,
  },
  {
    name: 'WalletConnect',
    icon: 'walletconnect',
    path: `${URLS.app}/add-account/walletconnect`,
  },
  {
    name: 'Frame',
    icon: 'frame',
    path: `${URLS.app}/add-account/web3`,
  },
  {
    name: 'Trust',
    icon: 'trust',
    path: `${URLS.app}/add-account/web3`,
  },
];
