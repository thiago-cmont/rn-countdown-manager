export const getSeconds = (remainingTime: number): number =>
  Math.floor((remainingTime / 1000) % 60);
