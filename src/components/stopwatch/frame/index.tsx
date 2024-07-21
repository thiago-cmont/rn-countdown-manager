import { View } from 'react-native';
import { HorizontalBlock, VerticalBlock } from '../blocks';
import { blockShouldBeFilled } from '../helpers/blockShouldBeFilled';
import { type CustomStyle, type Sizes } from '../types';

export const Frame = ({
  number,
  size,
  color,
  fillColor,
}: { number: number; size?: Sizes } & CustomStyle) => {
  return (
    <View>
      <HorizontalBlock
        filled={blockShouldBeFilled({ framePosition: 1, number })}
        style={{ marginBottom: 2 }}
        size={size}
        fillColor={fillColor}
        color={color}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <VerticalBlock
          filled={blockShouldBeFilled({ framePosition: 2, number })}
          size={size}
          fillColor={fillColor}
          color={color}
        />
        <VerticalBlock
          filled={blockShouldBeFilled({ framePosition: 3, number })}
          size={size}
          fillColor={fillColor}
          color={color}
        />
      </View>
      <HorizontalBlock
        filled={blockShouldBeFilled({ framePosition: 4, number })}
        size={size}
        fillColor={fillColor}
        color={color}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <VerticalBlock
          filled={blockShouldBeFilled({ framePosition: 5, number })}
          size={size}
          fillColor={fillColor}
          color={color}
        />
        <VerticalBlock
          filled={blockShouldBeFilled({ framePosition: 6, number })}
          size={size}
          fillColor={fillColor}
          color={color}
        />
      </View>
      <HorizontalBlock
        filled={blockShouldBeFilled({ framePosition: 7, number })}
        style={{ marginTop: 2 }}
        size={size}
        fillColor={fillColor}
        color={color}
      />
    </View>
  );
};
