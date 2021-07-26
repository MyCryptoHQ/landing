import { Box } from '@components';

const Separator = ({ order }: { order: number }) => (
  <Box
    height={{ _: '2px', lg: '220px' }}
    width={{ _: '150px', lg: '2px' }}
    mx={{ _: 0, lg: '55px' }}
    my={{ _: '20px', lg: 0 }}
    backgroundColor="grey"
    opacity={0.2}
    order={order}
  />
);

export default Separator;
