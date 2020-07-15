import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import 'normalize.css';

import { theme } from './theme';

const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100vh;
    max-width: 100%;
    font-size: 16px;
    font-family: Lato, sans-serif;
  }
  main {
     width: 100%;
  }
  @media screen and (max-width: 600px){
    html, body {
    font-size: 13px;
    overflow: scroll;
    overflow-x: hidden;
  }
  }
`;

type ThemeProps = {
  children: React.ReactNode;
};

const Theme = ({ children }: ThemeProps) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {children}
  </ThemeProvider>
);

export default Theme;
export { theme } from './theme';
export * from './atoms';
