import { Section, Icon } from '@components';

export const Testimonial = ({ second = false }: { second?: boolean }) => (
  <Section
    type="landing"
    py="150px"
    alignItems="center"
    justifyContent="center"
    px="15px"
  >
    <Icon
      name={second ? 'twitter-testimonial-two' : 'twitter-testimonial'}
      maxWidth={{ _: '100%', md: '1000px' }}
      display={{ _: 'none', sm: 'block' }}
    />
    <Icon
      name={
        second ? 'twitter-testimonial-mobile-two' : 'twitter-testimonial-mobile'
      }
      maxWidth={{ _: '100%', md: '1000px' }}
      display={{ _: 'block', sm: 'none' }}
    />
  </Section>
);
