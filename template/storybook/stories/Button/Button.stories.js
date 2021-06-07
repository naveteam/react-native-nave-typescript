import { storiesOf } from '@storybook/react-native';
import React from 'react';

import { Column, Button } from 'src/components';

import Decorator from '../../decorator';

storiesOf('Button', module)
  .addDecorator(Decorator)
  .add('variants', () => (
    <Column alignItems='center'>
      <Button text='Primary' width='90%' />
      <Button text='Secondary' variant='secondary' width='90%' mt={12} />
      <Button text='Disabled' width='90%' disabled mt={12} />
    </Column>
  ));
