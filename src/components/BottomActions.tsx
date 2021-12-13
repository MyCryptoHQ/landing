import { ActionCard, Section } from '@components';
import { ACTION_CARDS } from '@config';

export const BottomActions = () => (
  <Section
    type="landing"
    flexDirection={{ _: 'column', md: 'row' }}
    justifyContent="center"
    alignItems={{ _: 'center', md: 'flex-start' }}
    py={{ _: '50px', sm: '120px' }}
  >
    {ACTION_CARDS.map((card) => (
      <ActionCard {...card} />
    ))}
  </Section>
);
