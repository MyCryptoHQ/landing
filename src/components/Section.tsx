import React from 'react';
import { Box, Flex, FlexProps, BoxProps } from 'rebass/styled-components';

type SectionProps = {
  type?: 'landing';
  relative?: boolean;
  flexDirection?: 'row' | 'column';
  bg?: string;
  children: React.ReactNode;
} & (BoxProps | FlexProps);

const Section = ({
  type,
  relative,
  flexDirection = 'column',
  bg,
  children,
  ...props
}: SectionProps) => {
  return type === 'landing' ? (
    <Box bg={bg}>
      <Box
        width={{ sm: '90%', md: '80%', lg: '75%' }}
        margin="0 auto"
        sx={{ position: relative ? 'relative' : '' }}
      >
        <Flex flexDirection={flexDirection} {...props}>
          {children}
        </Flex>
      </Box>
    </Box>
  ) : (
    <Box width={'100%'} bg={bg} {...props}>
      {children}
    </Box>
  );
};

export default Section;
