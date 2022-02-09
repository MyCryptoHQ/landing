import { IconName } from '@components';
import { getRoute } from '@utils';

export const MENU_LINKS: { link: string; text: string; icon: IconName }[] = [
  {
    link: getRoute('ADD_ACCOUNT'),
    text: 'Launch Demo',
    icon: 'nav-launch-demo',
  },
  {
    link: getRoute('BUY'),
    text: 'Buy ETH',
    icon: 'nav-buy-eth',
  },
  {
    link: getRoute('DOWNLOAD'),
    text: 'Create Wallet',
    icon: 'nav-create-wallet',
  },
  {
    link: getRoute('ADD_ACCOUNT'),
    text: 'Connect Wallet',
    icon: 'nav-connect-wallet',
  },
];
