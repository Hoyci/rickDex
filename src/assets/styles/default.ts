import { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
  interface DefaultTheme {
    colors: {
      background: string;
      brown: string;
      salmon: string;
      yellow: string;
      green: string;
      pink: string;
      blue: string;
      white: string;
      gray: {
        200: string;
        100: string;
      };
    };
  }
}

const defaultTheme: DefaultTheme = {
  colors: {
    background: '#f6f5fc',
    white: '#fff',
    brown: '#41261C',
    salmon: '#DBA083',
    yellow: '#E7D847',
    green: '#91C649',
    pink: '#DE94BE',
    blue: '#B2D9E9',
    gray: {
      200: '#bcbcbc',
      100: '#e5e5e5',
    },
  },
};

export default defaultTheme;
