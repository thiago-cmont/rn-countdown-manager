import { StyleSheet, View } from 'react-native';
import { HorizontalBlock, VerticalBlock } from '../blocks';
import { blockShouldBeFilled } from '../helpers/blockShouldBeFilled';
import { type CustomStyle, type Sizes } from '../types';
import { getFilledTestID } from '../helpers/filledTestID';

export const Frame = ({
  number,
  size,
  color,
  fillColor,
}: {
  number: number;
  size?: Sizes;
} & CustomStyle) => {
  return (
    <View testID="frame-countdown-component">
      <HorizontalBlock
        testID={getFilledTestID({
          framePosition: 'a',
          filled: blockShouldBeFilled({ framePosition: 'a', number }),
        })}
        filled={blockShouldBeFilled({ framePosition: 'a', number })}
        style={style.aBlock}
        size={size}
        fillColor={fillColor}
        color={color}
      />
      <View style={style.verticalBlocksContainer}>
        <VerticalBlock
          testID={getFilledTestID({
            framePosition: 'f',
            filled: blockShouldBeFilled({ framePosition: 'f', number }),
          })}
          filled={blockShouldBeFilled({ framePosition: 'f', number })}
          size={size}
          fillColor={fillColor}
          color={color}
        />
        <VerticalBlock
          testID={getFilledTestID({
            framePosition: 'b',
            filled: blockShouldBeFilled({ framePosition: 'b', number }),
          })}
          filled={blockShouldBeFilled({ framePosition: 'b', number })}
          size={size}
          fillColor={fillColor}
          color={color}
        />
      </View>
      <HorizontalBlock
        testID={getFilledTestID({
          framePosition: 'g',
          filled: blockShouldBeFilled({ framePosition: 'g', number }),
        })}
        filled={blockShouldBeFilled({ framePosition: 'g', number })}
        size={size}
        fillColor={fillColor}
        color={color}
      />
      <View style={style.verticalBlocksContainer}>
        <VerticalBlock
          testID={getFilledTestID({
            framePosition: 'e',
            filled: blockShouldBeFilled({ framePosition: 'e', number }),
          })}
          filled={blockShouldBeFilled({ framePosition: 'e', number })}
          size={size}
          fillColor={fillColor}
          color={color}
        />
        <VerticalBlock
          testID={getFilledTestID({
            framePosition: 'c',
            filled: blockShouldBeFilled({ framePosition: 'c', number }),
          })}
          filled={blockShouldBeFilled({ framePosition: 'c', number })}
          size={size}
          fillColor={fillColor}
          color={color}
        />
      </View>
      <HorizontalBlock
        testID={getFilledTestID({
          framePosition: 'd',
          filled: blockShouldBeFilled({ framePosition: 'd', number }),
        })}
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
