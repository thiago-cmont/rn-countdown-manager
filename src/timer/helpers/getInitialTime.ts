import { type TimeProps } from '../hooks/types';
import { HOURS_IN_MS, MINUTES_IN_MS, SECONDS_IN_MS } from '../constants';

export const getInitialTime = ({
  hours = 0,
  minutes = 0,
  seconds = 0,
}: TimeProps) => {
  const startingHour = hours * HOURS_IN_MS;
  const startingMinute = minutes * MINUTES_IN_MS;
  const startingSeconds = seconds * SECONDS_IN_MS;

  return startingHour + startingMinute + startingSeconds;
};
