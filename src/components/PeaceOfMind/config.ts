import { IconName } from '@components';

export interface TPeaceOfMind {
  icon: IconName;
  text: string;
}

export const PEACE_OF_MIND: TPeaceOfMind[] = [
  {
    icon: 'vault',
    text:
      "Get your information out of other people's hands and back into yours",
  },
  {
    icon: 'protect',
    text: 'Protect yourself from phishing attacks and malicious extensions',
  },
  {
    icon: 'vault',
    text: 'Open-source, fully audited, and fully verifiable.',
  },
];
