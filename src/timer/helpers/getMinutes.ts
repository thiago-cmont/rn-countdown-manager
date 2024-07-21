export const getMinutes = (remainingTime: number): number =>
  Math.floor(remainingTime / (60 * 1000));
