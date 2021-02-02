import { IconName } from '@components';

export interface ITeamMember {
  picture: string;
  name: string;
  title: string;
  socials?: {
    type: IconName;
    url: string;
  }[];
}
