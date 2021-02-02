import { IMember } from '@types';

import avani from './avani.jpg';
import emmanuel from './emmanuel.jpg';
import frederik from './frederik.jpg';
import george from './george.jpg';
import guillaume from './guroux.jpg';
import harry from './harry.jpg';
import jack from './jack.jpg';
import jai from './jai.jpg';
import jason from './jason.jpg';
import luit from './luit.jpg';
import luker from './luker.jpg';
import maarten from './maarten.jpg';
import mia from './mia.jpg';
import michael from './michael.jpg';
import petra from './petra.jpg';
import ryon from './ryon.jpg';
import taylor from './taylor.jpg';
import wietze from './wietze.jpg';
import jordan from './jordan.jpg';

// Migrate content from `about.mycrypto.com`
const TEAM_MEMBERS: IMember[] = [
  {
    profileUrl: taylor,
    name: 'Taylor',
    title: 'Chief Executive Officer',
    socials: [
      {
        type: 'team-linkedin',
        url: 'https://www.linkedin.com/in/tayvano/',
      },
      {
        type: 'team-github',
        url: 'https://github.com/tayvano',
      },
      {
        type: 'team-twitter',
        url: 'https://twitter.com/tayvano_',
      },
    ],
  },
  {
    profileUrl: jordan,
    name: 'Jordan',
    title: 'Chief Marketing Officer',
    socials: [
      {
        type: 'team-linkedin',
        url: 'https://www.linkedin.com/in/jordanspence/',
      },
      {
        type: 'team-twitter',
        url: 'https://twitter.com/spencecoin',
      },
    ],
  },
  {
    profileUrl: luker,
    name: 'Luker',
    title: 'Project Manager',
    socials: [
      {
        type: 'team-linkedin',
        url: 'https://www.linkedin.com/in/jen-luker-243411156',
      },
      {
        type: 'team-twitter',
        url: 'https://twitter.com/LuckyLuker2',
      },
    ],
  },
  {
    profileUrl: michael,
    name: 'Michael',
    title: 'Developer',
    socials: [
      {
        type: 'team-linkedin',
        url: 'https://www.linkedin.com/in/michael--hahn/',
      },
      {
        type: 'team-github',
        url: 'https://github.com/blurpesec',
      },
      {
        type: 'team-twitter',
        url: 'https://twitter.com/blurpesec',
      },
    ],
  },
  {
    profileUrl: emmanuel,
    name: 'Emmanuel',
    title: 'Developer',
    socials: [
      {
        type: 'team-github',
        url: 'https://github.com/vilsbole',
      },
      {
        type: 'team-twitter',
        url: 'https://twitter.com/vilsbole',
      },
    ],
  },
  {
    profileUrl: luit,
    name: 'Luit',
    title: 'Developer',
    socials: [
      {
        type: 'team-linkedin',
        url: 'https://www.linkedin.com/in/luit',
      },
      {
        type: 'team-github',
        url: 'https://github.com/MrLuit',
      },
      {
        type: 'team-twitter',
        url: 'https://twitter.com/Luit_H',
      },
    ],
  },
  {
    profileUrl: frederik,
    name: 'Frederik',
    title: 'Developer',
  },
  {
    profileUrl: guillaume,
    name: 'Guillaume',
    title: 'Developer',
    socials: [
      {
        type: 'team-linkedin',
        url: 'https://www.linkedin.com/in/guillaumerx/',
      },
      {
        type: 'team-github',
        url: 'https://github.com/GuillaumeRx',
      },
      {
        type: 'team-twitter',
        url: 'https://twitter.com/Guiiiiiiillaume',
      },
    ],
  },
  {
    profileUrl: mia,
    name: 'Mia',
    title: 'Cloud / DevOps Engineer',
    socials: [
      {
        type: 'team-linkedin',
        url: 'https://linkedin.com/in/mia-alexander',
      },
    ],
  },
  {
    profileUrl: harry,
    name: 'Harry',
    title: 'Director of Security',
    socials: [
      {
        type: 'team-github',
        url: 'https://github.com/409H/',
      },
      {
        type: 'team-twitter',
        url: 'https://twitter.com/sniko_',
      },
    ],
  },
  {
    profileUrl: wietze,
    name: 'Wietze',
    title: 'Education & Support / Analytics',
    socials: [
      {
        type: 'team-linkedin',
        url: 'https://www.linkedin.com/in/wietzebronkema/',
      },
      {
        type: 'team-github',
        url: 'https://github.com/wtzb',
      },
      {
        type: 'team-twitter',
        url: 'https://twitter.com/wtzb_',
      },
    ],
  },
  {
    profileUrl: maarten,
    name: 'Maarten',
    title: 'Education & Support / Analytics',
    socials: [
      {
        type: 'team-github',
        url: 'https://github.com/Mrtenz',
      },
      {
        type: 'team-twitter',
        url: 'https://twitter.com/Mrten_',
      },
    ],
  },
  {
    profileUrl: jai,
    name: 'Jai',
    title: 'Strategy / Mobile',
  },
  {
    profileUrl: jack,
    name: 'Jack',
    title: 'Director of Business Development / Ambo Mobile and Web Products',
  },
  {
    profileUrl: avani,
    name: 'Avani',
    title: 'UX & Design',
    socials: [
      {
        type: 'team-twitter',
        url: 'https://twitter.com/avanimiriyala',
      },
    ],
  },
  {
    profileUrl: petra,
    name: 'Petra',
    title: 'UX & Design',
  },
  {
    profileUrl: ryon,
    name: 'Ryon',
    title: 'General Counsel',
    socials: [
      {
        type: 'team-linkedin',
        url: 'https://www.linkedin.com/in/ryonnixon/',
      },
      {
        type: 'team-twitter',
        url: 'https://twitter.com/ryonnixon',
      },
    ],
  },
  {
    profileUrl: jason,
    name: 'Jason',
    title: 'Compliance',
    socials: [
      {
        type: 'team-linkedin',
        url: 'https://linkedin.com/in/jasoncivalleri',
      },
      {
        type: 'team-twitter',
        url: 'https://twitter.com/jasonthehealer',
      },
    ],
  },
  {
    profileUrl: george,
    name: 'George',
    title: 'Operations',
    socials: [
      {
        type: 'team-linkedin',
        url: 'https://linkedin.com/in/george-m-balolong-2a166913',
      },
      {
        type: 'team-github',
        url: 'https://github.com/Balozar',
      },
      {
        type: 'team-twitter',
        url: 'https://twitter.com/mycryptomeister',
      },
    ],
  },
];

export default TEAM_MEMBERS;
