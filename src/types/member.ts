import { IconName } from '@components';

export interface IMember {
  profileUrl: string;
  name: string;
  title: string;
  socials?: {
    type: IconName;
    url: string;
  }[];
}
