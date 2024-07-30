export const getFilledTestID = ({
  framePosition,
  filled,
}: {
  framePosition: string;
  filled: boolean;
}) => {
  return `${framePosition}${filled ? '-filled' : ''}-block-frame-countdown-component`;
};
