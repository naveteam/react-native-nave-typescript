import React, { FC } from 'react';
import { useTheme } from '@react-navigation/native';

import { Column, Text } from 'src/components';

const Home: FC = () => {
  const { colors } = useTheme();

  return (
    <Column alignItems='center' flex={1} justifyContent='center'>
      <Text color={colors.primary} variant='regular'>
        Built with react-native-nave-typescript
      </Text>
    </Column>
  );
};

export default Home;
