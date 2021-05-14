import React, { FC } from 'react';
import { useTheme } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { Column, Row, Text } from 'src/components';

const Home: FC = () => {
  const { colors } = useTheme();

  return (
    <Column alignItems='center' flex={1} justifyContent='center'>
      <Row alignItems='center'>
        <Text color={colors.primary} variant='regular' mr={2}>
          Built with react-native-nave-typescript
        </Text>

        <Icon name='rocket' size={20} color={colors.primary} />
      </Row>
    </Column>
  );
};

export default Home;
