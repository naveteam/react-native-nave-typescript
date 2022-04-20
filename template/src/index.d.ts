import 'styled-components/native';

interface AppTheme {
  dark: boolean;
  colors: {
    primary: string;
    secondary: string;
    background: string;
    onPrimary: string;
    onSecondary: string;
    onBackground: string;
    error: string;
    warning: string;
    success: string;
    notification: string;
    gray: {
      n50: string;
      n100: string;
      n200: string;
      n300: string;
      n400: string;
      n500: string;
      n600: string;
      n700: string;
      n800: string;
      n900: string;
    };
  };
}

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends AppTheme {}
}
