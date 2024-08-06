import { PossibleFramePositions } from '../types';

const BLOCKS_FILLED_POSITION_ON_FRAME = {
  a: [2, 3, 5, 6, 7, 8, 9, 0],
  b: [1, 2, 3, 4, 7, 8, 9, 0],
  c: [1, 3, 4, 5, 6, 7, 8, 9, 0],
  d: [2, 3, 5, 6, 8, 0],
  e: [2, 6, 8, 0],
  f: [4, 5, 6, 8, 9, 0],
  g: [2, 3, 4, 5, 6, 8, 9],
};

export const blockShouldBeOff = ({
  number,
  framePosition,
}: {
  number: number;
  framePosition: PossibleFramePositions;
}): boolean => {
  return !BLOCKS_FILLED_POSITION_ON_FRAME[framePosition].includes(number);
};
