import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    fonts: {
      regular: string;
      bold: string;
      light: string;
      semiBold: string;
    };
    brands: {
      darkBlue: string;
      gold: string;
      black: string;
      white: string;
      lightGray: string;
      purple: string;
      whiteSnow: string;
      grayRain: string;
      lightBlue: string;
      blueSky: string;
    };
  }
}
