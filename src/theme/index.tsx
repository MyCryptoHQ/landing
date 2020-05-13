import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import 'normalize.css';

import { theme } from './theme';

const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100vh;
    max-width: 100%;
    font-size: 18px;
  }
  main {
     width: 100%;
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
export * from './atoms';
