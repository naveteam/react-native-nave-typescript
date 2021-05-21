import React, { FC, useState, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { Column, Input, Button } from 'src/components';

import { FormExampleSchema } from 'src/utils';

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
  const [isPasswordInput, setIsPasswordInput] = useState(true);

  const onSubmit = (data: FormExampleData) => {
    console.log(data);
  };

  // TO-DO focus on next input when submit
  const handleFocus = (name: string) => {
    // control.fieldsRef.current[name]?.ref?.focus();
  };

  return (
    <Column alignItems='center' flex={1} justifyContent='center'>
      <Controller
        name='email'
        control={control}
        render={({ field: { onChange, value, ref }, ...rest }): JSX.Element => (
          <Input
            ref={ref}
            label='E-mail'
            placeholder='email@example.com'
            keyboardType='email-address'
            returnKeyType='next'
            value={value}
            error={errors.email?.message}
            onSubmitEditing={() => handleFocus('password')}
            onChangeText={onChange}
            {...rest}
          />
        )}
      />

      <Controller
        name='password'
        control={control}
        render={({ field: { onChange, value, ref }, ...rest }): JSX.Element => (
          <Input
            ref={ref}
            label='Password'
            placeholder='password'
            type={isPasswordInput ? 'password' : 'text'}
            returnKeyType='done'
            value={value}
            error={errors.password?.message}
            onChangeText={onChange}
            onSubmitEditing={handleSubmit(onSubmit)}
            callToAction={() => setIsPasswordInput(!isPasswordInput)}
            {...rest}
          />
        )}
      />

      <Button text='Submit form' onPress={handleSubmit(onSubmit)} />

      <Button variant='secondary' text='Reset form' onPress={() => reset()} />
    </Column>
  );
};

export default Form;
