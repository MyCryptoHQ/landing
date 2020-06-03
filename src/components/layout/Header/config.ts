import { getRoute } from '@utils';

import settingsIcon from '@assets/icn-settings.svg';
import dashboardIcon from '@assets/icn-dashboard.svg';

export const links = [
  {
    title: 'Dashboard',
    to: getRoute('DASHBOARD'),
    icon: { src: dashboardIcon, width: '16px', height: '12px' },
  },
  {
    title: 'Manage Assets',
    subItems: [
      {
        to: getRoute('SEND'),
        title: 'Send Assets',
      },
      {
        to: getRoute('REQUEST'),
        title: 'Request Assets',
      },
      {
        to: getRoute('SWAP'),
        title: 'Swap Assets',
      },
      {
        to: getRoute('ADD_ACCOUNT'),
        title: 'Add Account',
      },
    ],
  },
  {
    title: 'Tools',
    subItems: [
      {
        to: getRoute('SIGN_MESSAGE'),
        title: 'Sign Message',
      },
      {
        to: getRoute('VERIFY_MESSAGE'),
        title: 'Verify Message',
      },
      {
        to: getRoute('BROADCAST_TRANSACTION'),
        title: 'Broadcast Transaction',
      },
      {
        to: getRoute('INTERACT_WITH_CONTRACT'),
        title: 'Interact with Contracts',
      },
      {
        to: getRoute('DEPLOY_CONTRACT'),
        title: 'Deploy Contracts',
      },
      {
        to: getRoute('HELPERS'),
        title: 'Helpers',
      },
      {
        to: getRoute('ENS'),
        title: 'ENS',
      },
    ],
  },
  {
    title: 'Settings',
    to: getRoute('SETTINGS'),
    icon: { src: settingsIcon, width: '16px' },
  },
];
