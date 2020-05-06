import { IconName } from '@components';

export interface TWalletCard {
  name: string;
  icon: IconName;
  path: string;
}

export const WALLET_CARDS: TWalletCard[] = [
  {
    name: 'Metamask',
    icon: 'metamask',
    path: `add-account/web3`,
  },
  {
    name: 'Ledger',
    icon: 'ledger',
    path: `add-account/ledger_nano_s`,
  },
  {
    name: 'Trezor',
    icon: 'trezor',
    path: `add-account/trezor`,
  },
  {
    name: 'WalletConnect',
    icon: 'walletconnect',
    path: `add-account/walletconnect`,
  },
  {
    name: 'Frame',
    icon: 'frame',
    path: `add-account/web3`,
  },
  {
    name: 'Trust',
    icon: 'trust',
    path: `add-account/web3`,
  },
];
