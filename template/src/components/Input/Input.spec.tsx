import React, { useState } from 'react';

import { render, fireEvent, act } from 'src/utils/tests';

import Input from './Input';

describe('Input', () => {
  const label = 'Email';
  const placeholder = 'your@email.com';
  const email = 'name.surname@nave.rs';
  const error = 'Email is a required field';
  const callToActionTestId = 'touchable-call-to-action';

  it('should be able to render with label and placeholder', () => {
    const { getByPlaceholderText, getByText } = render(
      <Input placeholder={placeholder} label={label} />
    );

    expect(getByText(label)).toBeTruthy();
    expect(getByPlaceholderText(placeholder)).toBeTruthy();
  });

  it('should be able to render with label, placeholder and error', () => {
    const { getByPlaceholderText, getByText } = render(
      <Input placeholder={placeholder} label={label} error={error} />
    );

    expect(getByText(label)).toBeTruthy();
    expect(getByText(error)).toBeTruthy();
    expect(getByPlaceholderText(placeholder)).toBeTruthy();
  });

  it('should be able to fill with text', async () => {
    const TextCase = () => {
      const [value, setValue] = useState<string>('');

      return (
        <Input value={value} placeholder={placeholder} label={label} onChangeText={setValue} />
      );
    };

    const { getByPlaceholderText } = render(<TextCase />);
    const input = getByPlaceholderText(placeholder);

    await act(async () => {
      await fireEvent.changeText(input, email);
    });

    expect(input.props.value).toBe(email);
  });

  it('should be able to render with call to action', () => {
    const callToAction = jest.fn();
    const { getByTestId } = render(
      <Input
        placeholder={placeholder}
        label={label}
        callToAction={callToAction}
        callToActionTestId={callToActionTestId}
      />
    );

    expect(getByTestId(callToActionTestId)).toBeTruthy();
  });

  it('should be able to press call to action button', async () => {
    const callToAction = jest.fn();
    const { getByTestId } = render(
      <Input
        placeholder={placeholder}
        label={label}
        callToAction={callToAction}
        callToActionTestId={callToActionTestId}
      />
    );
    const button = getByTestId(callToActionTestId);

    await act(async () => {
      await fireEvent.press(button);
    });

    expect(callToAction).toHaveBeenCalled();
    expect(callToAction).toHaveBeenCalledTimes(1);
  });
});
