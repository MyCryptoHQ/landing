import settingsIcon from '@assets/icn-settings.svg';
import dashboardIcon from '@assets/icn-dashboard.svg';

export const links = [
  {
    title: 'Dashboard',
    to: 'https://beta.mycrypto.com/dashboard',
    icon: { src: dashboardIcon, width: '16px', height: '12px' },
  },
  {
    title: 'Manage Assets',
    subItems: [
      {
        to: 'https://beta.mycrypto.com/send',
        title: 'Send Assets',
      },
      {
        to: 'https://beta.mycrypto.com/request',
        title: 'Request Assets',
      },
      {
        to: 'https://beta.mycrypto.com/swap',
        title: 'Swap Assets',
      },
      {
        to: 'https://beta.mycrypto.com/add-account/:walletId',
        title: 'Add Account',
      },
    ],
  },
  {
    title: 'Tools',
    subItems: [
      {
        to: 'https://beta.mycrypto.com/sign-message',
        title: 'Sign Message',
      },
      {
        to: 'https://beta.mycrypto.com/verify-message',
        title: 'Verify Message',
      },
      {
        to: 'https://beta.mycrypto.com/bradcast-transaction',
        title: 'Broadcast Transaction',
      },
      {
        to: 'https://beta.mycrypto.com/interact-with-contract',
        title: 'Interact with Contracts',
      },
      {
        to: 'https://beta.mycrypto.com/deploy-contracts',
        title: 'Deploy Contracts',
      },
      {
        to: 'https://beta.mycrypto.com/helpers',
        title: 'Helpers',
      },
      {
        to: 'https://beta.mycrypto.com/ens',
        title: 'ENS',
      },
    ],
  },
  {
    title: 'Settings',
    to: 'https://beta.mycrypto.com/settings',
    icon: { src: settingsIcon, width: '16px' },
  },
];
