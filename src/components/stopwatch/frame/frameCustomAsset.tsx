import { StyleSheet, Text, View } from 'react-native';
import { HorizontalBlock, VerticalBlock } from '../blocks';
import { blockShouldBeFilled } from '../helpers/blockShouldBeFilled';
import {
  CustomFrameAssets,
  PossibleFramePositions,
  type CustomStyle,
  type Sizes,
} from '../types';
import { getFilledTestID } from '../helpers/filledTestID';
import { getCustomBlockAssetsFromFrameAssets } from '../helpers/getCustomAssets';
import React, { SVGProps, useCallback } from 'react';

export const FrameCustom = ({
  number,
  size,
  color,
  fillColor,
  customAssets,
}: {
  number: number;
  size?: Sizes;
  customAssets: CustomFrameAssets;
} & CustomStyle) => {
  const Block = useCallback(
    ({ position }: { position: PossibleFramePositions }) => {
      const blocks = getCustomBlockAssetsFromFrameAssets(
        position,
        customAssets
      );
      if (blocks) {
        let Teste;
        if (blockShouldBeFilled({ framePosition: position, number })) {
          Teste = blocks.filledBlock as React.FC<SVGProps<any>>;
          return <Teste color="#FFF" />;
        }
        Teste = blocks.block as React.FC<SVGProps<any>>;
        return <Teste />;
      }
      return <Text>Error!</Text>;
    },
    [customAssets, number]
  );

  return (
    <View testID="frame-countdown-component">
      <View style={{ top: 18, left: 2 }}>
        <Block position="a" />
      </View>

      {/* <HorizontalBlock
        filled={blockShouldBeFilled({ framePosition: 'a', number })}
        style={style.aBlock}
        size={size}
        fillColor={fillColor}
        color={color}
        customAssets={getCustomBlockAssetsFromFrameAssets('a', customAssets!!)}
      /> */}
      <View style={style.verticalBlocksContainer}>
        <Block position="f" />
        {/* <VerticalBlock
          testID={getFilledTestID({
            framePosition: 'f',
            filled: blockShouldBeFilled({ framePosition: 'f', number }),
          })}
          filled={blockShouldBeFilled({ framePosition: 'f', number })}
          size={size}
          fillColor={fillColor}
          color={color}
        /> */}
        <Block position="b" />
        {/* <VerticalBlock
          testID={getFilledTestID({
            framePosition: 'b',
            filled: blockShouldBeFilled({ framePosition: 'b', number }),
          })}
          filled={blockShouldBeFilled({ framePosition: 'b', number })}
          size={size}
          fillColor={fillColor}
          color={color}
        />*/}
      </View>
      <View
        style={{
          left: 5,
          bottom: 8,
          // alignItems: 'center',
        }}
      >
        <Block position="g" />
      </View>
      {/* <HorizontalBlock
        testID={getFilledTestID({
          framePosition: 'g',
          filled: blockShouldBeFilled({ framePosition: 'g', number }),
        })}
        filled={blockShouldBeFilled({ framePosition: 'g', number })}
        size={size}
        fillColor={fillColor}
        color={color}
        customAssets={getCustomBlockAssetsFromFrameAssets('g', customAssets!!)}
      /> */}
      <View style={[style.verticalBlocksContainer, { bottom: 15, right: 5 }]}>
        <Block position="e" />
        {/* <VerticalBlock
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
        /> */}
        <Block position="c" />
      </View>
      <View style={{ bottom: 34, right: 8 }}>
        <Block position="d" />
      </View>
      {/* <HorizontalBlock
        testID={getFilledTestID({
          framePosition: 'd',
          filled: blockShouldBeFilled({ framePosition: 'd', number }),
        })}
        filled={blockShouldBeFilled({ framePosition: 'd', number })}
        style={style.dBlock}
        size={size}
        fillColor={fillColor}
        color={color}
        customAssets={getCustomBlockAssetsFromFrameAssets('d', customAssets!!)}
      /> */}
    </View>
  );
};

const style = StyleSheet.create({
  aBlock: {
    // marginBottom: 2,
  },
  dBlock: {
    // marginTop: 2,
  },
  verticalBlocksContainer: {
    // borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
