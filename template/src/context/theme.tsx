import React, {
  ReactNode,
  FunctionComponent,
  createContext,
  useContext,
  useState,
  useMemo,
  useEffect,
  useCallback
} from 'react';
import { Appearance, ColorSchemeName } from 'react-native';
import { ThemeProvider as StyledThemeProvider, DefaultTheme } from 'styled-components/native';
import NavigationBar from 'react-native-android-navigation-bar';

import { isSystemDarkModeSupported, unsupportedWatchSystemAppearanceWarning } from 'src/utils';

type ThemeConsumable = (context: ThemeContextProps) => ReactNode;

interface ThemeConsumerComponent {
  (props: { children: ThemeConsumable }): JSX.Element;
}

interface ThemeContextProps {
  theme: DefaultTheme;
  deviceColorScheme: ColorSchemeName;
  toggle: () => void;
}

interface BaseProps {
  initialScheme?: ColorSchemeName;
  children?: ReactNode;
}

interface WithSingleSchemeSupport extends BaseProps {
  watchSystemAppearence?: boolean;
  light?: DefaultTheme;
  dark?: DefaultTheme;
  base: DefaultTheme;
}

interface WithMultiSchemeSupport extends BaseProps {
  watchSystemAppearence: boolean;
  light: DefaultTheme;
  dark: DefaultTheme;
  base?: DefaultTheme;
}

const ThemeContext = createContext<ThemeContextProps>({} as ThemeContextProps);

export const useTheme = (): ThemeContextProps => useContext(ThemeContext);

export const ThemeConsumer: ThemeConsumerComponent = ({ children }) => (
  <ThemeContext.Consumer>{context => children(context)}</ThemeContext.Consumer>
);

export const ThemeProvider: FunctionComponent<WithSingleSchemeSupport | WithMultiSchemeSupport> = ({
  watchSystemAppearence,
  initialScheme,
  light,
  dark,
  base,
  children
}) => {
  watchSystemAppearence &&
    !isSystemDarkModeSupported &&
    console.warn(unsupportedWatchSystemAppearanceWarning);

  const [deviceColorScheme, setDeviceColorScheme] = useState(
    () => initialScheme ?? Appearance.getColorScheme()
  );

  const theme = useMemo(() => {
    if (!light && !dark) return base;
    if (deviceColorScheme === 'light' && !!light) return light;
    if (deviceColorScheme === 'dark' && !!dark) return dark;
  }, [deviceColorScheme, light, dark, base]);

  const toggle = useCallback(
    () => dark && setDeviceColorScheme(state => (state === 'light' ? 'dark' : 'light')),
    [dark]
  );

  const onAppearanceChanged = useCallback<Appearance.AppearanceListener>(
    ({ colorScheme }) => setDeviceColorScheme(colorScheme),
    []
  );

  useEffect(() => {
    theme && NavigationBar.changeColor(theme.colors.background, !theme.dark, true);
  }, [theme]);

  useEffect(() => {
    if (watchSystemAppearence && isSystemDarkModeSupported) {
      Appearance.addChangeListener(onAppearanceChanged);
      return () => Appearance.removeChangeListener(onAppearanceChanged);
    }
  }, [watchSystemAppearence, onAppearanceChanged]);

  return (
    <ThemeContext.Provider value={{ theme: theme!, deviceColorScheme, toggle }}>
      <StyledThemeProvider theme={theme!}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};
