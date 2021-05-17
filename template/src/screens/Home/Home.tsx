import React, { FC } from 'react';
import { useTheme } from '@react-navigation/native';
import Config from 'react-native-config';
import Icon from 'react-native-vector-icons/FontAwesome';

import { Column, Row, Text } from 'src/components';

const Home: FC = () => {
  const { colors } = useTheme();

  return (
    <Column alignItems='center' flex={1} justifyContent='center' p='16px'>
      <Row alignItems='center'>
        <Text color='primary' variant='regular' letterSpacing='0.6px' fontSize='16px' mr='8px'>
          Built with react-native-nave-typescript
        </Text>

        <Icon name='rocket' size={24} color={colors.primary} />
      </Row>

      <Text color='gray.n900' letterSpacing='1.25px' fontSize='13px' mt='8px'>
        {JSON.stringify(Config)}
      </Text>
    </Column>
  );
};

export default Home;
