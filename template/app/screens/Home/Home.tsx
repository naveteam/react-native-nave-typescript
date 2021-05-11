import React, { FC } from 'react';
import { useTheme } from '@react-navigation/native';

import { Column, Text } from 'app/components';

const Home: FC = () => {
  const { colors } = useTheme();

  return (
    <Column alignItems='center' flex={1} justifyContent='center'>
      <Text color={colors.primary} variant='regular'>
        Welcome to Nave template
      </Text>
    </Column>
  );
};

export default Home;
