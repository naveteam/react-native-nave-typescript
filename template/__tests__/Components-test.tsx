import React, { ReactNode } from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { ThemeProvider } from 'styled-components/native';

import { theme } from 'src/theme';

import { Button } from 'src/components';

interface Props {
  children: ReactNode;
}

// MockTheme to handle styled-system properties as margin, colors etc on tests
const MockTheme = ({ children }: Props) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;

describe('Button', () => {
  const buttonText = 'Test button';
  const buttonTestID = 'BUTTON_TEST_ID';

  const onPress = jest.fn();

  const MockButton = (
    <MockTheme>
      <Button testID={buttonTestID} text={buttonText} onPress={onPress} />
    </MockTheme>
  );

  it('Should render a button, and matches with snapshot', () => {
    const { toJSON } = render(MockButton);

    expect(toJSON()).toMatchSnapshot();
  });

  it('Should call the onPress action from rendered button', () => {
    const { getByTestId } = render(MockButton);

    const button = getByTestId(buttonTestID);

    fireEvent.press(button);

    expect(onPress).toHaveBeenCalledTimes(1);
  });
});
