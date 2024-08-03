import {
  CustomBlockAssets,
  CustomFrameAssets,
  PossibleFramePositions,
} from '../types';

export const getCustomBlockAssetsFromFrameAssets = (
  position: PossibleFramePositions,
  customAssets: CustomFrameAssets
): CustomBlockAssets | undefined => {
  if (!customAssets) return undefined;
  const customFrameAssets: CustomBlockAssets = {
    filledBlock: undefined,
    block: undefined,
  };
  Object.entries(customAssets).map(([key, value]) => {
    if (key.substring(0, 1) === position) {
      key.includes('Filled')
        ? (customFrameAssets.filledBlock = value)
        : (customFrameAssets.block = value);
    }
  });

  return customFrameAssets as CustomBlockAssets;
};
