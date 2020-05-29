import { IconName } from '@components';

export interface TIconWithText {
  icon: IconName;
  heading: string;
  text: string[];
}

export const ICONS_WITH_TEXT: TIconWithText[] = [
  {
    icon: 'bank',
    heading: 'With Banks',
    text: [
      'They control your account',
      'They own your info',
      'They add fees',
      'They tell you what you can do',
    ],
  },
  {
    icon: 'withMYC',
    heading: 'With MyCrypto',
    text: [
      'You control your account',
      'You own your info',
      'No fees are added',
      'You do whatever you want',
    ],
  },
];
