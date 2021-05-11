import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

import { Home } from 'app/screens';

import { theme } from 'app/theme';

const ScreenOptions = () => ({
  cardStyle: { backgroundColor: theme.colors.secondary, paddingHorizontal: 16 },
  headerShown: false
});

const Routes: FC = () => (
  <Navigator screenOptions={ScreenOptions}>
    <Screen name='Home' component={Home} />
  </Navigator>
);

export default Routes;
