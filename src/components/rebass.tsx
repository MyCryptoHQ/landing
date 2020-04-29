import React from 'react';
import {
  Box,
  Text as RText,
  Heading as RHeading,
} from 'rebass/styled-components';

import { BaseProps } from '@/types';

type MediaProps = BaseProps & {
  type: 'desktop' | 'mobile';
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

const Text = ({ children, ...props }: BaseProps) => (
  <RText fontFamily="body" {...props}>
    {children}
  </RText>
);

const Heading = ({ children, ...props }: BaseProps) => (
  <RHeading fontFamily="body" {...props}>
    {children}
  </RHeading>
);

export { Button, Flex } from 'rebass/styled-components';
export { Box, Media, Text, Heading };
