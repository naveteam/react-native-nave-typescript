import { ThemeProvider } from 'styled-components/native';

import { theme } from '../src/theme';

console.log('eae');

const withThemeProvider = (Story, context) => {
  return (
    <ThemeProvider theme={theme}>
      <Story {...context} />
    </ThemeProvider>
  );
};
export const decorators = [withThemeProvider];
