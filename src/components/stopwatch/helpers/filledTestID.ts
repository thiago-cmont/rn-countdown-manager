export const getFilledTestID = ({
  framePosition,
  blockIsOff,
}: {
  framePosition: string;
  blockIsOff: boolean;
}) => {
  return `${framePosition}${blockIsOff ? '-off' : ''}-block-frame-countdown-component`;
};
