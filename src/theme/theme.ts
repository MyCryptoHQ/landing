/**
 *  From https://styled-system.com/responsive-styles/
 * */
const breakpoints: string[] & {
  xs?: string;
  sm?: string;
  md?: string;
  lg?: string;
  xl?: string;
  xxl?: string;
} = ['512px', '850px', '1080px', '1280px', '1441px', '1920px'];
breakpoints.xs = breakpoints[0];
breakpoints.sm = breakpoints[1];
breakpoints.md = breakpoints[2];
breakpoints.lg = breakpoints[3];
breakpoints.xl = breakpoints[4];
breakpoints.xxl = breakpoints[5];

export const theme = {
  breakpoints,
  radii: {
    default: '3px',
  },
  shadows: {
    small: '0px 3px 6px 0px rgba(0, 0, 0, 0.07)',
    medium: '0 1px 0 0 rgba(0, 0, 0, 0.05)',
    large: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
    special:
      '0px 1px 1px rgba(232, 234, 237, 0.1), inset 0px 1px 3px rgba(232, 234, 237, 0.1)',
  },
  fonts: {
    body: 'Lato, sans-serif',
    mono: 'Roboto Mono, Menlo, Monaco, Consolas, Courier New, monospace',
  },
  fontSizes: [
    '3.1rem',
    '2.2rem',
    '1.8rem',
    '1.5rem',
    '1.25rem',
    '1rem',
    '1.12rem',
  ],
  lineHeights: ['3.75rem', '2.8rem', '2.6rem', '2rem', '1.5rem'],
  colors: {
    /**
     * Default color keys
     */
    text: '#424242',
    link: '#1EB8E7',
    textInvert: '#fff',
    greyed: '#BBC2CB',
    // background: '',
    primary: '#007896',
    // secondary: '',
    accent: '#163151',
    // hightlight: '',
    muted: '#f7f7f7',
    /**
     * Custom colors
     */
    white: '#fff',
    grey: '#E9E9E9',
    banner: '#55B6E2',
  },
  buttons: {
    primary: {
      backgroundColor: 'primary',
      color: 'white',
      borderRadius: '2px',
      fontFamily: 'body',
      height: '60px',
      fontSize: 6,
      cursor: 'pointer',
    },
    donation: {
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      boxShadow: 'special',
      borderRadius: '6px',
      padding: '10px',
      margin: '10px',
      marginLeft: '0px',
      cursor: 'pointer',
    },
    sub: {
      height: '44px',
      padding: '10px',
      borderRadius: '0 3px 3px 0',
      border: '3px solid #007896',
      cursor: 'pointer',
    },
  },
  text: {
    largeHeading: {
      fontSize: 0,
      lineHeight: 0,
      fontWeight: 800,
    },
    heading: {
      fontSize: 1,
      lineHeight: 2,
    },
    subHeading: {
      fontSize: 2,
      lineHeight: 1,
    },
    title: {
      fontSize: 3,
      lineHeight: 3,
    },
    largeBase: {
      fontSize: 4,
      lineHeight: 4,
    },
    base: {
      fontSize: 5,
      lineHeight: 4,
    },
    link: {
      fontSize: 5,
      lineHeight: 4,
      textDecoration: 'none',
      fontFamily: 'body',
    },
    footerSmall: {
      fontSize: '0.625rem',
      lineHeight: '0.75rem',
    },
    footerLink: {
      fontSize: '0.875em',
      lineHeight: '1.18em',
      fontWeight: 300,
      textDecoration: 'none',
      fontFamily: 'body',
    },
  },
  variants: {
    card: {
      bg: 'white',
      boxShadow: 'small',
      borderRadius: 'default',
      border: 'solid 1px rgb(247, 247, 247)',
      cursor: 'pointer',
    },
  },
};
