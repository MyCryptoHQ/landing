import React from 'react';
import { LinkProps, Link as ExtLink } from 'rebass';

const Link = (props: LinkProps) => {
  return <ExtLink {...props} target="_blank" rel="noreferrer" />;
};

export default Link;
