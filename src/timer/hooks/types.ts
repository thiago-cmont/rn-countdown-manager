export type TimeProps = {
  hours?: number;
  minutes?: number;
  seconds?: number;
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
