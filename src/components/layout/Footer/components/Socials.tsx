import React from 'react';
import { Flex, IconName, Link, Icon } from '@components';

interface TSocial {
  url: string;
  icon: IconName;
}

export const SOCIAL_LINKS: TSocial[] = [
  {
    url: 'https://twitter.com/mycrypto',
    icon: 'twitter',
  },
  {
    url: 'https://www.facebook.com/mycryptoHQ/',
    icon: 'facebook',
  },
  {
    url: 'https://medium.com/@mycrypto',
    icon: 'medium',
  },
  {
    url: 'https://www.linkedin.com/company/mycrypto',
    icon: 'linkedin',
  },
  {
    url: 'https://github.com/MyCryptoHQ',
    icon: 'github',
  },
  {
    url: 'https://www.reddit.com/r/mycrypto/',
    icon: 'reddit',
  },
  {
    url: 'https://discord.gg/VSaTXEA',
    icon: 'discord',
  },
  {
    url: 'https://t.me/mycryptohq',
    icon: 'telegram',
  },
];

const Socials = ({ socials }: { socials: TSocial[] }) => {
  return (
    <Flex flexDirection="row" my={{ _: '20px', lg: 0 }}>
      {socials.map((social, index) => (
        <Link href={social.url} key={index} mr="15px">
          <Icon name={social.icon} width="13px" color="white" />
        </Link>
      ))}
    </Flex>
  );
};

export default Socials;
