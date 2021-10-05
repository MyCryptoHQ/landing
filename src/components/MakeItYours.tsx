import { Section, Carousel } from '@components';
import { MakeItYoursElements } from '@config';

export const MakeItYours = () => (
  <Section type="landing" py="70px" bg="background_grey">
    <Carousel elements={MakeItYoursElements} title="Make it yours" />
  </Section>
);
