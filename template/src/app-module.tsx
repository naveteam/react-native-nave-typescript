import React, { FC } from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';

import { AppProviders, ThemeProvider, ThemeConsumer, useTheme } from 'src/context';

import { light, dark } from 'src/theme';

import Routes from '../Routes';

if (__DEV__) {
  import('../ReactotronConfig').then(() => console.log('Reactotron Configured'));
}

const App: FC = () => {
  const {
    theme: {
      dark,
      colors: { background }
    }
  } = useTheme();

  return (
    <SafeAreaProvider>
      <NavigationContainer
        theme={{ dark, colors: { ...(dark ? DarkTheme.colors : DefaultTheme.colors), background } }}
      >
        <Routes />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default (): JSX.Element => (
  <ThemeProvider watchSystemAppearence light={light} dark={dark}>
    <ThemeConsumer>
      {({
        theme: {
          dark,
          colors: { background }
        }
      }) => (
        <StatusBar
          backgroundColor={background}
          barStyle={dark ? 'light-content' : 'dark-content'}
        />
      )}
    </ThemeConsumer>

    <AppProviders>
      <App />
    </AppProviders>
  </ThemeProvider>
);

// export { default } from '../storybook';
