import React from 'react';

import { render, fireEvent } from 'src/utils/tests';

import Button from './Button';

describe('Button', () => {
  const text = 'press-me';

  it('should be able to render a Text within', async () => {
    const { toJSON, getByText } = render(<Button text={text} />);

    expect(getByText(text)).toBeTruthy();
    expect(toJSON()).toMatchSnapshot();
  });

  it('should be able to call onPress function', async () => {
    const onPress = jest.fn();
    const { toJSON, getByText } = render(<Button text={text} onPress={onPress} />);
    const button = getByText(text);

    await fireEvent(button, 'onPress');

    expect(onPress).toHaveBeenCalled();
    expect(onPress).toHaveBeenCalledTimes(1);
    expect(toJSON()).toMatchSnapshot();
  });
});
