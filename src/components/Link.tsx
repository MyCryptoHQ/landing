import { Link as GatsbyLink } from 'gatsby';
import { LinkProps, Link as ExtLink } from 'rebass';
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

const Link = ({
  href,
  internal,
  ...props
}: LinkProps & { internal?: boolean }) => {
  if (internal && href) {
    return (
      <SGatsbyLink to={href} style={{ textDecoration: 'none' }} {...props}>
        {props.children}
      </SGatsbyLink>
    );
  }
  return <ExtLink {...props} href={href} target="_blank" rel="noreferrer" />;
};

export default Link;
