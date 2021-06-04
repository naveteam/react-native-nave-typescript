import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Text } from 'react-native';
import { Input } from '../../../src/components';
import CenterView from '../CenterView';

storiesOf('Input', module).add('Input', () => <Input />);
