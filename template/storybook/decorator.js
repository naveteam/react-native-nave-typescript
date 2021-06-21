import React from 'react';

import { ThemeProvider } from 'src/context';

import { light, dark } from 'src/theme';

const withThemeProvider = storyFn => {
  return (
    <ThemeProvider watchSystemAppearence light={light} dark={dark}>
      {storyFn()}
    </ThemeProvider>
  );
};

export default withThemeProvider;
