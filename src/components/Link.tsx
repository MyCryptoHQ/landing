import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import { LinkProps, Link as ExtLink } from 'rebass';

const Link = (props: LinkProps) => {
  if (props.to) {
    return <GatsbyLink {...props} />;
  }
  return <ExtLink {...props} target="_blank" rel="noreferrer" />;
};

export default Link;
