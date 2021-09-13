import { ReactNode } from 'react';
import { Box, Flex, FlexProps, BoxProps } from 'rebass/styled-components';

type SectionProps = {
  type?: 'landing';
  relative?: boolean;
  bg?: string;
  children: ReactNode;
};

const Section = ({
  type,
  relative,
  flexDirection = 'column',
  bg,
  children,
  ...props
}: SectionProps & BoxProps & FlexProps) => {
  return type === 'landing' ? (
    <Box bg={bg}>
      <Box
        width={{ _: '100%', md: '95%', lg: '75%' }}
        maxWidth="1440px"
        margin="0 auto"
        sx={{ position: relative ? 'relative' : '' }}
      >
        <Flex flexDirection={flexDirection} {...props}>
          {children}
        </Flex>
      </Box>
    </Box>
  ) : (
    <Flex justifyContent="center" bg={bg} width={'100%'} {...props}>
      <Box width={'100%'} maxWidth={props.width || '1920px'}>
        {children}
      </Box>
    </Flex>
  );
};

export default Section;
