import { type PossibleFramePositions } from '../types';

const BLOCKS_FILLED_POSITION_ON_FRAME = {
  1: [2, 3, 5, 6, 7, 8, 9, 0],
  2: [4, 5, 6, 8, 9, 0],
  3: [1, 2, 3, 4, 7, 8, 9, 0],
  4: [2, 3, 4, 5, 6, 8, 9],
  5: [2, 6, 8, 0],
  6: [1, 3, 4, 5, 6, 7, 8, 9, 0],
  7: [2, 3, 5, 6, 8, 0],
};

export const blockShouldBeFilled = ({
  number,
  framePosition,
}: {
  number: number;
  framePosition: PossibleFramePositions;
}): boolean => {
  return BLOCKS_FILLED_POSITION_ON_FRAME[framePosition].includes(number);
};
