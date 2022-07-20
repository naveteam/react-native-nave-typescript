import React, { FC, useState } from 'react';
import { useTheme } from '@react-navigation/native';

import { Button, Column, Row, Text } from 'src/components';

const Home: FC = () => {
  const { colors } = useTheme();
  const [oUillia, setOUillia] = useState('');

  return (
    <Column alignItems='center' flex={1} justifyContent='center' p='16px'>
      <Row alignItems='center' mb='10px'>
        <Text color={colors.primary} mr={2}>
          {oUillia}
        </Text>

        <Button
          testID='uillia'
          text='Uillia todo poderoso'
          onPress={() => setOUillia('texto do uillia')}
        />
      </Row>
    </Column>
  );
};

export default Home;
