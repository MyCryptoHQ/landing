/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component.
 * Since we're generating static pages, we can't use react-router.
 * so instead of injecting global styles in our root element we wrap each page
 * inside this common component.
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import 'normalize.css';

import Header from './header';
import Footer from './footer';

type Props = {
  children: React.ReactNode;
};

const theme = {
  // bgColor: '',
  // fontFamily: '',
  // color: '',
};

const GlobalStyle = createGlobalStyle`
    html, body {
      height: 100vh;
      max-width: 100%;
    }
`;

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
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header siteTitle={site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <main>{children}</main>
        <Footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </Footer>
      </div>
    </ThemeProvider>
  );
};

export default Layout;
