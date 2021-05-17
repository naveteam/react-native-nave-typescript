import React, { FC, useState } from 'react';
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

  return (
    <Column alignItems='center' flex={1} justifyContent='center'>
      <Controller
        name='email'
        control={control}
        render={({ field: { onChange, value } }): JSX.Element => (
          <Input
            value={value}
            onChangeText={value => onChange(value)}
            error={errors.email?.message}
            label='E-mail'
            placeholder='email@example.com'
          />
        )}
      />

      <Controller
        name='password'
        control={control}
        render={({ field: { onChange, value } }): JSX.Element => (
          <Input
            value={value}
            onChangeText={value => onChange(value)}
            error={errors.password?.message}
            label='Password'
            placeholder='password'
            type={isPasswordInput ? 'password' : 'text'}
            callToAction={() => setIsPasswordInput(!isPasswordInput)}
          />
        )}
      />

      <Button text='Submit form' onPress={handleSubmit(onSubmit)} />

      <Button variant='secondary' text='Reset form' onPress={() => reset()} />
    </Column>
  );
};

export default Form;
