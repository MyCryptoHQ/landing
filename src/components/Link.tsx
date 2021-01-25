import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import { LinkProps, Link as ExtLink } from 'rebass';

const Link = ({ href, ...props }: LinkProps & { internal?: boolean }) => {
  if (props.internal && href) {
    return <GatsbyLink to={href}>{props.children}</GatsbyLink>;
  }
  return <ExtLink {...props} href={href} target="_blank" rel="noreferrer" />;
};

export default Link;
