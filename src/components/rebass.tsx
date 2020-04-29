import React from 'react';
import { Box } from 'rebass/styled-components';
export { Heading, Text, Button, Flex } from 'rebass/styled-components';

type MediaProps = {
  type: 'desktop' | 'mobile';
  children: React.ReactNode;
};

const Media = ({ type, children, ...props }: MediaProps) => (
  <>
    {type === 'mobile' && (
      <Box display={{ xs: 'block', sm: 'none' }} {...props}>
        {children}
      </Box>
    )}
    {type === 'desktop' && (
      <Box display={{ xs: 'none', sm: 'block' }} {...props}>
        {children}
      </Box>
    )}
  </>
);

export { Box, Media };
