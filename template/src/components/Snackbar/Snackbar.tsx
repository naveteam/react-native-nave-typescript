import React, {
  ForwardRefRenderFunction,
  useCallback,
  useImperativeHandle,
  forwardRef,
  useState,
  useRef,
  useEffect
} from 'react';
import { useWindowDimensions, TouchableOpacity, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { Row, Text } from 'src/components';

const VISIBLE_OFFSET = -20;

interface SnackbarProps {
  message: string;
  duration?: number;
  backgroundColor?: string;
  textColor?: string;
  autoDismiss?: boolean;
}

export interface SnackbarRef {
  toggle(): void;
}
const Snackbar: ForwardRefRenderFunction<SnackbarRef, SnackbarProps> = (
  {
    message,
    duration = 2000,
    backgroundColor = 'success',
    textColor = 'white',
    autoDismiss = true
  },
  ref
) => {
  const { height, width } = useWindowDimensions();

  const [isVisible, setIsVisible] = useState<boolean>(false);

  const animatedTranslation = useRef(new Animated.Value(height)).current;

  const toggle = useCallback(() => {
    Animated.timing(animatedTranslation, {
      duration: 700,
      toValue: isVisible ? height : VISIBLE_OFFSET,
      useNativeDriver: true
    }).start();
    setIsVisible(!isVisible);
  }, [isVisible, height]);

  useImperativeHandle(ref, () => ({
    toggle
  }));

  useEffect(() => {
    if (!isVisible || !autoDismiss) return (): void => {};

    const timeout = setTimeout(() => {
      toggle();
    }, duration);

    return (): void => clearTimeout(timeout);
  }, [isVisible, duration]);

  return (
    <Animated.View
      style={{
        width: width - 16,
        position: 'absolute',
        bottom: 0,
        transform: [
          {
            translateY: animatedTranslation
          }
        ]
      }}
    >
      <Row
        alignItems='center'
        justifyContent='space-between'
        m='20px'
        p='10px'
        borderRadius={4}
        backgroundColor={backgroundColor}
      >
        <Text fontSize='16px' maxWidth='80%' lineHeight='24px' color={textColor}>
          {message}
        </Text>
        <TouchableOpacity
          hitSlop={{ bottom: 20, left: 20, top: 20, right: 20 }}
          onPress={() => toggle()}
        >
          <Icon name='close' size={16} color={textColor} />
        </TouchableOpacity>
      </Row>
    </Animated.View>
  );
};

export default forwardRef(Snackbar);
