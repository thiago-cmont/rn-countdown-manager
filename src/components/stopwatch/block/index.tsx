import { StyleSheet, View, ViewProps, ViewStyle } from 'react-native';
import { CustomStyle, Sizes } from '../types';
import { BLOCK_SIZES } from './sizes';

const DEFAULT_OFF_COLOR = 'transparent';
export const DEFAULT_COLOR = '#000000';

const Block = ({
  blockIsOff,
  style,
  offColor,
  color,
  testID,
}: {
  blockIsOff: boolean;
  testID?: string;
} & ViewProps &
  CustomStyle) => {
  const defaultStyle: ViewStyle = {
    backgroundColor: color || DEFAULT_COLOR,
  };
  const offStyle: ViewStyle = {
    backgroundColor: offColor || DEFAULT_OFF_COLOR,
  };
  return (
    <View
      style={[styles.block, blockIsOff ? offStyle : defaultStyle, style]}
      testID={testID}
    />
  );
};

export const VerticalBlock = ({
  blockIsOff,
  style,
  size = 'md',
  offColor,
  color,
  testID,
}: {
  blockIsOff: boolean;
  size?: Sizes;
  testID?: string;
} & ViewProps &
  CustomStyle) => {
  return (
    <Block
      testID={testID}
      blockIsOff={blockIsOff}
      offColor={offColor}
      color={color}
      style={[
        style,
        {
          width: BLOCK_SIZES[size].counterOrientation,
          height: BLOCK_SIZES[size].withOrientation,
        },
      ]}
    />
  );
};

export const HorizontalBlock = ({
  blockIsOff,
  style,
  size = 'md',
  offColor,
  color,
  testID,
}: {
  blockIsOff: boolean;
  size?: Sizes;
  testID?: string;
} & ViewProps &
  CustomStyle) => {
  return (
    <Block
      testID={testID}
      blockIsOff={blockIsOff}
      offColor={offColor}
      color={color}
      style={[
        style,
        {
          width: BLOCK_SIZES[size].withOrientation,
          height: BLOCK_SIZES[size].counterOrientation,
        },
      ]}
    />
  );
};

const styles = StyleSheet.create({
  block: {
    borderRadius: 10,
  },
});
