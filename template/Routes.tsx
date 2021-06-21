import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

import { Home, Form } from 'src/screens';

const ScreenOptions = () => ({
  headerShown: false
});

const Routes: FC = () => (
  <Navigator screenOptions={ScreenOptions}>
    <Screen name='Home' component={Home} />
    <Screen name='Form' component={Form} />
  </Navigator>
);

export default Routes;
