import React from 'react';

import { render, fireEvent, act } from 'src/utils/tests';

import Button from './Button';

describe('Button', () => {
  const testID = 'button-test-id';
  const text = 'press-me';

  it('should be able to render a Text within', () => {
    const { getByTestId } = render(<Button testID={testID} text={text} />);

    expect(getByTestId(testID)).toBeTruthy();
  });

  it('should be able to call onPress function', async () => {
    const onPress = jest.fn();
    const { getByTestId } = render(<Button testID={testID} text={text} onPress={onPress} />);
    const button = getByTestId(testID);

    await act(async () => {
      await fireEvent.press(button);
    });

    expect(onPress).toHaveBeenCalled();
    expect(onPress).toHaveBeenCalledTimes(1);
  });

  it('should not be able to call onPress function when loading', async () => {
    const onPress = jest.fn();
    const { getByTestId } = render(
      <Button loading testID={testID} text={text} onPress={onPress} />
    );
    const button = getByTestId(testID);

    await act(async () => {
      await fireEvent.press(button);
    });

    expect(onPress).not.toHaveBeenCalled();
    expect(onPress).toHaveBeenCalledTimes(0);
  });
});
