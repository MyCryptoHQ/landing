import React from 'react';
import { Box, Flex, FlexProps, BoxProps } from 'rebass/styled-components';

type SectionProps = {
  type?: 'landing';
  relative?: boolean;
  bg?: string;
  children: React.ReactNode;
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
        width={{ _: '100%', md: '80%', lg: '75%' }}
        maxWidth="1920px"
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
      <Box width={'100%'} maxWidth="1920px">
        {children}
      </Box>
    </Flex>
  );
};

export default Section;
