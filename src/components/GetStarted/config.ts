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
    icon: 'existingWallet',
    title: 'Take me to MyCrypto',
    subTitle: 'The fast track to accessing your accounts.',
    url: getRoute('DASHBOARD'),
  },
  {
    icon: 'newWallet',
    title: "I don't have an Ethereum address",
    subTitle: 'Create a new account that is all yours.',
    url: getRoute('DOWNLOAD'),
  },
];
