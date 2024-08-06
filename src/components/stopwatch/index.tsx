import { type TimeProps } from '../../timer/hooks/types';
import { StyleSheet, View } from 'react-native';
import { CustomBlocksType, type CustomStyle, type Sizes } from './types';
import { TimeBlock } from './TimeBlock';
import React from 'react';
import { Separator } from './Separator';

export type CountdownProps = {
  showHours?: boolean;
  showMinutes?: boolean;
  CustomSeparator?: React.FC;
  size?: Sizes;
  customBlocks?: CustomBlocksType;
} & TimeProps &
  CustomStyle;

const Countdown = ({
  hours,
  minutes,
  seconds,
  showHours = true,
  showMinutes = true,
  offColor,
  color,
  CustomSeparator,
  size,
  customBlocks,
}: CountdownProps) => {
  return (
    <View style={style.countdownContainer} testID="countdown-component">
      <TimeBlock
        time={hours}
        color={color}
        customBlocks={customBlocks}
        offColor={offColor}
        hidden={!showHours}
        size={size}
      />
      <Separator
        CustomSeparator={CustomSeparator}
        color={color}
        hidden={!showHours}
      />
      <TimeBlock
        time={minutes}
        color={color}
        customBlocks={customBlocks}
        offColor={offColor}
        hidden={!showMinutes}
        size={size}
      />
      <Separator
        CustomSeparator={CustomSeparator}
        color={color}
        hidden={!showMinutes}
      />
      <TimeBlock
        time={seconds}
        color={color}
        customBlocks={customBlocks}
        offColor={offColor}
        size={size}
      />
    </View>
  );
};

export default Countdown;

const style = StyleSheet.create({
  countdownContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
