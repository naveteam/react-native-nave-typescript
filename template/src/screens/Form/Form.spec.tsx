import React from 'react';

import { render, fireEvent, act } from 'src/utils/tests';

import Form from './Form';

describe('Form', () => {
  const email = {
    label: 'E-mail',
    placeholder: 'email@example.com'
  };
  const password = {
    label: 'Password',
    placeholder: 'password'
  };
  const submitButtonText = 'Submit form';
  const resetButtonText = 'Reset form';

  it('should be able to render', () => {
    const { getByText, getByPlaceholderText } = render(<Form />);

    expect(getByText(email.label)).toBeTruthy();
    expect(getByText(password.label)).toBeTruthy();
    expect(getByText(submitButtonText)).toBeTruthy();
    expect(getByText(resetButtonText)).toBeTruthy();
    expect(getByPlaceholderText(email.placeholder)).toBeTruthy();
    expect(getByPlaceholderText(password.placeholder)).toBeTruthy();
  });

  it('should be able to fill all fields', async () => {
    const { getByPlaceholderText } = render(<Form />);
    const emailInput = getByPlaceholderText(email.placeholder);
    const passwordInput = getByPlaceholderText(password.placeholder);

    await act(async () => {
      await fireEvent.changeText(emailInput, 'email@nave.rs');
      await fireEvent.changeText(passwordInput, 'Senha123-');
    });

    expect(emailInput.props.value).toBe('email@nave.rs');
    expect(passwordInput.props.value).toBe('Senha123-');
  });

  it('should be able to reset all fields', async () => {
    const { getByPlaceholderText, getByText } = render(<Form />);
    const emailInput = getByPlaceholderText(email.placeholder);
    const passwordInput = getByPlaceholderText(password.placeholder);
    const resetButton = getByText(resetButtonText);

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

  it('should be able to render errors at fields', async () => {
    const { getByText, getAllByText } = render(<Form />);
    const submitButton = getByText(submitButtonText);

    await act(async () => {
      await fireEvent.press(submitButton);
    });

    expect(getAllByText('Campo obrigatório')).toHaveLength(2);
  });
});
