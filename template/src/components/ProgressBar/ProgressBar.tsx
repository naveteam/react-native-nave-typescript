import React, { FC, useState, useMemo } from 'react';
import { useWindowDimensions } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { Bar as RNProgressBar } from 'react-native-progress';

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
  borderWidth?: number;
}

const ProgressBar: FC<ProgressBarProps> = ({
  total,
  completed,
  isLabelVisible = true,
  progressColor,
  unfilledColor,
  borderWidth = 0,
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

  const progressBetweenZeroAndOne = useMemo(() => progress / TOTAL_PERCENTAGE, [progress]);

  const formatedLabel = useMemo(() => {
    const floor = Math.floor(progress);
    return `${floor > 100 ? '100' : floor}%`;
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
      <RNProgressBar
        width={progressBarWidth}
        progress={progressBetweenZeroAndOne}
        height={6}
        color={progressColor ?? colors.success}
        borderRadius={3}
        borderColor={unfilledColor ?? colors.gray.n300}
        unfilledColor={unfilledColor ?? colors.gray.n300}
        borderWidth={borderWidth}
      />

      {isLabelVisible && (
        <Text marginLeft={16} variant='smaller' color='gray'>
          {formatedLabel}
        </Text>
      )}
    </Row>
  );
};

export default ProgressBar;
