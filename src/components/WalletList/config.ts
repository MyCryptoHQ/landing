import { IconName } from '@components';
import { getRoute } from '@utils';

export interface TWalletCard {
  name: string;
  icon: IconName;
  path: string;
  mobile?: {
    name: string;
    icon: IconName;
    path: string;
  };
}

export const WALLET_CARDS: TWalletCard[] = [
  {
    name: 'Metamask',
    icon: 'metamask',
    path: `${getRoute('ADD_ACCOUNT')}/web3`,
    mobile: {
      name: 'Trust',
      icon: 'trust',
      path: `${getRoute('ADD_ACCOUNT')}/web3`,
    },
  },
  {
    name: 'Ledger',
    icon: 'ledger',
    path: `${getRoute('ADD_ACCOUNT')}/ledger_nano_s_new`,
  },
  {
    name: 'Trezor',
    icon: 'trezor',
    path: `${getRoute('ADD_ACCOUNT')}/trezor_new`,
  },
  {
    name: 'WalletConnect',
    icon: 'walletconnect',
    path: `${getRoute('ADD_ACCOUNT')}/walletconnect`,
    mobile: {
      name: 'Metamask',
      icon: 'metamask',
      path: `${getRoute('ADD_ACCOUNT')}/web3`,
    },
  },
  {
    name: 'Frame',
    icon: 'frame',
    path: `${getRoute('ADD_ACCOUNT')}/web3`,
    mobile: {
      name: 'WalletConnect',
      icon: 'walletconnect',
      path: `${getRoute('ADD_ACCOUNT')}/walletconnect`,
    },
  },
];
