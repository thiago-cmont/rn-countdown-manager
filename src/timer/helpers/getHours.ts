export const getHours = (remainingTime: number): number =>
  Math.floor(remainingTime / (60 * 60 * 1000));
