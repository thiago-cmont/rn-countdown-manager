import { formatToTimeString } from '../../timer/helpers';
import {
  TimeProps,
  ZERO_TO_FIFTY_NINE,
  ZERO_TO_NINETY_NINE,
} from '../../timer/hooks/types';
import {
  getBlocksTestIdAndAmountFromNumberReturn,
  ZERO_TO_NINE,
} from './types';

const FILLED_BLOCKS_BY_NUMBER = {
  0: ['a', 'b', 'c', 'd', 'e', 'f'],
  1: ['b', 'c'],
  2: ['a', 'b', 'd', 'e', 'g'],
  3: ['a', 'b', 'c', 'd', 'g'],
  4: ['b', 'c', 'f', 'g'],
  5: ['a', 'c', 'd', 'f', 'g'],
  6: ['a', 'c', 'd', 'e', 'f', 'g'],
  7: ['a', 'b', 'c'],
  8: ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
  9: ['a', 'b', 'c', 'f', 'g'],
};

export const iterateMap = (
  number: ZERO_TO_FIFTY_NINE | ZERO_TO_NINETY_NINE,
  blocksMap: Map<string, number>
): getBlocksTestIdAndAmountFromNumberReturn => {
  const numberStringfy = formatToTimeString(number);
  const firstDigit = numberStringfy[0];
  const secondDigit = numberStringfy[1];

  const blocksInFirstDigit =
    FILLED_BLOCKS_BY_NUMBER[Number(firstDigit) as ZERO_TO_NINE];
  const blocksInSecondDigit =
    FILLED_BLOCKS_BY_NUMBER[Number(secondDigit) as ZERO_TO_NINE];

  blocksInFirstDigit.forEach((block) => {
    const testID = `${block}-filled-block-frame-countdown-component`;
    const currentAmount = blocksMap.get(testID) || 0;
    blocksMap.set(testID, currentAmount + 1);
  });

  blocksInSecondDigit.forEach((block) => {
    const testID = `${block}-filled-block-frame-countdown-component`;
    const currentAmount = blocksMap.get(testID) || 0;
    blocksMap.set(testID, currentAmount + 1);
  });

  return blocksMap;
};

export const getBlocksTestIdAndAmountFromNumber = ({
  hours,
  minutes,
  seconds,
}: TimeProps): getBlocksTestIdAndAmountFromNumberReturn => {
  const addedBlocks = new Map([
    ['a-filled-block-frame-countdown-component', 0],
    ['b-filled-block-frame-countdown-component', 0],
    ['c-filled-block-frame-countdown-component', 0],
    ['d-filled-block-frame-countdown-component', 0],
    ['e-filled-block-frame-countdown-component', 0],
    ['f-filled-block-frame-countdown-component', 0],
    ['g-filled-block-frame-countdown-component', 0],
  ]);
  let mapWithHours;
  let mapWithMinutes;
  let mapWithSeconds;

  mapWithHours = iterateMap(hours as ZERO_TO_NINETY_NINE, addedBlocks);

  mapWithMinutes = iterateMap(minutes as ZERO_TO_FIFTY_NINE, mapWithHours);

  mapWithSeconds = iterateMap(seconds as ZERO_TO_FIFTY_NINE, mapWithMinutes);

  return mapWithSeconds;
};
