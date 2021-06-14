import React, { ReactElement, ComponentType, FunctionComponent } from 'react';
import { render, RenderAPI, RenderOptions } from '@testing-library/react-native';
import { ThemeProvider } from 'styled-components/native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { theme } from 'src/theme';

interface Screen {
  name: string;
  component: ComponentType;
}

const Stack = createStackNavigator();

const Providers: FunctionComponent = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

function customRender<T>(ui: ReactElement<T>, options?: RenderOptions): RenderAPI {
  return render(ui, { wrapper: Providers, ...options });
}

export function withScreen(...screens: Screen[]): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {screens.map(screen => (
          <Stack.Screen key={screen.name} name={screen.name} component={screen.component} />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export * from '@testing-library/react-native';
export { customRender as render };
