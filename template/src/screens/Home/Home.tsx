import React, { FC } from 'react';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { useTheme } from 'src/context';

import { Column, Row, Text, Button } from 'src/components';

const Home: FC = () => {
  const {
    toggle,
    theme: {
      dark,
      colors: { primary, background }
    }
  } = useTheme();
  const { navigate } = useNavigation();

  return (
    <Column alignItems='center' flex={1} justifyContent='center' p='16px' bg={background}>
      <Row alignItems='center' mb='10px'>
        <Text color={primary} mr={2}>
          Built with react-native-nave-typescript
        </Text>

        <Icon name='rocket' size={24} color={primary} />
      </Row>

      <Button text='Form example' onPress={() => navigate('Form')} />
      <Button
        variant='secondary'
        text={`Change to ${dark ? 'light' : 'dark'} theme`}
        onPress={toggle}
      />
    </Column>
  );
};

export default Home;
