// Migrate content from `about.mycrypto.com`
const TEAM_MEMBERS = [
  {
    profileUrl: 'taylor.jpg',
    name: 'Taylor',
    title: 'Chief Executive Officer',
    socials: [
      {
        type: 'linkedin',
        url: 'https://www.linkedin.com/in/tayvano/',
      },
      {
        type: 'github',
        url: 'https://github.com/tayvano',
      },
      {
        type: 'twitter',
        url: 'https://twitter.com/tayvano_',
      },
    ],
  },
  {
    profileUrl: 'jordan.jpg',
    name: 'Jordan',
    title: 'Chief Marketing Officer',
    socials: [
      {
        type: 'linkedin',
        url: 'https://www.linkedin.com/in/jordanspence/',
      },
      {
        type: 'twitter',
        url: 'https://twitter.com/spencecoin',
      },
    ],
  },
  {
    profileUrl: 'luker.jpg',
    name: 'Luker',
    title: 'Project Manager',
    socials: [
      {
        type: 'linkedin',
        url: 'https://www.linkedin.com/in/jen-luker-243411156',
      },
      {
        type: 'twitter',
        url: 'https://twitter.com/LuckyLuker2',
      },
    ],
  },
  {
    profileUrl: 'michael.jpg',
    name: 'Michael',
    title: 'Developer',
    socials: [
      {
        type: 'linkedin',
        url: 'https://www.linkedin.com/in/michael--hahn/',
      },
      {
        type: 'github',
        url: 'https://github.com/blurpesec',
      },
      {
        type: 'twitter',
        url: 'https://twitter.com/blurpesec',
      },
    ],
  },
  {
    profileUrl: 'emmanuel.jpg',
    name: 'Emmanuel',
    title: 'Developer',
    socials: [
      {
        type: 'github',
        url: 'https://github.com/vilsbole',
      },
      {
        type: 'twitter',
        url: 'https://twitter.com/vilsbole',
      },
    ],
  },
  {
    profileUrl: 'luit.jpg',
    name: 'Luit',
    title: 'Developer',
    socials: [
      {
        type: 'linkedin',
        url: 'https://www.linkedin.com/in/luit',
      },
      {
        type: 'github',
        url: 'https://github.com/MrLuit',
      },
      {
        type: 'twitter',
        url: 'https://twitter.com/Luit_H',
      },
    ],
  },
  {
    profileUrl: 'frederik.jpg',
    name: 'Frederik',
    title: 'Developer',
    socials: [],
  },
  {
    profileUrl: 'guroux.jpg',
    name: 'Guillaume',
    title: 'Developer',
    socials: [
      {
        type: 'linkedin',
        url: 'https://www.linkedin.com/in/guillaumerx/',
      },
      {
        type: 'github',
        url: 'https://github.com/GuillaumeRx',
      },
      {
        type: 'twitter',
        url: 'https://twitter.com/Guiiiiiiillaume',
      },
    ],
  },
  {
    profileUrl: 'mia.jpg',
    name: 'Mia',
    title: 'Cloud / DevOps Engineer',
    socials: [
      {
        type: 'linkedin',
        url: 'https://linkedin.com/in/mia-alexander',
      },
    ],
  },
  {
    profileUrl: 'harry.jpg',
    name: 'Harry',
    title: 'Director of Security',
    socials: [
      {
        type: 'github',
        url: 'https://github.com/409H/',
      },
      {
        type: 'twitter',
        url: 'https://twitter.com/sniko_',
      },
    ],
  },
  {
    profileUrl: 'wietze.jpg',
    name: 'Wietze',
    title: 'Education &amp; Support / Analytics',
    socials: [
      {
        type: 'linkedin',
        url: 'https://www.linkedin.com/in/wietzebronkema/',
      },
      {
        type: 'github',
        url: 'https://github.com/wtzb',
      },
      {
        type: 'twitter',
        url: 'https://twitter.com/wtzb_',
      },
    ],
  },
  {
    profileUrl: 'maarten.jpg',
    name: 'Maarten',
    title: 'Education &amp; Support / Analytics',
    socials: [
      {
        type: 'github',
        url: 'https://github.com/Mrtenz',
      },
      {
        type: 'twitter',
        url: 'https://twitter.com/Mrten_',
      },
    ],
  },
  {
    profileUrl: 'jai.jpg',
    name: 'Jai',
    title: 'Strategy / Mobile',
    socials: [],
  },
  {
    profileUrl: 'jack.jpg',
    name: 'Jack',
    title: 'Director of Business Development / Ambo Mobile and Web Products',
    socials: [],
  },
  {
    profileUrl: 'avani.jpg',
    name: 'Avani',
    title: 'UX & Design',
    socials: [
      {
        type: 'twitter',
        url: 'https://twitter.com/avanimiriyala',
      },
    ],
  },
  {
    profileUrl: 'petra.jpg',
    name: 'Petra',
    title: 'UX & Design',
    socials: [],
  },
  {
    profileUrl: 'ryon.jpg',
    name: 'Ryon',
    title: 'General Counsel',
    socials: [
      {
        type: 'linkedin',
        url: 'https://www.linkedin.com/in/ryonnixon/',
      },
      {
        type: 'twitter',
        url: 'https://twitter.com/ryonnixon',
      },
    ],
  },
  {
    profileUrl: 'jason.jpg',
    name: 'Jason',
    title: 'Compliance',
    socials: [
      {
        type: 'linkedin',
        url: 'https://linkedin.com/in/jasoncivalleri',
      },
      {
        type: 'twitter',
        url: 'https://twitter.com/jasonthehealer',
      },
    ],
  },
  {
    profileUrl: 'george.jpg',
    name: 'George',
    title: 'Operations',
    socials: [
      {
        type: 'linkedin',
        url: 'https://linkedin.com/in/george-m-balolong-2a166913',
      },
      {
        type: 'github',
        url: 'https://github.com/Balozar',
      },
      {
        type: 'twitter',
        url: 'https://twitter.com/mycryptomeister',
      },
    ],
  },
];

export default TEAM_MEMBERS;
