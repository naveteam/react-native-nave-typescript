import React from 'react';

import { ThemeProvider } from 'styled-components/native';
import { theme } from 'src/theme';

const withThemeProvider = storyFn => {
  return <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>;
};

export default withThemeProvider;
