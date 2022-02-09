import { Section, Carousel, Text, Link } from '@components';
import { JOIN_TELEGRAM, StayUpToDateElements, URLS } from '@config';
import { CarouselElement } from '@types';

export const StayUpToDate = () => (
  <Section type="landing" py="70px">
    <Carousel
      elements={StayUpToDateElements}
      inverted={true}
      title="Stay up to date on the latest"
    />
  </Section>
);
