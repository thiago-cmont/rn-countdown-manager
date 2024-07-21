import { View, type ViewProps, type ViewStyle } from 'react-native';
import { type CustomStyle, type Sizes } from '../types';
import { BLOCK_SIZES } from './sizes';

const DEFAULT_COLOR = '#FFFFFF';
export const DEFAULT_FILL_COLLOR = '#FF0000';

const Block = ({
  filled,
  style,
  fillColor,
  color,
}: {
  filled: boolean;
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
      style={[{ borderRadius: 10 }, filled ? filledStyle : defaultStyle, style]}
    />
  );
};

export const VerticalBlock = ({
  filled,
  style,
  size = 'md',
  fillColor,
  color,
}: { filled: boolean; size?: Sizes } & ViewProps & CustomStyle) => {
  return (
    <Block
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
}: { filled: boolean; size?: Sizes } & ViewProps & CustomStyle) => {
  return (
    <Block
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
