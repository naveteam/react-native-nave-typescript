import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components/native';

import { theme } from 'src/theme';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    ...theme.colors
  }
};

const withThemeProvider = storyFn => {
  return (
    <NavigationContainer theme={MyTheme}>
      <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
    </NavigationContainer>
  );
};

export default withThemeProvider;
