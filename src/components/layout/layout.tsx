/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component.
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { Flex } from '../';
// import Header from './header';
// import Footer from './footer';

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  const { site } = useStaticQuery(
    graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  );

  return (
    <>
      {/* <Header siteTitle={site.siteMetadata.title} /> */}
      <Flex sx={{}}>
        <main role="main">{children}</main>
      </Flex>
      {/* <Footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <Link href="https://www.gatsbyjs.org">
          <Text>Gatsby</Text>
        </Link>
      </Footer> */}
    </>
  );
};

export default Layout;
