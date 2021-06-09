import React, { ReactElement, FunctionComponent } from 'react';
import { render, RenderAPI, RenderOptions } from '@testing-library/react-native';
import { ThemeProvider } from 'styled-components/native';

import { theme } from 'src/theme';

const Providers: FunctionComponent = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

function customRender<T>(ui: ReactElement<T>, options?: RenderOptions): RenderAPI {
  return render(ui, { wrapper: Providers, ...options });
}

export * from '@testing-library/react-native';
export { customRender as render };
