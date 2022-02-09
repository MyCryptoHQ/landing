import { Section, Carousel } from '@components';
import { KeepItSafeElements } from '@config';

export const KeepItSafe = () => (
  <Section type="landing" bg="background_grey" py="70px">
    <Carousel
      elements={KeepItSafeElements}
      inverted={true}
      title="Keep it Safe"
    />
  </Section>
);
