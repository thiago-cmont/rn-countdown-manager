import { StyleSheet, View } from 'react-native';
import { HorizontalBlock, VerticalBlock } from '../block';
import { blockShouldBeOff } from '../helpers/blockShouldBeOff';
import { type CustomStyle, type Sizes } from '../types';
import { getFilledTestID } from '../helpers/filledTestID';

export const Frame = ({
  number,
  size,
  color,
  offColor,
}: {
  number: number;
  size?: Sizes;
} & CustomStyle) => {
  return (
    <View testID="frame-countdown-component">
      <HorizontalBlock
        testID={getFilledTestID({
          framePosition: 'a',
          blockIsOff: blockShouldBeOff({ framePosition: 'a', number }),
        })}
        blockIsOff={blockShouldBeOff({ framePosition: 'a', number })}
        style={style.aBlock}
        size={size}
        offColor={offColor}
        color={color}
      />
      <View style={style.verticalBlocksContainer}>
        <VerticalBlock
          testID={getFilledTestID({
            framePosition: 'f',
            blockIsOff: blockShouldBeOff({ framePosition: 'f', number }),
          })}
          blockIsOff={blockShouldBeOff({ framePosition: 'f', number })}
          size={size}
          offColor={offColor}
          color={color}
        />
        <VerticalBlock
          testID={getFilledTestID({
            framePosition: 'b',
            blockIsOff: blockShouldBeOff({ framePosition: 'b', number }),
          })}
          blockIsOff={blockShouldBeOff({ framePosition: 'b', number })}
          size={size}
          offColor={offColor}
          color={color}
        />
      </View>
      <HorizontalBlock
        testID={getFilledTestID({
          framePosition: 'g',
          blockIsOff: blockShouldBeOff({ framePosition: 'g', number }),
        })}
        blockIsOff={blockShouldBeOff({ framePosition: 'g', number })}
        size={size}
        offColor={offColor}
        color={color}
      />
      <View style={style.verticalBlocksContainer}>
        <VerticalBlock
          testID={getFilledTestID({
            framePosition: 'e',
            blockIsOff: blockShouldBeOff({ framePosition: 'e', number }),
          })}
          blockIsOff={blockShouldBeOff({ framePosition: 'e', number })}
          size={size}
          offColor={offColor}
          color={color}
        />
        <VerticalBlock
          testID={getFilledTestID({
            framePosition: 'c',
            blockIsOff: blockShouldBeOff({ framePosition: 'c', number }),
          })}
          blockIsOff={blockShouldBeOff({ framePosition: 'c', number })}
          size={size}
          offColor={offColor}
          color={color}
        />
      </View>
      <HorizontalBlock
        testID={getFilledTestID({
          framePosition: 'd',
          blockIsOff: blockShouldBeOff({ framePosition: 'd', number }),
        })}
        blockIsOff={blockShouldBeOff({ framePosition: 'd', number })}
        style={style.dBlock}
        size={size}
        offColor={offColor}
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
