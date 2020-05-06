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
  radii: '3px',
  shadows: {
    default: `
      0 0 0 1px rgba(0, 0, 0, 0.03),
      0 1px 0 0 rgba(0, 0, 0, 0.05),
      0 1px 3px 0 rgba(0, 0, 0, 0.1)
    `,
  },
  fonts: {
    body: 'Lato, sans-serif',
    mono: 'Roboto Mono, Menlo, Monaco, Consolas, Courier New, monospace',
  },
  colors: {
    /**
     * Default color keys
     */
    text: '#1c1c1c',
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

  variants: {},
};
