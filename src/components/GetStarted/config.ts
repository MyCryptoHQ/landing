import { IconName } from '@components';
import { getRoute } from '@utils';

export interface TStartCta {
  icon: IconName;
  title: string;
  subTitle: string;
  url: string;
}

export const START_CTAS: TStartCta[] = [
  {
    icon: 'newWallet',
    title: "I've been here before",
    subTitle: 'Go directly to your dashboard.',
    url: getRoute('DASHBOARD'),
  },
  {
    icon: 'existingWallet',
    title: "I don't have an Ethereum address",
    subTitle: 'Create a new account that is yours and yours only.',
    url: getRoute('DOWNLOAD'),
  },
  {
    icon: 'signIn',
    title: 'I have an Ethereum address',
    subTitle:
      'Create a MyCrypto dashboard by connecting your existing Ethereum account(s).',
    url: getRoute('ADD_ACCOUNT'),
  },
];
