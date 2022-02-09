import { Link as GatsbyLink } from 'gatsby';
import { LinkProps, Link as ExtLink } from 'rebass/styled-components';
import styled from 'styled-components';
import {
  layout,
  space,
  fontSize,
  color,
  flex,
  order,
  alignSelf,
} from 'styled-system';

const SGatsbyLink = styled(GatsbyLink)<LinkProps>`
  ${space}
  ${layout}
  ${fontSize}
  ${color}
  ${flex}
  ${order}
  ${alignSelf}
`;

export const Link = ({
  href,
  internal,
  blank = true,
  ...props
}: LinkProps & { internal?: boolean; blank?: boolean }) => {
  if (internal && href) {
    return (
      <SGatsbyLink to={href} style={{ textDecoration: 'none' }} {...props}>
        {props.children}
      </SGatsbyLink>
    );
  }
  return (
    <ExtLink
      {...props}
      href={href}
      target={blank ? '_blank' : undefined}
      rel="noreferrer"
    />
  );
};
