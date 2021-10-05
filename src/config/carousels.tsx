import { Link, Text } from '@components';
import { JOIN_TELEGRAM, URLS } from '@config';
import { CarouselElement } from '@types';

export const BirdsEyeViewElements: CarouselElement[] = [
  {
    title: 'Every Wallet ',
    text: 'MyCrypto allows you to create, import, and manage all the wallets you’ll ever need.',
    icon: 'every-wallet',
  },
  {
    title: 'Every Token',
    text: 'Got tokens? We’ll display them. MyCrypto supports over 1000 ERC20 tokens, with more being added each day. ',
    icon: 'every-token',
  },
  {
    title: 'Every Transaction ',
    text: 'Don’t miss a thing - you’ll get a comprehensive history of all of your transactions across all of your wallets.  ',
    icon: 'every-transaction',
  },
];

export const KeepItSafeElements: CarouselElement[] = [
  {
    title: 'Screen Lock',
    text: 'Lock your account after a set amount of time to prevent unauthorized access when you’re away from your screen.',
    icon: 'screen-lock',
  },
  {
    title: 'Protected Transaction',
    text: 'Check your transaction recipient against 50M+ labeled Ethereum wallets, thanks to Nansen, to be sure you’re sending to the right place.',
    icon: 'protected-transaction',
  },
  {
    title: 'Desktop App',
    text: 'Get away from the browser and download the MyCrypto Desktop App for an extra layer of security.',
    icon: 'desktop-app',
  },
];

export const MakeItYoursElements: CarouselElement[] = [
  {
    title: 'Swap',
    text: 'Trade hundreds of tokens on Ethereum, Polygon, and Binance Smart Chain without ever leaving MyCrypto.',
    icon: 'decentralized-swap',
  },
  {
    title: 'Portfolio View',
    text: 'Aggregate all of your balances into one comprehensive portfolio view and balance breakdown.',
    icon: 'portfolio-view',
  },
  {
    title: 'MyCrypto Membership',
    text: 'Become a member to gain access to extra features, expanded functionality, and visual upgrades. ',
    icon: 'membership',
  },
];

export const StayUpToDateElements: CarouselElement[] = [
  {
    title: 'Knowledge Base',
    text: (
      <Text>
        Want to learn? Need help? Our Knowledge Base houses more than 150
        articles about MyCrypto and includes general knowledge about the
        cryptocurrency industry.{' '}
        <Link href={URLS.support}>Browse Articles Now</Link>
      </Text>
    ),
    icon: 'knowledge-base',
  },
  {
    title: 'Newsletter',
    text: (
      <Text>
        Get the latest news and feature releases from MyCrypto directly to your
        inbox. <Link>Subscribe Now</Link>
      </Text>
    ),
    icon: 'newsletter',
  },
  {
    title: 'Telegram',
    text: (
      <Text>
        Join our community of users on Telegram and chat directly with our team.{' '}
        <Link href={JOIN_TELEGRAM}>Join Now</Link>
      </Text>
    ),
    icon: 'illo-telegram',
  },
];
