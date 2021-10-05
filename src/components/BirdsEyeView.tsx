import { Section, Carousel } from '@components';
import { BirdsEyeViewElements } from '@config';

export const BirdsEyeView = () => (
  <Section type="landing" py="70px">
    <Carousel elements={BirdsEyeViewElements} title="Get the bird's eye view" />
  </Section>
);
