import React from 'react';
import { shadow, border, position, PositionProps } from 'styled-system';
import styled from 'styled-components';

import {
  Box as RBox,
  BoxProps,
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
      <Box display={{ _: 'block', lg: 'none' }} {...props}>
        {children}
      </Box>
    )}
    {type === 'desktop' && (
      <Box display={{ _: 'none', lg: 'block' }} {...props}>
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
  <RButton {...props}>{children}</RButton>
);

const SCard = styled(RCard)`
  ${border}
  ${shadow}
`;
const Card = ({ children, ...props }: BaseProps & CardProps) => (
  <SCard {...props}>{children}</SCard>
);

const SBox = styled(RBox)`
  ${position}
`;

const Box = ({ children, ...props }: BaseProps & PositionProps & BoxProps) => (
  <SBox {...props}>{children}</SBox>
);

const Image = (props: ImageProps) => <RImage {...props} />;

export { Flex } from 'rebass/styled-components';
export { Box, Media, Text, Heading, Button, Card, Image, ImageProps };
