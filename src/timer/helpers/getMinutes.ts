import { getHours } from './getHours';

export const getMinutes = (remainingTime: number): number => {
  const hours = getHours(remainingTime) * 60;
  const minutes = Math.floor(remainingTime / (60 * 1000));
  return minutes - hours;
};
