import React from 'react';
import { Link } from 'gatsby';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import 'normalize.css';

import { Layout, Image, SEO } from '@/components';

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

const HomePage = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Layout>
      <SEO title="Home" />
      <h1>Hi people welcome to the live</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  </ThemeProvider>
);

export default HomePage;
