export type TimeProps = {
  hours?: ZERO_TO_NINETY_NINE;
  minutes?: ZERO_TO_FIFTY_NINE;
  seconds?: ZERO_TO_FIFTY_NINE;
};

export type UseCountdownProps = {
  autoStart?: boolean;
  onComplete?: () => void;
} & TimeProps;

export type UseCountdownReturn = {
  isRunning: boolean;
  isPaused: boolean;
  isFinished: boolean;
  start: () => void;
  pause: () => void;
  resume: () => void;
  reset: (time: TimeProps) => void;
  formattedTime: string;
} & TimeProps;

export type UseIntervalProps = {
  callback: () => void;
};

export type UseIntervalReturn = {
  onStart?: () => void;
  onStop?: () => void;
  stoped?: boolean;
  started?: boolean;
};

export type CreateArrayWithLengthX<
  LENGTH extends number,
  ACC extends unknown[] = [],
> = ACC['length'] extends LENGTH
  ? ACC
  : CreateArrayWithLengthX<LENGTH, [...ACC, 1]>;

export type NumericRange<
  START_ARR extends number[],
  END extends number,
  ACC extends number = never,
> = START_ARR['length'] extends END
  ? ACC | END
  : NumericRange<[...START_ARR, 1], END, ACC | START_ARR['length']>;

export type ZERO_TO_FIFTY_NINE = NumericRange<CreateArrayWithLengthX<0>, 59>;
export type ZERO_TO_NINETY_NINE = NumericRange<CreateArrayWithLengthX<0>, 99>;
