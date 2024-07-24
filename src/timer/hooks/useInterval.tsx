import { useEffect, useState } from 'react';
import { type UseIntervalProps, type UseIntervalReturn } from './types';

const useInterval = ({ callback }: UseIntervalProps): UseIntervalReturn => {
  const [started, setStarted] = useState(false);
  const [stoped, setStoped] = useState(false);

  const onStart = () => {
    setStarted(true);
    setStoped(false);
  };
  const onStop = () => {
    setStoped(true);
    setStarted(false);
  };

  useEffect(() => {
    if (!started) {
      return;
    }
    function tick() {
      callback();
    }
    let id = setInterval(tick, 1000);
    if (stoped) {
      clearInterval(id);
    }
    return () => {
      clearInterval(id);
    };
  }, [started, stoped, callback]);

  return {
    onStart,
    onStop,
    started,
    stoped,
  };
};

export default useInterval;
