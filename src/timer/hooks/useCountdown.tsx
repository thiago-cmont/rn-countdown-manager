import { useEffect, useState } from 'react';
import {
  type TimeProps,
  type UseCountdownProps,
  type UseCountdownReturn,
} from './types';
import { getInitialTime } from '../helpers/getInitialTime';
import useInterval from './useInterval';
import { getFormattedTime, getHours, getMinutes, getSeconds } from '../helpers';

const useCountdown = ({
  autoStart,
  hours,
  minutes,
  onComplete,
  seconds,
}: UseCountdownProps): UseCountdownReturn => {
  const [remainingTime, setRemainingTime] = useState(
    getInitialTime({ hours, minutes, seconds })
  );

  const [isPaused, setIsPaused] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  const { onStart, onStop, started } = useInterval({
    callback: () => {
      console.log(getFormattedTime(remainingTime));
      setRemainingTime((time) => {
        if (time - 1000 <= 0) {
          onStop?.();
          onComplete?.();
          setIsFinished(true);
          return 0;
        }
        return time - 1000;
      });
    },
  });

  const pause = () => {
    if (isPaused) return;
    setIsPaused(true);
    onStop?.();
  };

  const resume = () => {
    if (!isPaused) return;
    setIsPaused(false);
    onStart?.();
  };

  const reset = (time: TimeProps) => {
    setRemainingTime(getInitialTime(time));
    onStart?.();
    setIsPaused(false);
    setIsFinished(false);
  };

  useEffect(() => {
    if (autoStart) {
      onStart?.();
    }
  }, [autoStart, onStart]);

  return {
    isPaused,
    isRunning: !isPaused && started!,
    pause,
    reset,
    resume,
    isFinished,
    start: onStart!,
    hours: getHours(remainingTime),
    minutes: getMinutes(remainingTime),
    seconds: getSeconds(remainingTime),
    formattedTime: getFormattedTime(remainingTime),
  };
};

export default useCountdown;
