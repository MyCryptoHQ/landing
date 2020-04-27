import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import 'normalize.css';

const theme = {
  colors: {
    /**
     * Default color keys
     */
    text: '#1c1c1c',
    // background: '',
    primary: '#007896',
    // secondary: '',
    // accent: '',
    // hightlight: '',
    // muted: '',Ac
    /**
     * Custom colors
     */
    white: '#fff',
  },
  buttons: {
    primary: {
      backgroundColor: 'primary',
      color: 'white',
    },
  },

  variants: {},
};

const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100vh;
    max-width: 100%;
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
