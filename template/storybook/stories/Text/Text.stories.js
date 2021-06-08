import React from 'react';
import { storiesOf } from '@storybook/react-native';

import { Column, Text } from 'src/components';

import Decorator from '../../decorator';

storiesOf('Text', module)
  .addDecorator(Decorator)
  .add('variants', () => (
    <Column alignItems='center'>
      <Text variant='bigger'>Bigger</Text>
      <Text variant='big' mt={12}>
        Big
      </Text>
      <Text variant='medium' mt={12}>
        Medium
      </Text>
      <Text variant='regular' mt={12}>
        Regular
      </Text>
      <Text variant='small' mt={12}>
        Small
      </Text>
      <Text variant='smaller' mt={12}>
        Smaller
      </Text>
      <Text variant='tiny' mt={12}>
        Tiny
      </Text>
    </Column>
  ));
