import { StyleSheet, View, type ViewProps, type ViewStyle } from 'react-native';
import { CustomBlockAssets, type CustomStyle, type Sizes } from '../types';
import { BLOCK_SIZES } from './sizes';

const DEFAULT_COLOR = 'transparent';
export const DEFAULT_FILL_COLLOR = '#FFFFFF';

const Block = ({
  filled,
  style,
  fillColor,
  color,
  testID,
}: {
  filled: boolean;
  testID?: string;
} & ViewProps &
  CustomStyle) => {
  const filledStyle: ViewStyle = {
    backgroundColor: fillColor ? fillColor : DEFAULT_FILL_COLLOR,
  };
  const defaultStyle: ViewStyle = {
    backgroundColor: color ? color : DEFAULT_COLOR,
  };
  return (
    <View
      style={[styles.block, filled ? filledStyle : defaultStyle, style]}
      testID={testID}
    />
  );
};

export const VerticalBlock = ({
  filled,
  style,
  size = 'md',
  fillColor,
  color,
  testID,
}: {
  filled: boolean;
  size?: Sizes;
  testID?: string;
} & ViewProps &
  CustomStyle) => {
  return (
    <Block
      testID={testID}
      filled={filled}
      fillColor={fillColor}
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
  filled,
  style,
  size = 'md',
  fillColor,
  color,
  testID,
}: {
  filled: boolean;
  size?: Sizes;
  testID?: string;
  customAssets?: CustomBlockAssets;
} & ViewProps &
  CustomStyle) => {
  return (
    <Block
      testID={testID}
      filled={filled}
      fillColor={fillColor}
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
