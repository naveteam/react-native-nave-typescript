import React, { FC } from 'react';
import { useTheme, useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { Column, Row, Text, Button } from 'src/components';

const Home: FC = () => {
  const { colors } = useTheme();
  const { navigate } = useNavigation();

  return (
    <Column alignItems='center' flex={1} justifyContent='center' p='16px'>
      <Row alignItems='center' mb='10px'>
        <Text color={colors.primary} mr={2}>
          Built with react-native-nave-typescript
        </Text>

        <Icon name='rocket' size={24} color={colors.primary} />
      </Row>

      <Button text='Form example' onPress={() => navigate('Form')} />
    </Column>
  );
};

export default Home;
