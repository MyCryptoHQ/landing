import { Section, Carousel, Text, Link } from '@components';
import { JOIN_TELEGRAM, URLS } from '@config';
import { CarouselElement } from '@types';

const elements: CarouselElement[] = [
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

export const StayUpToDate = () => (
  <Section type="landing" py="70px">
    <Carousel
      elements={elements}
      inverted={true}
      title="Stay up to date on the latest"
    />
  </Section>
);
