import { StyleSheet, Text, View } from 'react-native';
import { blockShouldBeOff } from '../helpers/blockShouldBeOff';
import { CustomBlockType, PossibleFramePositions } from '../types';
import React, { SVGProps, useCallback } from 'react';

export const FrameWithcustomBlocks = ({
  number,
  customBlocks,
}: {
  number: number;
  customBlocks: CustomBlockType;
}) => {
  const CustomBlock = useCallback(
    ({ position }: { position: PossibleFramePositions }) => {
      const block = customBlocks?.[position];
      const blockIsOff = blockShouldBeOff({
        framePosition: position,
        number,
      });
      const Block = block.asset as React.FC<SVGProps<any>>;
      const OffBlock = block.offAsset as React.FC<SVGProps<any>>;
      const blockPositionStyle = block.position;
      if (block) {
        if (!block.customOffAsset) {
          return (
            <View style={blockPositionStyle}>
              <Block opacity={blockIsOff ? 0 : 1} />
            </View>
          );
        }
        if (blockIsOff) {
          return (
            <View style={blockPositionStyle}>
              <OffBlock />
            </View>
          );
        }
        return (
          <View style={blockPositionStyle}>
            <Block />
          </View>
        );
      }
      return <Text>Error!</Text>;
    },
    [customBlocks, number]
  );

  return (
    <View testID="frame-with-custom-blocks-countdown-component">
      <CustomBlock position="a" />
      <View style={style.verticalBlocksContainer}>
        <CustomBlock position="f" />
        <CustomBlock position="b" />
      </View>
      <CustomBlock position="g" />
      <View style={style.verticalBlocksContainer}>
        <CustomBlock position="e" />
        <CustomBlock position="c" />
      </View>
      <CustomBlock position="d" />
    </View>
  );
};

const style = StyleSheet.create({
  verticalBlocksContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
