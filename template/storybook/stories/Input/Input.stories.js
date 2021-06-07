import React from 'react';
import { storiesOf } from '@storybook/react-native';

import { Column, Input } from 'src/components';

import Decorator from '../../decorator';

storiesOf('Input', module)
  .addDecorator(Decorator)
  .add('variants', () => (
    <Column alignItems='center'>
      <Input placeholder='Default' width='90%' mt={12} />
      <Input placeholder='Multiline' multiline width='90%' mt={12} />
      <Input placeholder='Disabled' editable={false} width='90%' mt={12} />
      <Input placeholder='Error' width='90%' error='Error' mt={12} />
    </Column>
  ));
