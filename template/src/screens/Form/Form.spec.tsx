import React from 'react';

import { render, fireEvent, act } from 'src/utils/tests';

import Form from './Form';

describe('Form', () => {
  const emailInputTestId = 'email-input';
  const passwordInputTestId = 'password-input';
  const passwordInputCallToActionTestId = 'password-input-call-to-action';
  const submitButtonTestId = 'submit-form-button';
  const resetButtonTestId = 'reset-form-button';

  it('should be able to render', () => {
    const { getByTestId } = render(<Form />);

    expect(getByTestId(emailInputTestId)).toBeTruthy();
    expect(getByTestId(passwordInputTestId)).toBeTruthy();
    expect(getByTestId(submitButtonTestId)).toBeTruthy();
    expect(getByTestId(resetButtonTestId)).toBeTruthy();
  });

  it('should be able to fill all fields', async () => {
    const { getByTestId } = render(<Form />);
    const emailInput = getByTestId(emailInputTestId);
    const passwordInput = getByTestId(passwordInputTestId);

    await act(async () => {
      await fireEvent.changeText(emailInput, 'email@nave.rs');
      await fireEvent.changeText(passwordInput, 'Senha123-');
    });

    expect(emailInput.props.value).toBe('email@nave.rs');
    expect(passwordInput.props.value).toBe('Senha123-');
  });

  it('should be able to reset all fields', async () => {
    const { getByTestId } = render(<Form />);
    const emailInput = getByTestId(emailInputTestId);
    const passwordInput = getByTestId(passwordInputTestId);
    const resetButton = getByTestId(resetButtonTestId);

    await act(async () => {
      await fireEvent.changeText(emailInput, 'email@nave.rs');
      await fireEvent.changeText(passwordInput, 'Senha123-');
    });

    await act(async () => {
      await fireEvent.press(resetButton);
    });

    expect(emailInput.props.value).not.toBe('email@nave.rs');
    expect(passwordInput.props.value).not.toBe('Senha123-');
  });

  it('should be able to press password text input callToAction to hidden password', async () => {
    const { getByTestId } = render(<Form />);
    const passwordInput = getByTestId(passwordInputTestId);
    const passwordInputCallToActionButton = getByTestId(passwordInputCallToActionTestId);

    expect(passwordInput.props.secureTextEntry).toBeTruthy();

    await act(async () => {
      await fireEvent.press(passwordInputCallToActionButton);
    });

    expect(passwordInput.props.secureTextEntry).toBeFalsy();
  });

  it('should be able to render errors at fields', async () => {
    const { getByTestId, getAllByText } = render(<Form />);
    const submitButton = getByTestId(submitButtonTestId);

    await act(async () => {
      await fireEvent.press(submitButton);
    });

    expect(getAllByText('Campo obrigatório')).toHaveLength(2);
  });
});
