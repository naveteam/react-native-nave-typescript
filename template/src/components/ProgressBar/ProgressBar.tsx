import React, { FC, useState, useMemo, useRef, useEffect } from 'react';
import { useWindowDimensions, Animated } from 'react-native';
import { useTheme } from '@react-navigation/native';

import { Row, Text, ColumnProps } from 'src/components';

const TOTAL_PERCENTAGE = 100;

const DESIGN_DIMENSIONS = {
  PROGRESS_BAR_WIDTH: 279,
  DEVICE_WIDTH: 360
};

interface ProgressBarProps extends ColumnProps {
  total: number;
  completed: number;
  isLabelVisible?: boolean;
  progressColor?: string;
  unfilledColor?: string;
}

const ProgressBar: FC<ProgressBarProps> = ({
  total,
  completed,
  isLabelVisible = true,
  progressColor,
  unfilledColor,
  ...props
}) => {
  const { colors } = useTheme();
  const { width } = useWindowDimensions();

  const [rowWidth, setRowWidth] = useState<number>(0);

  const progressBarWidth = useMemo(() => {
    if (!isLabelVisible) return rowWidth;
    return (DESIGN_DIMENSIONS.PROGRESS_BAR_WIDTH * width) / DESIGN_DIMENSIONS.DEVICE_WIDTH;
  }, [rowWidth, width, isLabelVisible]);

  const progress = useMemo(() => (completed * TOTAL_PERCENTAGE) / total, [total, completed]);
  const progressValue = useRef(new Animated.Value(progress)).current;

  const formatedLabel = useMemo(() => {
    const floor = Math.floor(progress);
    return `${floor > 100 ? '100' : floor}%`;
  }, [progress]);

  useEffect(() => {
    Animated.timing(progressValue, {
      duration: 1000,
      toValue: progress,
      useNativeDriver: false
    }).start();
  }, [progress]);

  return (
    <Row
      width='100%'
      alignItems='center'
      justifyContent='space-between'
      onLayout={({
        nativeEvent: {
          layout: { width }
        }
      }): void => setRowWidth(width)}
      {...props}
    >
      <Row
        backgroundColor={unfilledColor ?? colors.gray.n300}
        height={5}
        width={progressBarWidth}
        borderRadius={2.5}
        position='relative'
      >
        <Animated.View
          style={{
            backgroundColor: progressColor ?? colors.success,
            width: progressValue.interpolate({
              inputRange: [0, 100],
              outputRange: ['0%', '100%'],
              extrapolate: 'clamp'
            }),
            position: 'absolute',
            height: 5,
            borderRadius: 2.5
          }}
        />
      </Row>

      {isLabelVisible && (
        <Text marginLeft={16} variant='smaller' color='gray.n800'>
          {formatedLabel}
        </Text>
      )}
    </Row>
  );
};

export default ProgressBar;
