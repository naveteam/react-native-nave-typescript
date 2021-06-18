import React, { FC, useState, useRef } from 'react';
import { Animated, TouchableWithoutFeedback } from 'react-native';
import { useTheme } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { Column, Text, Row, ColumnProps } from 'src/components';

interface AccordionsProps extends ColumnProps {
  title: string;
  children?: React.ReactNode;
  titleColor?: string;
}

const Accordion: FC<AccordionsProps> = ({ title, titleColor, children, ...props }) => {
  const [open, setOpen] = useState<boolean>(false);
  const { colors } = useTheme();

  const animatedHeight = useRef(new Animated.Value(40)).current;

  const animate = (): void => {
    Animated.timing(animatedHeight, {
      duration: 1000,
      toValue: open ? 40 : 328,
      useNativeDriver: false
    }).start();
  };

  const AnimatedColumn = Animated.createAnimatedComponent(Column);

  return (
    <AnimatedColumn
      bg='white'
      width='100%'
      borderRadius={4}
      height={animatedHeight}
      style={{
        elevation: 5,
        shadowOffset: { height: 2, width: 0 },
        shadowOpacity: 0.2
      }}
      pl='12px'
      pr='12px'
      pt='4px'
      {...props}
    >
      <TouchableWithoutFeedback
        onPress={() => {
          setOpen(!open);
          animate();
        }}
      >
        <Row justifyContent='space-between' mt='2px'>
          <Text color={titleColor ?? 'gray.n900'}>eae</Text>

          <Animated.View
            style={{
              transform: [
                {
                  rotate: animatedHeight.interpolate({
                    inputRange: [40, 328],
                    outputRange: ['0deg', '180deg'],
                    extrapolate: 'clamp'
                  })
                }
              ]
            }}
          >
            <Icon name='angle-up' size={22} color={titleColor ?? colors.gray.n900} />
          </Animated.View>
        </Row>
      </TouchableWithoutFeedback>

      <Animated.ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          opacity: animatedHeight.interpolate({
            inputRange: [0, 328],
            outputRange: [0, 1],
            extrapolate: 'clamp'
          }),
          marginTop: 10
        }}
      >
        {children}
      </Animated.ScrollView>
    </AnimatedColumn>
  );
};

export default Accordion;
