import { StyleSheet, View } from 'react-native';
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
        filled={blockShouldBeFilled({ framePosition: 'a', number })}
        style={style.aBlock}
        size={size}
        fillColor={fillColor}
        color={color}
      />
      <View style={style.verticalBlocksContainer}>
        <VerticalBlock
          filled={blockShouldBeFilled({ framePosition: 'f', number })}
          size={size}
          fillColor={fillColor}
          color={color}
        />
        <VerticalBlock
          filled={blockShouldBeFilled({ framePosition: 'b', number })}
          size={size}
          fillColor={fillColor}
          color={color}
        />
      </View>
      <HorizontalBlock
        filled={blockShouldBeFilled({ framePosition: 'g', number })}
        size={size}
        fillColor={fillColor}
        color={color}
      />
      <View style={style.verticalBlocksContainer}>
        <VerticalBlock
          filled={blockShouldBeFilled({ framePosition: 'e', number })}
          size={size}
          fillColor={fillColor}
          color={color}
        />
        <VerticalBlock
          filled={blockShouldBeFilled({ framePosition: 'c', number })}
          size={size}
          fillColor={fillColor}
          color={color}
        />
      </View>
      <HorizontalBlock
        filled={blockShouldBeFilled({ framePosition: 'd', number })}
        style={style.dBlock}
        size={size}
        fillColor={fillColor}
        color={color}
      />
    </View>
  );
};

const style = StyleSheet.create({
  aBlock: {
    marginBottom: 2,
  },
  dBlock: {
    marginTop: 2,
  },
  verticalBlocksContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
