import React from 'react';
import { shadow, border } from 'styled-system';
import styled from 'styled-components';

import {
  Box,
  Card as RCard,
  CardProps,
  Text as RText,
  TextProps,
  Heading as RHeading,
  HeadingProps,
  Image as RImage,
  ImageProps,
  Button as RButton,
  ButtonProps,
} from 'rebass/styled-components';

import { BaseProps } from '@types';

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

const Text = ({ children, ...props }: BaseProps & TextProps) => (
  <RText fontFamily="body" color="text" {...props}>
    {children}
  </RText>
);

const Heading = ({ children, ...props }: BaseProps & HeadingProps) => (
  <RHeading fontFamily="body" {...props}>
    {children}
  </RHeading>
);

const Button = ({ children, ...props }: BaseProps & ButtonProps) => (
  <RButton {...props}>
    <Text>{children}</Text>
  </RButton>
);

const SCard = styled(RCard)`
  ${border}
  ${shadow}
`;
const Card = ({ children, ...props }: BaseProps & CardProps) => (
  <SCard {...props}>{children}</SCard>
);

const Image = (props: ImageProps) => <RImage {...props} />;

export { Flex } from 'rebass/styled-components';
export { Box, Media, Text, Heading, Button, Card, Image };
