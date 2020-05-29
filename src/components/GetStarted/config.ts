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
    title: 'I need a wallet',
    subTitle: 'Download app to create wallet',
    url: getRoute('DOWNLOAD'),
  },
  {
    icon: 'existingWallet',
    title: 'I have a wallet',
    subTitle: 'Connect wallet to MyCrypto',
    url: getRoute('ADD_ACCOUNT'),
  },
  {
    icon: 'signIn',
    title: "I've used MyCrypto",
    subTitle: 'Continue to Dashboard',
    url: getRoute('DASHBOARD'),
  },
];
