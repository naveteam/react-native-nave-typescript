import React, { FC, useRef, MutableRefObject, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { Column, Input, InputRef, Button, KeyboardAwareScrollView } from 'src/components';

import { FormExampleSchema } from 'src/utils';
import { padding } from 'styled-system';

interface FormExampleData {
  email: string;
  password: string;
}

const Form: FC = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<FormExampleData>({
    reValidateMode: 'onSubmit',
    resolver: yupResolver(FormExampleSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  });
  const passwordInputRef = useRef() as MutableRefObject<InputRef>;

  const [isPasswordInput, setIsPasswordInput] = useState(true);

  const onSubmit = (data: FormExampleData) => {
    console.log(data);
  };

  const handleFocus = (ref: MutableRefObject<InputRef>) => {
    // Now on react-hook-form v7, to focus inputs we should use the ref prop
    ref.current?.focus();
  };

  return (
    <Column flex={1}>
      <KeyboardAwareScrollView
        contentContainerStyle={{
          flex: 1,
          justifyContent: 'center',
          padding: 16
        }}
      >
        <Controller
          name='email'
          control={control}
          render={({ field: { onChange, value } }): JSX.Element => (
            <Input
              label='E-mail'
              placeholder='email@example.com'
              keyboardType='email-address'
              returnKeyType='next'
              value={value}
              error={errors.email?.message}
              onSubmitEditing={() => handleFocus(passwordInputRef)}
              onChangeText={onChange}
            />
          )}
        />

        <Controller
          name='password'
          control={control}
          render={({ field: { onChange, value } }): JSX.Element => (
            <Input
              ref={passwordInputRef}
              secureTextEntry={isPasswordInput}
              label='Password'
              placeholder='password'
              returnKeyType='done'
              value={value}
              error={errors.password?.message}
              onChangeText={onChange}
              callToAction={() => setIsPasswordInput(!isPasswordInput)}
              onSubmitEditing={handleSubmit(onSubmit)}
            />
          )}
        />

        <Button text='Submit form' onPress={handleSubmit(onSubmit)} mt={20} />

        <Button variant='secondary' text='Reset form' onPress={() => reset()} />
      </KeyboardAwareScrollView>
    </Column>
  );
};

export default Form;
