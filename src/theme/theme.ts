/**
 *  From https://styled-system.com/responsive-styles/
 * */
const breakpoints: string[] & {
  xs?: string;
  sm?: string;
  md?: string;
  lg?: string;
  xl?: string;
} = ['0', '600px', '960px', '1280px', '1920px'];
breakpoints.sm = breakpoints[0];
breakpoints.sm = breakpoints[1];
breakpoints.md = breakpoints[2];
breakpoints.lg = breakpoints[3];
breakpoints.xl = breakpoints[4];

export const theme = {
  breakpoints,
  radii: {
    default: '3px',
  },
  shadows: {
    small: '0px 3px 6px 0px rgba(0, 0, 0, 0.07)',
    medium: '0 1px 0 0 rgba(0, 0, 0, 0.05)',
    large: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
  },
  fonts: {
    body: 'Lato, sans-serif',
    mono: 'Roboto Mono, Menlo, Monaco, Consolas, Courier New, monospace',
  },
  fontSizes: ['3.1rem', '2.2rem', '1.8rem', '1.5rem', '1.25rem', '1rem'],
  lineHeights: ['3.75rem', '2.8rem', '2.6rem', '2rem', '1.5rem'],
  colors: {
    /**
     * Default color keys
     */
    text: '#424242',
    textInvert: '#fff',
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
  },
  buttons: {
    primary: {
      backgroundColor: 'primary',
      color: 'white',
    },
  },
  text: {
    largeHeading: {
      fontSize: 0,
      lineHeight: 0,
      color: 'text',
    },
    heading: {
      fontSize: 1,
      lineHeight: 2,
      color: 'text',
      fontWeight: 500,
    },
    subHeading: {
      fontSize: 2,
      lineHeight: 1,
      color: 'text',
    },
    title: {
      fontSize: 3,
      lineHeight: 3,
      color: 'text',
    },
    largeBase: {
      fontSize: 4,
      lineHeight: 4,
      color: 'text',
    },
    base: {
      fontSize: 5,
      lineHeight: 4,
      color: 'text',
      textDecoration: 'none',
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
